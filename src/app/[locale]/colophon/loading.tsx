export default function ColophonLoading() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl space-y-8">
      {/* Hero */}
      <div className="text-center space-y-4 py-8 animate-pulse">
        <div className="h-10 w-56 bg-muted rounded mx-auto" />
        <div className="h-5 w-72 bg-muted rounded mx-auto" />
      </div>

      {/* Intro Note */}
      <div className="max-w-lg mx-auto animate-pulse">
        <div className="h-20 bg-muted rounded" />
      </div>

      {/* 5 Stack Sections */}
      {[...Array(5)].map((_, sectionIdx) => (
        <div key={sectionIdx} className="py-8 animate-pulse">
          {/* Section header */}
          <div className="flex items-center gap-2 mb-4">
            <div className="size-4 bg-muted rounded" />
            <div className="h-4 w-36 bg-muted rounded" />
          </div>
          <div className="h-3 w-48 bg-muted rounded mb-4" />

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[...Array(sectionIdx % 2 === 0 ? 4 : 3)].map((_, cardIdx) => (
              <div
                key={cardIdx}
                className="p-4 border border-border space-y-2"
              >
                <div className="flex items-center gap-2">
                  <div className="size-5 bg-muted rounded" />
                  <div className="h-4 w-20 bg-muted rounded" />
                </div>
                <div className="h-3 w-full bg-muted rounded" />
                <div className="h-3 w-3/4 bg-muted rounded" />
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Philosophy */}
      <div className="py-8 text-center space-y-3 animate-pulse">
        <div className="h-6 w-40 bg-muted rounded mx-auto" />
        <div className="h-4 w-56 bg-muted rounded mx-auto" />
        <div className="h-3 w-48 bg-muted rounded mx-auto" />
      </div>
    </div>
  );
}
