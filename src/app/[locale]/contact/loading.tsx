export default function ContactLoading() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Hero */}
      <div className="text-center space-y-8 mb-12 animate-pulse">
        <div className="space-y-3">
          <div className="h-10 w-56 bg-muted rounded mx-auto" />
          <div className="h-5 w-64 bg-muted rounded mx-auto" />
        </div>
        <div className="max-w-lg mx-auto">
          <div className="h-20 w-full bg-muted rounded" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-pulse">
        {/* Contact form */}
        <div className="min-h-[600px] border border-border p-6">
          <div className="space-y-2 mb-6">
            <div className="h-6 w-40 bg-muted rounded" />
            <div className="h-4 w-56 bg-muted rounded" />
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="h-4 w-16 bg-muted rounded" />
              <div className="h-10 w-full bg-muted rounded" />
            </div>
            <div className="space-y-2">
              <div className="h-4 w-16 bg-muted rounded" />
              <div className="h-10 w-full bg-muted rounded" />
            </div>
            <div className="space-y-2">
              <div className="h-4 w-20 bg-muted rounded" />
              <div className="h-10 w-full bg-muted rounded" />
            </div>
            <div className="space-y-2">
              <div className="h-4 w-20 bg-muted rounded" />
              <div className="h-32 w-full bg-muted rounded" />
            </div>
            <div className="h-10 w-full bg-muted rounded" />
          </div>
        </div>

        {/* Contact info */}
        <div className="space-y-6">
          <div className="py-8">
            <div className="space-y-3 mb-4">
              <div className="h-6 w-40 bg-muted rounded" />
              <div className="h-4 w-48 bg-muted rounded" />
            </div>
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-muted rounded" />
                  <div className="space-y-1">
                    <div className="h-4 w-20 bg-muted rounded" />
                    <div className="h-3 w-32 bg-muted rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="py-8">
            <div className="space-y-3 mb-4">
              <div className="h-6 w-48 bg-muted rounded" />
              <div className="h-4 w-56 bg-muted rounded" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-10 w-full bg-muted rounded" />
              ))}
            </div>
          </div>

          <div className="h-40 w-full bg-muted rounded" />

          <div className="py-8">
            <div className="space-y-3 mb-4">
              <div className="h-6 w-36 bg-muted rounded" />
              <div className="h-4 w-44 bg-muted rounded" />
            </div>
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="h-4 w-28 bg-muted rounded" />
                  <div className="h-6 w-20 bg-muted rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
