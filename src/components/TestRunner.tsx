 "use client";

import Image from "next/image";
import { useState } from "react";
import type { Pregunta, Test } from "../data/tests";

type TestRunnerProps = {
  test: Test;
};

type Respuestas = Record<string, number | null>;

function getEstadoPregunta(
  pregunta: Pregunta,
  respuestaSeleccionada: number | null,
  corregido: boolean,
) {
  if (!corregido || respuestaSeleccionada === null) return "sin-responder";
  return respuestaSeleccionada === pregunta.respuestaCorrectaIndex
    ? "correcta"
    : "incorrecta";
}

export function TestRunner({ test }: TestRunnerProps) {
  const [respuestas, setRespuestas] = useState<Respuestas>(() => {
    const inicial: Respuestas = {};
    for (const pregunta of test.preguntas) {
      inicial[pregunta.id] = null;
    }
    return inicial;
  });
  const [corregido, setCorregido] = useState(false);

  const numPreguntas = test.preguntas.length;
  const numAcertadas = corregido
    ? test.preguntas.reduce((aciertos, pregunta) => {
        const seleccionada = respuestas[pregunta.id];
        if (seleccionada === pregunta.respuestaCorrectaIndex) {
          return aciertos + 1;
        }
        return aciertos;
      }, 0)
    : 0;

  const porcentaje =
    corregido && numPreguntas > 0
      ? Math.round((numAcertadas / numPreguntas) * 100)
      : 0;

  function manejarCambioRespuesta(preguntaId: string, opcionIndex: number) {
    setRespuestas((prev) => ({
      ...prev,
      [preguntaId]: opcionIndex,
    }));
  }

  function manejarCorregir() {
    setCorregido(true);
  }

  function manejarReiniciar() {
    const inicial: Respuestas = {};
    for (const pregunta of test.preguntas) {
      inicial[pregunta.id] = null;
    }
    setRespuestas(inicial);
    setCorregido(false);
  }

  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
          Test
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
          {test.titulo}
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-zinc-600">
          {test.descripcion}
        </p>
        <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500">
          <span className="rounded-full border border-zinc-200 px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em]">
            Dificultad {test.dificultad}
          </span>
          <span>
            {numPreguntas} {numPreguntas === 1 ? "pregunta" : "preguntas"}
          </span>
          {test.tiempoRecomendadoMinutos && (
            <span>{test.tiempoRecomendadoMinutos} min recomendados</span>
          )}
        </div>
      </header>

      <section className="space-y-6">
        {test.preguntas.map((pregunta, indice) => {
          const respuestaSeleccionada = respuestas[pregunta.id] ?? null;
          const estado = getEstadoPregunta(
            pregunta,
            respuestaSeleccionada,
            corregido,
          );

          return (
            <article
              key={pregunta.id}
              className="space-y-4 rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm"
            >
              <header className="flex items-baseline justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-400">
                    Pregunta {indice + 1}
                  </p>
                  <h2 className="text-sm font-medium text-zinc-900">
                    {pregunta.enunciado}
                  </h2>
                </div>
                {corregido && (
                  <span
                    className={`rounded-full px-3 py-1 text-[0.7rem] font-medium ${
                      estado === "correcta"
                        ? "bg-emerald-50 text-emerald-700"
                        : estado === "incorrecta"
                          ? "bg-rose-50 text-rose-700"
                          : "bg-zinc-50 text-zinc-500"
                    }`}
                  >
                    {estado === "correcta"
                      ? "Correcta"
                      : estado === "incorrecta"
                        ? "Incorrecta"
                        : "Sin responder"}
                  </span>
                )}
              </header>

              {pregunta.imagenPreguntaUrl && (
                <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100">
                  <Image
                    src={pregunta.imagenPreguntaUrl}
                    alt="Enunciado visual de la pregunta psicotécnica"
                    width={1200}
                    height={700}
                    className="h-auto w-full object-cover"
                  />
                </div>
              )}

              <fieldset className="space-y-2">
                <legend className="sr-only">Opciones de respuesta</legend>
                {pregunta.opciones.map((opcion, opcionIndex) => {
                  const esSeleccionada = respuestaSeleccionada === opcionIndex;
                  const esCorrecta =
                    opcionIndex === pregunta.respuestaCorrectaIndex;

                  const mostrarEstado =
                    corregido && (esCorrecta || esSeleccionada);

                  return (
                    <button
                      key={opcion}
                      type="button"
                      onClick={() =>
                        manejarCambioRespuesta(pregunta.id, opcionIndex)
                      }
                      className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm transition
                        ${
                          esSeleccionada
                            ? "border-zinc-900 bg-zinc-900 text-white"
                            : "border-zinc-200 bg-white text-zinc-900 hover:border-zinc-300 hover:bg-zinc-50"
                        }
                        ${
                          mostrarEstado && esCorrecta
                            ? "border-emerald-500 bg-emerald-50 text-emerald-900"
                            : ""
                        }
                        ${
                          mostrarEstado && !esCorrecta && esSeleccionada
                            ? "border-rose-500 bg-rose-50 text-rose-900"
                            : ""
                        }
                      `}
                    >
                      <span>{opcion}</span>
                      {mostrarEstado && esCorrecta && (
                        <span className="text-xs font-medium">Respuesta correcta</span>
                      )}
                      {mostrarEstado && !esCorrecta && esSeleccionada && (
                        <span className="text-xs font-medium">Tu respuesta</span>
                      )}
                    </button>
                  );
                })}
              </fieldset>

              {corregido && pregunta.explicacion && (
                <div className="mt-3 space-y-3 rounded-2xl border border-zinc-100 bg-zinc-50 p-4 text-xs text-zinc-600">
                  <p className="font-medium text-zinc-800">
                    Explicación de la respuesta
                  </p>
                  <p>{pregunta.explicacion}</p>
                  {pregunta.imagenExplicacionUrl && (
                    <div className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100">
                      <Image
                        src={pregunta.imagenExplicacionUrl}
                        alt="Explicación visual de la solución"
                        width={1200}
                        height={700}
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </section>

      <section className="flex flex-col gap-4 rounded-3xl border border-zinc-200 bg-white p-5 text-sm shadow-sm md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
            Resultado del test
          </p>
          {corregido ? (
            <div className="flex items-baseline gap-3">
              <p className="text-2xl font-semibold text-zinc-900">
                {numAcertadas}/{numPreguntas}
              </p>
              <p className="text-xs text-zinc-500">
                {porcentaje}% de aciertos
              </p>
            </div>
          ) : (
            <p className="text-xs text-zinc-500">
              Responde a todas las preguntas que puedas y corrige para ver tu
              porcentaje de aciertos.
            </p>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={manejarCorregir}
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-2.5 text-xs font-medium text-white shadow-sm transition hover:bg-zinc-800"
          >
            Corregir test
          </button>
          <button
            type="button"
            onClick={manejarReiniciar}
            className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-6 py-2.5 text-xs font-medium text-zinc-700 transition hover:border-zinc-400 hover:bg-zinc-50"
          >
            Reiniciar
          </button>
        </div>
      </section>
    </div>
  );
}

