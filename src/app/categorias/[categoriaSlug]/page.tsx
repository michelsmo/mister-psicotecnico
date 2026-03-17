import Link from "next/link";
import { notFound } from "next/navigation";
import {
  categorias,
  getCategoriaBySlug,
  getTestsByCategoriaId,
} from "../../../data/tests";

type CategoriaPageProps = {
  params: Promise<{
    categoriaSlug: string;
  }>;
};

export default async function CategoriaDetallePage({
  params,
}: CategoriaPageProps) {
  const { categoriaSlug } = await params;
  const categoria = getCategoriaBySlug(categoriaSlug);

  if (!categoria) {
    notFound();
  }

  const tests = getTestsByCategoriaId(categoria.id);

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
          Categoría
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
          {categoria.nombre}
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-zinc-600">
          {categoria.descripcion}
        </p>
        <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500">
          <span>
            {tests.length} {tests.length === 1 ? "test disponible" : "tests disponibles"}
          </span>
          {categoria.nivel && (
            <span className="rounded-full border border-zinc-200 px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em]">
              Nivel {categoria.nivel}
            </span>
          )}
          <Link
            href="/categorias"
            className="text-[0.7rem] font-medium text-zinc-800 underline-offset-4 hover:underline"
          >
            Volver a todas las categorías
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-sm font-semibold tracking-tight text-zinc-900">
          Tests de esta categoría
        </h2>
        <div className="space-y-3">
          {tests.map((test) => (
            <Link
              key={test.id}
              href={`/tests/${test.slug}`}
              className="group flex items-center justify-between rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
            >
              <div className="space-y-1">
                <p className="font-medium text-zinc-900">{test.titulo}</p>
                <p className="text-xs text-zinc-500">{test.descripcion}</p>
              </div>
              <div className="flex flex-col items-end gap-1 text-[0.7rem] text-zinc-500">
                <span className="capitalize">{test.dificultad}</span>
                {test.tiempoRecomendadoMinutos && (
                  <span>
                    {test.tiempoRecomendadoMinutos} min aprox.
                  </span>
                )}
                <span className="flex items-center gap-1 text-zinc-800">
                  Empezar test
                  <span className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return categorias.map((categoria) => ({
    categoriaSlug: categoria.slug,
  }));
}

