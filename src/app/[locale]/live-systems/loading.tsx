export default function LiveSystemsLoading() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl space-y-12">
      {/* Hero */}
      <div className="text-center space-y-4 py-8 animate-pulse">
        <div className="h-6 w-32 bg-muted rounded-full mx-auto" />
        <div className="h-12 w-80 bg-muted rounded mx-auto" />
        <div className="h-5 w-96 bg-muted rounded mx-auto" />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-pulse">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="p-4 border rounded-xl space-y-2">
            <div className="h-10 w-10 bg-muted rounded-lg" />
            <div className="h-8 w-16 bg-muted rounded" />
            <div className="h-3 w-20 bg-muted rounded" />
          </div>
        ))}
      </div>

      {/* Source Grid */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 animate-pulse">
          <div className="h-6 w-6 bg-muted rounded" />
          <div className="h-6 w-40 bg-muted rounded" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-pulse">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="p-4 border rounded-xl space-y-3">
              <div className="flex justify-between">
                <div className="h-5 w-24 bg-muted rounded" />
                <div className="h-4 w-4 bg-muted rounded-full" />
              </div>
              <div className="space-y-2">
                <div className="h-3 w-full bg-muted rounded" />
                <div className="h-3 w-2/3 bg-muted rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture */}
      <div className="space-y-4 animate-pulse">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 bg-muted rounded" />
          <div className="h-6 w-40 bg-muted rounded" />
        </div>
        <div className="grid grid-cols-5 gap-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="p-4 border rounded-xl space-y-2">
              <div className="h-10 w-10 bg-muted rounded-lg mx-auto" />
              <div className="h-4 w-20 bg-muted rounded mx-auto" />
              <div className="h-3 w-24 bg-muted rounded mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
