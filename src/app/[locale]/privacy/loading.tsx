export default function PrivacyLoading() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-4xl space-y-8">
        {/* Breadcrumb placeholder */}
        <div className="animate-pulse">
          <div className="h-4 w-40 bg-muted rounded" />
        </div>

        {/* Hero */}
        <div className="text-center space-y-4 py-8 animate-pulse">
          <div className="h-10 w-64 bg-muted rounded mx-auto" />
          <div className="h-5 w-80 bg-muted rounded mx-auto" />
        </div>

        {/* General Card */}
        <div className="animate-pulse">
          <div className="border border-border rounded-lg p-6 space-y-6">
            <div className="h-6 w-40 bg-muted rounded" />
            {[...Array(5)].map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 w-36 bg-muted rounded" />
                <div className="h-3 w-full bg-muted rounded" />
                <div className="h-3 w-3/4 bg-muted rounded" />
              </div>
            ))}
          </div>
        </div>

        {/* Apps Card */}
        <div className="animate-pulse">
          <div className="border border-border rounded-lg p-6 space-y-6">
            <div className="h-6 w-32 bg-muted rounded" />
            <div className="h-3 w-56 bg-muted rounded" />
            <div className="grid md:grid-cols-2 gap-4">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="h-20 border border-border rounded flex flex-col items-center justify-center gap-2">
                  <div className="h-4 w-28 bg-muted rounded" />
                  <div className="h-3 w-40 bg-muted rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
