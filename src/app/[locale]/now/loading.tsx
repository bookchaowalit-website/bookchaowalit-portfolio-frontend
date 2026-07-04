export default function NowLoading() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl space-y-8">
      {/* Hero */}
      <div className="text-center space-y-4 py-8 animate-pulse">
        <div className="h-10 w-40 bg-muted rounded mx-auto" />
        <div className="h-5 w-56 bg-muted rounded mx-auto" />
      </div>

      {/* Intro Note */}
      <div className="max-w-lg mx-auto animate-pulse">
        <div className="h-16 bg-muted rounded" />
      </div>

      {/* 4 Now Sections */}
      {[...Array(4)].map((_, sectionIdx) => (
        <div key={sectionIdx} className="py-6 animate-pulse">
          {/* Section header */}
          <div className="flex items-center gap-2 mb-4">
            <div className="size-4 bg-muted rounded" />
            <div className="h-4 w-28 bg-muted rounded" />
          </div>

          {/* Items */}
          <div className="space-y-3">
            {[...Array(sectionIdx % 2 === 0 ? 3 : 4)].map((_, itemIdx) => (
              <div
                key={itemIdx}
                className="p-4 border border-border space-y-2"
              >
                <div className="h-4 w-32 bg-muted rounded" />
                <div className="h-3 w-full bg-muted rounded" />
                <div className="h-3 w-2/3 bg-muted rounded" />
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Footer */}
      <div className="py-8 text-center space-y-3 animate-pulse">
        <div className="h-4 w-48 bg-muted rounded mx-auto" />
        <div className="h-3 w-40 bg-muted rounded mx-auto" />
      </div>
    </div>
  );
}
