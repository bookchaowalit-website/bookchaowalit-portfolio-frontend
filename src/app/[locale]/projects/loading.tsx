export default function ProjectsLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero skeleton */}
      <div className="text-center mb-12 space-y-4">
        <div className="h-10 w-56 bg-muted animate-pulse mx-auto rounded" />
        <div className="h-5 w-80 max-w-full bg-muted animate-pulse mx-auto rounded" />
      </div>

      {/* Filter bar skeleton */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="h-8 w-24 bg-muted animate-pulse rounded"
            style={{ animationDelay: `${i * 80}ms` }}
          />
        ))}
      </div>

      {/* Project grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="relative bg-background border border-border overflow-hidden"
          >
            {/* Notebook lines */}
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
              <div className="flex items-center justify-between">
                <div className="h-5 w-32 bg-muted animate-pulse rounded" />
                <div className="h-4 w-4 bg-muted animate-pulse rounded-full" />
              </div>
              <div className="space-y-1.5">
                <div className="h-3 w-full bg-muted animate-pulse rounded" />
                <div className="h-3 w-2/3 bg-muted animate-pulse rounded" />
              </div>
              <div className="flex flex-wrap gap-1.5">
                <div className="h-5 w-14 bg-muted animate-pulse rounded" />
                <div className="h-5 w-16 bg-muted animate-pulse rounded" />
                <div className="h-5 w-12 bg-muted animate-pulse rounded" />
              </div>
              <div className="flex items-center gap-2 pt-1">
                <div className="h-3 w-3 bg-muted animate-pulse rounded-full" />
                <div className="h-3 w-12 bg-muted animate-pulse rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
