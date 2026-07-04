export default function BlogLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero skeleton */}
      <div className="text-center mb-12 space-y-4">
        <div className="h-10 w-48 bg-muted animate-pulse mx-auto rounded" />
        <div className="h-5 w-96 max-w-full bg-muted animate-pulse mx-auto rounded" />
      </div>

      {/* Search bar skeleton */}
      <div className="max-w-md mx-auto mb-6">
        <div className="bg-muted border border-border p-2">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-muted-foreground/20 rounded ml-1" />
            <div className="h-8 flex-1 bg-muted-foreground/10 rounded" />
          </div>
        </div>
      </div>

      {/* Tag pills skeleton */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-7 w-20 bg-muted animate-pulse rounded"
            style={{ animationDelay: `${i * 100}ms` }}
          />
        ))}
      </div>

      {/* Featured section skeleton */}
      <div className="mb-12">
        <div className="h-8 w-40 bg-muted animate-pulse mb-6 rounded" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {Array.from({ length: 2 }).map((_, i) => (
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
                <div className="flex gap-3">
                  <div className="h-3 w-16 bg-muted animate-pulse rounded" />
                  <div className="h-3 w-12 bg-muted animate-pulse rounded" />
                </div>
                <div className="h-6 w-3/4 bg-muted animate-pulse rounded" />
                <div className="space-y-1.5">
                  <div className="h-3 w-full bg-muted animate-pulse rounded" />
                  <div className="h-3 w-2/3 bg-muted animate-pulse rounded" />
                </div>
                <div className="flex gap-1.5">
                  <div className="h-5 w-14 bg-muted animate-pulse rounded" />
                  <div className="h-5 w-16 bg-muted animate-pulse rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent section skeleton */}
      <div>
        <div className="h-8 w-36 bg-muted animate-pulse mb-6 rounded" />
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
    </div>
  );
}
