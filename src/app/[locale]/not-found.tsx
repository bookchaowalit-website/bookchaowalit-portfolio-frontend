import { Link } from '@/i18n/routing';
import { Pencil } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[60vh]">
      <div className="max-w-md w-full relative">
        {/* Notebook page */}
        <div
          className="bg-muted border border-border p-8 text-center space-y-6"
          style={{
            clipPath: "polygon(0% 0%, 95% 0%, 100% 5%, 100% 100%, 5% 100%, 0% 95%)"
          }}
        >
          {/* Notebook margin line */}
          <div className="absolute left-12 top-0 bottom-0 w-px bg-border/60" />

          {/* Three-ring holes */}
          <div className="absolute left-4 top-[20%] w-3 h-3 rounded-full border border-border/60 bg-background" />
          <div className="absolute left-4 top-[50%] w-3 h-3 rounded-full border border-border/60 bg-background" />
          <div className="absolute left-4 top-[80%] w-3 h-3 rounded-full border border-border/60 bg-background" />

          <div className="relative pl-8">
            <p className="text-7xl font-[family-name:var(--font-doodle)] text-muted-foreground mb-2">
              404
            </p>
            <h1 className="text-2xl font-[family-name:var(--font-comic)] font-bold text-foreground mb-3">
              page not found <Pencil className="inline w-5 h-5" />
            </h1>
            <p className="text-sm text-muted-foreground font-[family-name:var(--font-doodle)] mb-6">
              this page seems to have been torn out...
            </p>
            <Link
              href="/"
              className="inline-block px-5 py-2 border border-border bg-background hover:bg-muted font-[family-name:var(--font-doodle)] text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              go home →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}