import Link from "next/link";
import { categorias, tests } from "../../data/tests";

export default function CategoriasPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
          Todas las categorías
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
          Elige en qué tipo de psicotécnicos quieres entrenar hoy.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-zinc-600">
          Cada categoría agrupa varios tests específicos. Puedes repetirlos las
          veces que quieras para afianzar los patrones más frecuentes en
          oposiciones de Policía.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {categorias.map((categoria) => {
          const testsEnCategoria = tests.filter(
            (test) => test.categoriaId === categoria.id,
          );
          return (
            <Link
              key={categoria.id}
              href={`/categorias/${categoria.slug}`}
              className="group flex h-full flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-5 shadow-[0_18px_40px_rgba(15,15,15,0.06)] transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_24px_60px_rgba(15,15,15,0.12)]"
            >
              <div className="space-y-3">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-zinc-400">
                  {categoria.nivel ? `Nivel ${categoria.nivel}` : "Psicotécnicos"}
                </p>
                <h2 className="text-lg font-semibold tracking-tight text-zinc-900">
                  {categoria.nombre}
                </h2>
                <p className="text-xs leading-relaxed text-zinc-600">
                  {categoria.descripcion}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-zinc-500">
                <span>
                  {testsEnCategoria.length}{" "}
                  {testsEnCategoria.length === 1 ? "test" : "tests"}
                </span>
                <span className="flex items-center gap-1 text-[0.7rem] font-medium text-zinc-800">
                  Ver tests
                  <span className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}

