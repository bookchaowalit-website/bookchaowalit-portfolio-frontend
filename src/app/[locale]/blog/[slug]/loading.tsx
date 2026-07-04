export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl animate-pulse">
      <div className="mb-8">
        <div className="h-8 w-24 bg-muted rounded" />
      </div>
      <div className="space-y-6 mb-12">
        <div className="flex gap-2">
          <div className="h-6 w-16 bg-muted rounded" />
          <div className="h-6 w-20 bg-muted rounded" />
          <div className="h-6 w-14 bg-muted rounded" />
        </div>
        <div className="h-12 w-3/4 bg-muted rounded" />
        <div className="h-6 w-full bg-muted rounded" />
        <div className="h-6 w-2/3 bg-muted rounded" />
      </div>
      <div className="space-y-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="space-y-2">
            <div className="h-4 w-full bg-muted rounded" />
            <div className="h-4 w-5/6 bg-muted rounded" />
            <div className="h-4 w-4/6 bg-muted rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
