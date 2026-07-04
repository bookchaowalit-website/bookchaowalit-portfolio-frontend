export default function MessengerBotPrivacyLoading() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-4xl space-y-8">
        {/* Breadcrumb placeholder */}
        <div className="animate-pulse">
          <div className="h-4 w-48 bg-muted rounded" />
        </div>

        {/* Back button + Hero */}
        <div className="mb-8 animate-pulse">
          <div className="h-8 w-32 bg-muted rounded mb-4" />
          <div className="text-center space-y-3">
            <div className="h-8 w-64 bg-muted rounded mx-auto" />
            <div className="h-5 w-72 bg-muted rounded mx-auto" />
          </div>
        </div>

        {/* Effective date card */}
        <div className="animate-pulse">
          <div className="border border-border rounded-lg p-6 space-y-3">
            <div className="h-5 w-32 bg-muted rounded" />
            <div className="h-3 w-40 bg-muted rounded" />
          </div>
        </div>

        {/* 8 policy cards */}
        <div className="space-y-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="border border-border rounded-lg p-6 space-y-3">
                <div className="h-5 w-40 bg-muted rounded" />
                <div className="h-3 w-full bg-muted rounded" />
                <div className="h-3 w-3/4 bg-muted rounded" />
                {i % 2 === 0 && (
                  <>
                    <div className="h-3 w-5/6 bg-muted rounded" />
                    <div className="h-3 w-2/3 bg-muted rounded" />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
