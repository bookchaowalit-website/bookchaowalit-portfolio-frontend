export default function AboutLoading() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Hero section */}
      <div className="text-center space-y-8 py-8 animate-pulse">
        <div className="w-32 h-32 rounded-full bg-muted mx-auto" />
        <div className="space-y-3">
          <div className="h-10 w-48 bg-muted rounded mx-auto" />
          <div className="h-5 w-64 bg-muted rounded mx-auto" />
        </div>
        <div className="max-w-lg mx-auto">
          <div className="h-20 w-full bg-muted rounded" />
        </div>
      </div>

      <div className="space-y-12">
        {/* Bio section */}
        <div className="py-8 animate-pulse">
          <div className="space-y-3 mb-6">
            <div className="h-8 w-40 bg-muted rounded mx-auto" />
            <div className="h-4 w-56 bg-muted rounded mx-auto" />
          </div>
          <div className="space-y-6">
            <div className="h-40 w-full bg-muted rounded border border-border" />
            <div className="h-40 w-full bg-muted rounded border border-border" />
          </div>
        </div>

        {/* Skills section */}
        <div className="py-8 animate-pulse">
          <div className="space-y-3 mb-6">
            <div className="h-8 w-48 bg-muted rounded mx-auto" />
            <div className="h-4 w-52 bg-muted rounded mx-auto" />
          </div>
          <div className="space-y-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-24 w-full bg-muted rounded border border-border" />
            ))}
          </div>
        </div>

        {/* Experience section */}
        <div className="py-8 animate-pulse">
          <div className="space-y-3 mb-6">
            <div className="h-8 w-36 bg-muted rounded mx-auto" />
            <div className="h-4 w-44 bg-muted rounded mx-auto" />
          </div>
          <div className="space-y-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="h-5 w-40 bg-muted rounded" />
                <div className="h-4 w-56 bg-muted rounded" />
                <div className="h-4 w-full bg-muted rounded" />
                {i < 3 && <div className="h-px w-full bg-muted mt-4" />}
              </div>
            ))}
          </div>
        </div>

        {/* Education section */}
        <div className="py-8 animate-pulse">
          <div className="space-y-3 mb-6">
            <div className="h-8 w-44 bg-muted rounded mx-auto" />
            <div className="h-4 w-36 bg-muted rounded mx-auto" />
          </div>
          <div className="space-y-4">
            <div className="h-12 w-full bg-muted rounded" />
            <div className="h-20 w-full bg-muted rounded" />
          </div>
        </div>

        {/* Fun facts */}
        <div className="h-40 w-full bg-muted rounded animate-pulse" />

        {/* Atlas bridge */}
        <div className="py-8 animate-pulse">
          <div className="space-y-3 mb-6">
            <div className="h-8 w-52 bg-muted rounded mx-auto" />
            <div className="h-4 w-48 bg-muted rounded mx-auto" />
          </div>
          <div className="h-48 w-full bg-muted rounded border border-border" />
        </div>
      </div>
    </div>
  );
}
