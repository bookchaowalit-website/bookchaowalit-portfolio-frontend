import createMDX from '@next/mdx'
import createNextIntlPlugin from 'next-intl/plugin';
import bundleAnalyzer from '@next/bundle-analyzer';
import { withSentryConfig } from '@sentry/nextjs';
import withSerwistInit from '@serwist/next';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const withSerwist = withSerwistInit({
  swUrl: '/sw.js',
  swDest: 'public/sw.js',
  swSrc: 'src/app/sw.ts',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  scope: '/',
});

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-avatar', '@radix-ui/react-dropdown-menu'],
    esmExternals: true,
  },
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Bundle optimization
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
      };
      
      // Only apply custom splitChunks to client bundle.
      // Applying it to the server bundle causes browser-only code
      // (e.g. `self` references) to leak into SSR and crash all pages.
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            vendor: {
              chunks: 'all',
              name: 'vendor',
              test: /[\\/]node_modules[\\/]/,
              priority: 20,
            },
            common: {
              name: 'common',
              minChunks: 2,
              priority: 10,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }
    
    return config;
  },
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'icon.horse',
        pathname: '/icon/**',
      },
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
      },
    ],
  },
  
  // Redirect non-localized URLs to default locale
  async redirects() {
    return [
      { source: '/about', destination: '/en/about', permanent: false },
      { source: '/about/:path*', destination: '/en/about/:path*', permanent: false },
      { source: '/projects', destination: '/en/projects', permanent: false },
      { source: '/projects/:path*', destination: '/en/projects/:path*', permanent: false },
      { source: '/blog', destination: '/en/blog', permanent: false },
      { source: '/blog/:path*', destination: '/en/blog/:path*', permanent: false },
      { source: '/contact', destination: '/en/contact', permanent: false },
      { source: '/atlas', destination: '/en/atlas', permanent: false },
      { source: '/privacy', destination: '/en/privacy', permanent: false },
      { source: '/privacy/:path*', destination: '/en/privacy/:path*', permanent: false },
      { source: '/testimonials', destination: '/en/testimonials', permanent: false },
      { source: '/uses', destination: '/en/uses', permanent: false },
      { source: '/now', destination: '/en/now', permanent: false },
      { source: '/colophon', destination: '/en/colophon', permanent: false },
      { source: '/live-systems', destination: '/en/live-systems', permanent: false },
    ];
  },

  // Headers for caching and performance
  async headers() {
    return [
      {
        source: '/profile.webp',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*\\.(?:js|css|woff2?|png|jpe?g|webp|avif|svg|ico))$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
        ],
      },
    ];
  },
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

// Merge MDX config with Next.js config, next-intl, bundle analyzer, and Serwist (PWA)
const bundledConfig = withSerwist(withBundleAnalyzer(withNextIntl(withMDX(nextConfig))))

// Wrap with Sentry
export default withSentryConfig(bundledConfig, {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options

  // Suppresses source map upload logs
  silent: !process.env.CI,

  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,

  // Set to false to disable source map uploads
  sourcemaps: {
    disable: process.env.NODE_ENV !== 'production',
  },

  // Hides source maps from generated client bundles
  hideSourceMaps: true,
})// redeploy 2026-07-02
