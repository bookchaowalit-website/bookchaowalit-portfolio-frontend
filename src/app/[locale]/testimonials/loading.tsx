export default function TestimonialsLoading() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      {/* Hero */}
      <div className="text-center space-y-4 py-8 animate-pulse">
        <div className="h-10 w-52 bg-muted rounded mx-auto" />
        <div className="h-5 w-64 bg-muted rounded mx-auto" />
      </div>

      {/* Testimonials grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, idx) => (
          <div
            key={idx}
            className="p-6 border border-border space-y-4 animate-pulse"
          >
            <div className="space-y-2">
              <div className="h-3 w-full bg-muted rounded" />
              <div className="h-3 w-full bg-muted rounded" />
              <div className="h-3 w-3/4 bg-muted rounded" />
            </div>
            <div className="flex items-center gap-3 pt-2">
              <div className="size-10 bg-muted rounded-full" />
              <div className="space-y-1">
                <div className="h-3 w-20 bg-muted rounded" />
                <div className="h-2 w-16 bg-muted rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
