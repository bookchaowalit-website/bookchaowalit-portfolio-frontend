export default function AtlasLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero skeleton */}
      <div className="text-center mb-12 space-y-4">
        <div className="h-10 w-72 bg-muted animate-pulse mx-auto rounded" />
        <div className="h-5 w-96 max-w-full bg-muted animate-pulse mx-auto rounded" />
      </div>

      {/* Visualization area skeleton */}
      <div className="relative w-full aspect-square max-w-2xl mx-auto mb-12">
        <div className="absolute inset-0 border border-border rounded-lg bg-muted/30 animate-pulse" />
        {/* Node placeholders */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-12 h-12 bg-muted animate-pulse rounded-full"
            style={{
              top: `${20 + Math.sin(i * 0.8) * 30}%`,
              left: `${20 + Math.cos(i * 0.8) * 30}%`,
              animationDelay: `${i * 120}ms`,
            }}
          />
        ))}
      </div>

      {/* Category list skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="relative bg-background border border-border overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 8 }).map((_, j) => (
                <div
                  key={j}
                  className="absolute left-0 right-0 h-px bg-border/50"
                  style={{ top: `${(j + 1) * 12}%` }}
                />
              ))}
            </div>
            <div className="relative z-10 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 bg-muted animate-pulse rounded-full" />
                <div className="h-4 w-24 bg-muted animate-pulse rounded" />
              </div>
              <div className="h-3 w-16 bg-muted animate-pulse rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
