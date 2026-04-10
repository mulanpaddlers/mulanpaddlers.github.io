import Link from 'next/link';

// Language chooser for the root path /.
// No middleware or runtime locale detection — static links only.
// Generates out/index.html at build time.
export default function RootPage() {
  return (
    <main className="min-h-screen bg-navy flex items-center justify-center">
      <div className="text-center">
        <p className="text-white/40 text-xs uppercase tracking-[0.3em] mb-8">
          MulanPaddlers
        </p>
        <div className="flex gap-8 justify-center">
          <Link
            href="/en"
            className="text-white/70 hover:text-pink-hot text-sm uppercase tracking-widest transition-colors"
          >
            English
          </Link>
          <Link
            href="/zh"
            className="text-white/70 hover:text-pink-hot text-sm uppercase tracking-widest transition-colors"
          >
            中文
          </Link>
        </div>
      </div>
    </main>
  );
}
