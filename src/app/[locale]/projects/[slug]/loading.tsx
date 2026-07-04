export default function ProjectDetailLoading() {
  return (
    <div className="min-h-screen animate-pulse">
      {/* Screenshot hero skeleton */}
      <div className="relative w-full aspect-[16/9] max-h-[500px] bg-muted" />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back link skeleton */}
        <div className="mb-6">
          <div className="h-5 w-28 bg-muted rounded" />
        </div>

        {/* Title section */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap gap-2">
            <div className="h-6 w-20 bg-muted rounded-full" />
            <div className="h-6 w-24 bg-muted rounded-full" />
          </div>
          <div className="h-10 w-3/4 bg-muted rounded" />
          <div className="h-5 w-full bg-muted rounded" />
          <div className="h-5 w-2/3 bg-muted rounded" />
        </div>

        {/* Meta row */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="h-5 w-28 bg-muted rounded" />
          <div className="h-5 w-32 bg-muted rounded" />
          <div className="h-5 w-20 bg-muted rounded" />
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-7 w-20 bg-muted rounded" />
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mb-8">
          <div className="h-10 w-32 bg-muted rounded" />
          <div className="h-10 w-36 bg-muted rounded" />
        </div>

        {/* Description */}
        <div className="space-y-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-4 w-full bg-muted rounded" />
          ))}
        </div>
      </div>
    </div>
  );
}
