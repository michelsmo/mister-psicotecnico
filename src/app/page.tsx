import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-20">
      <section className="pt-8 md:pt-4">
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center md:gap-16">
          <div className="relative max-w-3xl text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
              Nuevos
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
              Psicotécnicos pensados para
              <span className="block text-zinc-500">oposiciones de Policía.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-600">
              Practica tests reales por categorías, corrige al instante y estudia
              cada explicación con calma. Un entorno limpio, sin ruido, para que
              solo te centres en mejorar tu puntuación.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 md:flex-row md:items-center">
              <a
                href="/categorias"
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-8 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800"
              >
                Ver categorías de tests
              </a>
              <span className="text-xs text-zinc-500">
                Versión inicial · Todo el contenido es de práctica.
              </span>
            </div>
          </div>
          <div className="relative flex justify-center md:justify-start">
            <div className="relative aspect-[3/4] w-56 overflow-hidden rounded-[2.25rem] bg-zinc-100 shadow-[0_24px_60px_rgba(15,15,15,0.2)] md:w-64 lg:w-72 md:-translate-x-10 lg:-translate-x-16">
              <Image
                src="/images/hero-policia.png"
                alt="Preparación psicotécnicos para oposiciones de Policía"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 60vw, 320px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-10 md:grid-cols-[1.4fr,1fr] md:items-center">
        <div className="rounded-3xl bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 px-8 py-10 text-zinc-100 shadow-[0_24px_80px_rgba(15,15,15,0.4)]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
            Experiencia de estudio
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
            Preguntas con imágenes claras y explicaciones cuidadas.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-300">
            Cada test está pensado para que entiendas el porqué de cada
            respuesta. Primero resuelves, después estudias la explicación,
            igual que revisarías una plantilla oficial.
          </p>
          <div className="mt-8 grid gap-4 text-xs text-zinc-300 md:grid-cols-3">
            <div>
              <p className="font-medium text-zinc-100">Razonamiento lógico</p>
              <p className="mt-1 text-zinc-400">
                Series numéricas, matrices y patrones habituales.
              </p>
            </div>
            <div>
              <p className="font-medium text-zinc-100">Aptitud verbal</p>
              <p className="mt-1 text-zinc-400">
                Analogías, sinónimos, comprensión y vocabulario.
              </p>
            </div>
            <div>
              <p className="font-medium text-zinc-100">Memoria y atención</p>
              <p className="mt-1 text-zinc-400">
                Ejercicios visuales para entrenar concentración.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 rounded-3xl bg-white p-6 shadow-[0_18px_60px_rgba(15,15,15,0.15)]">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              Preview de un test
            </p>
            <div className="mt-3 aspect-[16/9] rounded-xl bg-gradient-to-br from-zinc-200 to-zinc-100" />
            <p className="mt-3 text-sm font-medium text-zinc-900">
              Serie numérica básica
            </p>
            <p className="mt-1 text-xs text-zinc-500">
              Elige el siguiente número en la secuencia. Preguntas visuales
              pensadas para oposiciones de Policía.
            </p>
          </div>
          <p className="text-xs text-zinc-500">
            Esta es una versión de práctica. Más adelante podrás añadir tus
            propios tests e imágenes reales sin cambiar la estructura.
          </p>
        </div>
      </section>
    </div>
  );
}
