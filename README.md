# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Shadcn UI. Features a content management system (CMS) for easy blog content management.

## 🚀 Features

- **Modern Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Beautiful UI**: Uses Shadcn UI components for a consistent, professional design
- **Blog CMS**: MDX-based content management system for easy blog post creation
- **Responsive Design**: Fully responsive across all device sizes
- **SEO Optimized**: Built-in SEO optimization with Next.js
- **Performance**: Optimized for speed with static generation and image optimization
- **Type Safe**: Full TypeScript support for better development experience

## 📱 Pages

- **Home**: Hero section, skills showcase, featured projects, and latest blog posts
- **About**: Personal story, technical skills, experience, and education
- **Projects**: Portfolio of projects with detailed descriptions and tech stacks
- **Blog**: Blog listing and individual blog post pages with MDX content
- **Contact**: Contact form and social media links

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Shadcn UI
- **Content**: MDX for blog posts
- **Icons**: Lucide React (via Shadcn UI)
- **Fonts**: Geist Sans & Geist Mono

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd bookchaowalit-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Content Management

### Adding Blog Posts

1. Create a new `.mdx` file in the `content/blog/` directory
2. Add frontmatter with the following structure:

```mdx
---
title: "Your Blog Post Title"
excerpt: "A brief description of your post"
author: "Your Name"
publishedAt: "2024-12-15"
tags: ["Tag1", "Tag2", "Tag3"]
featured: true  # Set to true for featured posts
---

# Your Blog Post Content

Write your blog post content here using Markdown and MDX.
```

3. The post will automatically appear in the blog listing and be available at `/blog/your-filename`

### Customizing Content

- **Personal Information**: Update the content in page components to reflect your information
- **Skills**: Modify the skills arrays in the About and Home pages
- **Projects**: Update the projects array in the Projects page
- **Social Links**: Update social media links in the Contact page

## GitHub Activity (Edge Function)

This project includes an Edge API route that fetches your latest GitHub repositories and serves them from the Edge. To enable:

- **Add environment variables**:
  - `GITHUB_USERNAME=your-username`
  - `GITHUB_TOKEN=ghp_...` (optional but recommended to avoid rate limits)

- **Local test**:
  - Run: `GITHUB_USERNAME=your-username npm run dev`
  - Open: `http://localhost:3000/api/github`

- **On Vercel**:
  - Add `GITHUB_USERNAME` and `GITHUB_TOKEN` in Project → Settings → Environment Variables.
  - The route will run as an Edge Function on Vercel.

**Cache and rate-limit notes**: The route sets CDN caching headers (`s-maxage`, `stale-while-revalidate`) and returns `429` with `Retry-After` if GitHub rate limits are hit.

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with default settings

### Other Deployment Options

- **Netlify**: Works out of the box
- **AWS Amplify**: Compatible with static export
- **GitHub Pages**: Use `next export` for static deployment

## 📧 Contact Form Setup

The contact form is fully functional and ready for production. It uses **Resend** for email delivery.

### Setting up Email Delivery

1. **Sign up for Resend**:
   - Go to [resend.com](https://resend.com)
   - Create a free account
   - Verify your domain (recommended for production)

2. **Get your API Key**:
   - Go to API Keys in your Resend dashboard
   - Create a new API key

3. **Configure Environment Variables**:
   ```bash
   # Copy the example file
   cp .env.example .env.local

   # Add your Resend configuration
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_EMAIL=your-email@example.com
   ```

4. **Deploy**:
   - The contact form will automatically use Resend when the API key is configured
   - Without the API key, it will log messages to the console (useful for development)

### Features

- ✅ **Form validation**: Client and server-side validation
- ✅ **Loading states**: Visual feedback during submission
- ✅ **Error handling**: Graceful error messages
- ✅ **Success feedback**: Confirmation messages
- ✅ **Responsive design**: Works on all devices
- ✅ **Accessibility**: Proper form labels and ARIA attributes

### Alternative Email Services

If you prefer a different email service, you can easily modify `src/app/api/contact/route.ts`:

- **SendGrid**: Replace Resend with SendGrid SDK
- **EmailJS**: Client-side only solution
- **Nodemailer**: Self-hosted SMTP solution

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── about/          # About page
│   ├── blog/           # Blog pages
│   ├── contact/        # Contact page
│   ├── projects/       # Projects page
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── ui/            # Shadcn UI components
│   └── navigation.tsx # Navigation component
└── lib/               # Utility functions
    └── blog.ts        # Blog content utilities
content/
└── blog/              # MDX blog posts
public/                # Static assets
```

## 🎨 Customization

### Colors and Theme

The project uses Tailwind CSS with Shadcn UI's default theme. You can customize colors in:
- `src/app/globals.css` - CSS variables for colors
- `tailwind.config.js` - Extend the color palette

### Components

All UI components are built with Shadcn UI and can be customized:
- Modify existing components in `src/components/ui/`
- Add new components with `npx shadcn@latest add [component-name]`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

## 📞 Support

If you have any questions or need help, feel free to [open an issue](issues) or contact me through the website's contact form.

---

Made with ❤️ and Next.js
