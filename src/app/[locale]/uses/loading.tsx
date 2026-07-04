export default function UsesLoading() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl space-y-8">
      {/* Breadcrumb placeholder */}
      <div className="animate-pulse">
        <div className="h-4 w-32 bg-muted rounded" />
      </div>

      {/* Hero */}
      <div className="text-center space-y-4 py-8 animate-pulse">
        <div className="h-10 w-56 bg-muted rounded mx-auto" />
        <div className="h-5 w-72 bg-muted rounded mx-auto" />
      </div>

      {/* Setup sections (Hardware, Software, AI Tools, etc.) */}
      {[...Array(5)].map((_, sectionIdx) => (
        <div key={sectionIdx} className="py-6 animate-pulse">
          {/* Section header */}
          <div className="flex items-center gap-2 mb-4">
            <div className="size-5 bg-muted rounded" />
            <div className="h-5 w-36 bg-muted rounded" />
          </div>
          <div className="h-3 w-52 bg-muted rounded mb-4" />

          {/* Items grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[...Array(sectionIdx % 2 === 0 ? 4 : 3)].map((_, cardIdx) => (
              <div
                key={cardIdx}
                className="p-4 border border-border space-y-2"
              >
                <div className="flex items-center gap-2">
                  <div className="size-5 bg-muted rounded" />
                  <div className="h-4 w-24 bg-muted rounded" />
                </div>
                <div className="h-3 w-full bg-muted rounded" />
                <div className="h-3 w-3/4 bg-muted rounded" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
