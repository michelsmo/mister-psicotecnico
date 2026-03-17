import Link from "next/link";
import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="border-b border-zinc-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:px-8">
          <Link href="/" className="flex items-baseline gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Psicotécnicos
            </span>
            <span className="text-sm font-medium text-zinc-800">
              Policía
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm text-zinc-600">
            <Link
              href="/"
              className="transition-colors hover:text-zinc-900"
            >
              Inicio
            </Link>
            <Link
              href="/categorias"
              className="transition-colors hover:text-zinc-900"
            >
              Categorías
            </Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-6 pb-16 pt-12 md:px-8 md:pt-16">
        {children}
      </main>
      <footer className="border-t border-zinc-200 bg-white/80">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 text-xs text-zinc-500 md:px-8">
          <p>Preparación de tests psicotécnicos para Policía.</p>
          <p className="hidden md:block">
            Versión inicial para practicar y estudiar.
          </p>
        </div>
      </footer>
    </div>
  );
}

