export default function BlogTagLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Tag header skeleton */}
      <div className="text-center mb-12 space-y-4">
        <div className="h-5 w-12 bg-muted animate-pulse mx-auto rounded" />
        <div className="h-12 w-48 bg-muted animate-pulse mx-auto rounded" />
        <div className="h-5 w-64 bg-muted animate-pulse mx-auto rounded" />
        <div className="h-9 w-32 bg-muted animate-pulse mx-auto rounded" />
      </div>

      {/* Posts skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="relative bg-background border border-border overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 12 }).map((_, j) => (
                <div
                  key={j}
                  className="absolute left-0 right-0 h-px bg-border/50"
                  style={{ top: `${(j + 1) * 8}%` }}
                />
              ))}
              <div className="absolute left-10 top-0 bottom-0 w-px bg-border/60" />
            </div>
            <div className="relative z-10 p-5 pl-14 space-y-3">
              <div className="flex gap-3">
                <div className="h-3 w-16 bg-muted animate-pulse rounded" />
                <div className="h-3 w-12 bg-muted animate-pulse rounded" />
              </div>
              <div className="h-5 w-4/5 bg-muted animate-pulse rounded" />
              <div className="space-y-1.5">
                <div className="h-3 w-full bg-muted animate-pulse rounded" />
                <div className="h-3 w-1/2 bg-muted animate-pulse rounded" />
              </div>
              <div className="flex gap-1.5">
                <div className="h-5 w-12 bg-muted animate-pulse rounded" />
                <div className="h-5 w-14 bg-muted animate-pulse rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
