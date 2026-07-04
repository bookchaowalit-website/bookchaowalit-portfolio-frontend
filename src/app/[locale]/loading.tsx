export default function HomeLoading() {
  return (
    <div className="container mx-auto px-4 space-y-16 md:space-y-20 lg:space-y-24">
      {/* Hero skeleton */}
      <div className="h-[600px] animate-pulse bg-muted border border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/50 to-transparent animate-shimmer" />
      </div>

      {/* Atlas skeleton */}
      <div className="h-96 animate-pulse bg-muted border border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/50 to-transparent animate-shimmer" />
      </div>

      {/* About skeleton */}
      <div className="h-80 animate-pulse bg-muted border border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/50 to-transparent animate-shimmer" />
      </div>

      {/* Projects skeleton */}
      <div className="h-[500px] animate-pulse bg-muted border border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/50 to-transparent animate-shimmer" />
      </div>

      {/* Business skeleton */}
      <div className="h-72 animate-pulse bg-muted border border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/50 to-transparent animate-shimmer" />
      </div>

      {/* Testimonials skeleton */}
      <div className="h-80 animate-pulse bg-muted border border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/50 to-transparent animate-shimmer" />
      </div>

      {/* Blog skeleton */}
      <div className="h-64 animate-pulse bg-muted border border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/50 to-transparent animate-shimmer" />
      </div>

      {/* Newsletter skeleton */}
      <div className="h-48 animate-pulse bg-muted border border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/50 to-transparent animate-shimmer" />
      </div>

      {/* Contact skeleton */}
      <div className="h-96 animate-pulse bg-muted border border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/50 to-transparent animate-shimmer" />
      </div>
    </div>
  );
}
