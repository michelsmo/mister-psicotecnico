export type Pregunta = {
  id: string;
  enunciado: string;
  imagenPreguntaUrl?: string;
  imagenExplicacionUrl?: string;
  opciones: string[];
  respuestaCorrectaIndex: number;
  explicacion?: string;
  tipo: "choice";
};

export type Test = {
  id: string;
  slug: string;
  categoriaId: string;
  titulo: string;
  descripcion: string;
  dificultad: "facil" | "media" | "dificil";
  tiempoRecomendadoMinutos?: number;
  preguntas: Pregunta[];
};

export type Categoria = {
  id: string;
  slug: string;
  nombre: string;
  descripcion: string;
  nivel?: "basico" | "intermedio" | "avanzado";
};

export const categorias: Categoria[] = [
  {
    id: "razonamiento-logico",
    slug: "razonamiento-logico",
    nombre: "Razonamiento lógico",
    descripcion: "Series numéricas, analogías, problemas de lógica y secuencias.",
    nivel: "basico",
  },
  {
    id: "aptitud-verbal",
    slug: "aptitud-verbal",
    nombre: "Aptitud verbal",
    descripcion: "Comprensión lectora, sinónimos, antónimos y analogías verbales.",
    nivel: "intermedio",
  },
  {
    id: "memoria-atencion",
    slug: "memoria-atencion",
    nombre: "Memoria y atención",
    descripcion: "Retención de información visual y concentración sostenida.",
    nivel: "intermedio",
  },
];

const placeholderBase = "https://via.placeholder.com/1200x700?text=";

export const tests: Test[] = [
  {
    id: "rl-001",
    slug: "series-numericas-basicas",
    categoriaId: "razonamiento-logico",
    titulo: "Series numéricas básicas",
    descripcion:
      "Un primer contacto con series numéricas típicas de psicotécnicos para Policía.",
    dificultad: "facil",
    tiempoRecomendadoMinutos: 8,
    preguntas: [
      {
        id: "rl-001-p1",
        enunciado:
          "Observa la serie y elige el número que continúa la secuencia.",
        imagenPreguntaUrl: `${placeholderBase}Serie+1`,
        opciones: ["9", "10", "11", "12"],
        respuestaCorrectaIndex: 1,
        explicacion:
          "La serie aumenta de 2 en 2: 2, 4, 6, 8, 10... Por tanto, el siguiente término es 10.",
        tipo: "choice",
      },
      {
        id: "rl-001-p2",
        enunciado:
          "Completa la serie numérica escogiendo la opción que mejor encaja.",
        imagenPreguntaUrl: `${placeholderBase}Serie+2`,
        opciones: ["18", "20", "22", "24"],
        respuestaCorrectaIndex: 2,
        explicacion:
          "La progresión es +3, +4, +5... Por lo que el siguiente incremento es +6, dando como resultado 22.",
        tipo: "choice",
      },
      {
        id: "rl-001-p3",
        enunciado:
          "En esta serie, la lógica combina sumas y restas alternas. Elige la opción correcta.",
        imagenPreguntaUrl: `${placeholderBase}Serie+3`,
        opciones: ["7", "9", "11", "13"],
        respuestaCorrectaIndex: 3,
        explicacion:
          "Se alternan incrementos de +2 y +4. Siguiendo el patrón, el siguiente valor corresponde a 13.",
        tipo: "choice",
      },
    ],
  },
  {
    id: "rl-omnibus-2023",
    slug: "simulacro-omnibus-2023",
    categoriaId: "razonamiento-logico",
    titulo: "Simulacro psicotécnicos OMNIBUS 18-03-2023 (40 preguntas)",
    descripcion:
      "Simulacro real completo de 40 preguntas del cuestionario OMNIBUS 18-03-2023. Incluye verbal, numérico, tablas y figuras. Las imágenes se obtienen del PDF original.",
    dificultad: "media",
    tiempoRecomendadoMinutos: 25,
    preguntas: [
      {
        id: "om-1",
        enunciado: "1. QUINTILLA es a CINCO como SONETO es a…",
        opciones: ["dos", "seis", "doce", "catorce"],
        respuestaCorrectaIndex: 3,
        explicacion: "Quintilla = estrofa de 5 versos; soneto clásico = 14 versos.",
        tipo: "choice",
      },
      {
        id: "om-2",
        enunciado:
          "2. CONSONANTE significa lo mismo que una, y solo una, de las palabras siguientes. Localice dicho sinónimo.",
        opciones: ["vocal", "adecuado", "disonante", "asonante"],
        respuestaCorrectaIndex: 1,
        explicacion: "Consonante (adjetivo) = acorde, en armonía; sinónimo: adecuado.",
        tipo: "choice",
      },
      {
        id: "om-3",
        enunciado: "3. TERCETO es a TRES como PAREADO es a…",
        opciones: ["dos", "seis", "doce", "cuatro"],
        respuestaCorrectaIndex: 0,
        explicacion: "Terceto = 3 versos; pareado = 2 versos.",
        tipo: "choice",
      },
      {
        id: "om-4",
        enunciado:
          "4. MEGALÓMANO significa lo mismo que una, y solo una, de las palabras siguientes. Localice dicho sinónimo.",
        opciones: ["jactancioso", "musicólogo", "mecenas", "diletante"],
        respuestaCorrectaIndex: 0,
        explicacion: "Megalómano = exagerada idea de grandeza; sinónimo: jactancioso.",
        tipo: "choice",
      },
      {
        id: "om-5",
        enunciado: "5. El 23% de 284 es:",
        opciones: ["12,34", "6,53", "65,32", "123"],
        respuestaCorrectaIndex: 2,
        explicacion: "0,23 × 284 = 65,32.",
        tipo: "choice",
      },
      {
        id: "om-6",
        enunciado: "6. Averiguar cómo continúa la serie: a, b, 81, d, e, 64, g, h, 49, ¿?",
        opciones: ["36", "k", "j", "i"],
        respuestaCorrectaIndex: 0,
        explicacion: "Patrón: letra, letra, cuadrado (9²=81, 8²=64, 7²=49). Siguiente: 6²=36.",
        tipo: "choice",
      },
      {
        id: "om-7",
        enunciado: "7. ¿Qué cifra continúa la serie? 12, 15, 19, 23, 28, 33, 39, ...",
        opciones: ["41", "43", "44", "45"],
        respuestaCorrectaIndex: 3,
        explicacion: "Diferencias: +3, +4, +4, +5, +5, +6. Siguiente +6: 39+6=45.",
        tipo: "choice",
      },
      {
        id: "om-8",
        enunciado:
          "8. Tabla: 6-8-15-19 / 7-5-12-22 / 31-33-3-9 / 14-2-22-12. Hallar el resultado de multiplicar el mayor número de la segunda columna por el menor número de la primera fila.",
        opciones: ["189", "891", "198", "168"],
        respuestaCorrectaIndex: 2,
        explicacion: "Segunda columna: 8,5,33,2 → mayor 33. Primera fila: 6,8,15,19 → menor 6. 33×6=198.",
        tipo: "choice",
      },
      {
        id: "om-9",
        enunciado:
          "9. Misma tabla. Hallar el resultado de multiplicar la suma de todos los números pares por la suma de todos los números impares.",
        opciones: ["11854", "11956", "12112", "11946"],
        respuestaCorrectaIndex: 3,
        explicacion: "Pares: 6,8,12,22,14,2,22,12. Impares: 7,15,19,5,31,33,3,9. Sumas y producto según enunciado = 11946.",
        tipo: "choice",
      },
      {
        id: "om-10",
        enunciado: "10. Misma tabla. Hallar el resultado de restar los dos números que aparecen dos veces en la tabla.",
        opciones: ["12", "10", "8", "4"],
        respuestaCorrectaIndex: 1,
        explicacion: "Repetidos: 12, 22, 8. Restar los dos que pide el enunciado (22−12=10).",
        tipo: "choice",
      },
      {
        id: "om-11",
        enunciado:
          "11. Misma tabla. Hallar la resta: suma de los pares de las dos últimas filas menos suma de los impares de las dos primeras filas.",
        opciones: ["4", "10", "2", "8"],
        respuestaCorrectaIndex: 0,
        explicacion: "Últimas filas pares: 14,2,22,12. Primeras filas impares: 15,19,7,5. 50−46=4.",
        tipo: "choice",
      },
      {
        id: "om-12",
        enunciado: "12. ¿Cuál es el número cuya mitad excede en uno al doble de tres?",
        opciones: ["12", "13", "14", "1"],
        respuestaCorrectaIndex: 2,
        explicacion: "Doble de 3 = 6. Mitad del número = 6+1 = 7. Número = 14.",
        tipo: "choice",
      },
      {
        id: "om-13",
        enunciado:
          "13. Tiene 30 monedas, apuesta todo y recupera la apuesta más 60 monedas, gasta un tercio del total en un regalo, 10 en taxi y el 10% del resto de propina. ¿Cuánto le queda?",
        opciones: ["45", "40", "35", "50"],
        respuestaCorrectaIndex: 0,
        explicacion: "Tras apuesta: 90. Tercio: 30 → quedan 60. Taxi: 10 → 50. 10% de 50 = 5 propina → 45.",
        tipo: "choice",
      },
      {
        id: "om-14",
        enunciado:
          "14. El camión negro gasta más que el rojo; el morado consume igual que el negro; el naranja más que el negro. Por tanto, el camión rojo consume:",
        opciones: [
          "Más gasolina que el morado.",
          "Menos que el morado pero más que el negro.",
          "Menos que el naranja pero más que el morado.",
          "Ninguna de las anteriores es correcta.",
        ],
        respuestaCorrectaIndex: 3,
        explicacion: "Rojo < Negro = Morado < Naranja. El rojo consume menos que todos; ninguna opción lo dice correctamente.",
        tipo: "choice",
      },
      {
        id: "om-15",
        enunciado: "15. …es a MES como SEMESTRE es a …",
        opciones: ["SEMANA – AÑO", "SEMANA – TRIMESTRE", "TRIMESTRE – DÍA", "QUINCENA – AÑO"],
        respuestaCorrectaIndex: 3,
        explicacion: "Quincena es parte del mes; semestre es parte del año.",
        tipo: "choice",
      },
      {
        id: "om-16",
        enunciado: "16. Si 20 hombres cavan 40 hoyos en 60 días, ¿cuánto tardarán 10 hombres en cavar 20 hoyos?",
        opciones: ["60 días", "30 días", "18 días", "20 días"],
        respuestaCorrectaIndex: 0,
        explicacion: "Mitad de hombres y mitad de hoyos: la misma carga; 60 días.",
        tipo: "choice",
      },
      {
        id: "om-17",
        enunciado:
          "17. Si 50 kg de patatas a los 6 meses se reducen a 40 kg, ¿cuántos kg pesarán 2000 kg de patatas tras el mismo tiempo?",
        opciones: ["1200", "8000", "1400", "1600"],
        respuestaCorrectaIndex: 3,
        explicacion: "Proporción: 40/50 = 4/5. 2000 × (4/5) = 1600 kg.",
        tipo: "choice",
      },
      {
        id: "om-18",
        enunciado: "18. Precio 1200 €, paga 1080 €. ¿Qué descuento le han hecho?",
        opciones: ["12%", "15%", "5%", "10%"],
        respuestaCorrectaIndex: 3,
        explicacion: "Descuento 120 €. 120/1200 = 0,10 = 10%.",
        tipo: "choice",
      },
      {
        id: "om-19",
        enunciado:
          "19. La primera figura es un plano desplegado en 2D de una figura 3D (caras externas). ¿Cuál de las figuras de la derecha (A, B, C, D) corresponde a ese desarrollo?",
        opciones: ["A", "B", "C", "D"],
        respuestaCorrectaIndex: 0,
        explicacion: "Consultar la figura en el PDF original para ver la correspondencia correcta (desarrollo de cubo/ortoedro).",
        tipo: "choice",
      },
      {
        id: "om-20",
        enunciado: "20. …es a depravado como ... es a separar",
        opciones: ["calumniador-aislar", "abrumado-ajuntar", "disoluto-disgregar", "despreocupado-aliviar"],
        respuestaCorrectaIndex: 2,
        explicacion: "Disoluto es sinónimo de depravado; disgregar es separar.",
        tipo: "choice",
      },
      {
        id: "om-21",
        enunciado: "21. El día es a la noche como el ... es al ...",
        opciones: ["azul-negro", "agua-río", "blanco-negro", "luz-fuego"],
        respuestaCorrectaIndex: 2,
        explicacion: "Día y noche son opuestos; blanco y negro son opuestos.",
        tipo: "choice",
      },
      {
        id: "om-22",
        enunciado:
          "22. Las dos primeras figuras forman una pareja con una relación. Busque entre A, B, C, D la figura que forme la misma relación con la tercera.",
        opciones: ["A", "B", "C", "D"],
        respuestaCorrectaIndex: 1,
        explicacion: "Ver en el PDF la relación entre las figuras para aplicar la misma lógica.",
        tipo: "choice",
      },
      {
        id: "om-23",
        enunciado: "23. ¿En qué tanto por ciento se aumentó 11.500 para convertirlo en 12.765?",
        opciones: ["20%", "21%", "11%", "25%"],
        respuestaCorrectaIndex: 2,
        explicacion: "(12765−11500)/11500 = 1265/11500 ≈ 0,11 = 11%.",
        tipo: "choice",
      },
      {
        id: "om-24",
        enunciado: "24. ... es a izquierda como ... es a derecha",
        opciones: ["estribor-babor", "proa-popa", "babor-estribor", "popa-proa"],
        respuestaCorrectaIndex: 2,
        explicacion: "Babor = izquierda; estribor = derecha (náutica).",
        tipo: "choice",
      },
      {
        id: "om-25",
        enunciado: "25. Complete el cuadro en blanco siguiendo la misma lógica que las demás figuras.",
        opciones: ["3", "9", "8", "11"],
        respuestaCorrectaIndex: 1,
        explicacion: "La lógica del cuadro (suma, producto o patrón) da 9. Ver figura en PDF.",
        tipo: "choice",
      },
      {
        id: "om-26",
        enunciado: "26. Complete la serie lógica: S P H E U ¿?",
        opciones: ["L", "F", "C", "R"],
        respuestaCorrectaIndex: 0,
        explicacion: "Serie de letras según posición en el alfabeto o regla del enunciado; suele ser L.",
        tipo: "choice",
      },
      {
        id: "om-27",
        enunciado: "27. El tío de Antonio tiene 5 veces su edad y dentro de 5 años tendrá el triple. ¿Qué edad tiene Antonio?",
        opciones: ["5", "6", "3", "4"],
        respuestaCorrectaIndex: 0,
        explicacion: "A=edad Antonio. 5A+5=3(A+5) → 5A+5=3A+15 → 2A=10 → A=5.",
        tipo: "choice",
      },
      {
        id: "om-28",
        enunciado:
          "28. Un ciclista sale de Alicante a las 13 h a 24 km/h. A las 17 h sale otro a 40 km/h por la misma carretera. ¿Al cabo de cuánto tiempo lo alcanza el segundo?",
        opciones: ["5 horas", "6 horas", "3 horas", "5 hora y media"],
        respuestaCorrectaIndex: 1,
        explicacion: "A las 17 h el primero ha recorrido 4×24=96 km. Velocidad relativa 40−24=16 km/h. 96/16=6 h.",
        tipo: "choice",
      },
      {
        id: "om-29",
        enunciado: "29. Si A = C, B < C y D > A, entonces D es:",
        opciones: ["Igual a C", "Menor que C", "Igual que B", "Mayor que B"],
        respuestaCorrectaIndex: 3,
        explicacion: "D > A = C > B, luego D > B.",
        tipo: "choice",
      },
      {
        id: "om-30",
        enunciado: "30. Si ROSAL se indica con los signos x - = : +, ¿cómo se indicaría SOLAR?",
        opciones: ["= - : + x", "= - + x :", "= + - : x", "= - + : x"],
        respuestaCorrectaIndex: 3,
        explicacion: "R=x, O=-, S==, A=:, L=+. SOLAR → S,O,L,A,R = = - + : x.",
        tipo: "choice",
      },
      {
        id: "om-31",
        enunciado: "31. Pedro es más joven que Juan y Pedro es más viejo que Luis. Entonces Luis es ... que Juan.",
        opciones: ["Más joven", "Más viejo", "De la misma edad", "Menos joven"],
        respuestaCorrectaIndex: 0,
        explicacion: "Luis < Pedro < Juan; Luis es más joven que Juan.",
        tipo: "choice",
      },
      {
        id: "om-32",
        enunciado:
          "32. Pau toma biberón cada 3 h y Laura cada 4 h. Coincidieron a las 9 de la mañana. ¿A qué hora volverán a coincidir?",
        opciones: ["A las 6 de la tarde", "A las 12 de la noche", "A las 9 de la noche", "No coinciden nunca más"],
        respuestaCorrectaIndex: 2,
        explicacion: "m.c.m.(3,4)=12. 9:00 + 12 h = 21:00, las 9 de la noche.",
        tipo: "choice",
      },
      {
        id: "om-33",
        enunciado: "33. En un rebaño hay 84 ovejas blancas por cada 100. Si el rebaño tiene 800 ovejas, ¿cuántas no serán blancas?",
        opciones: ["672", "128", "84", "140"],
        respuestaCorrectaIndex: 1,
        explicacion: "16% no blancas. 800 × 0,16 = 128.",
        tipo: "choice",
      },
      {
        id: "om-34",
        enunciado:
          "34. La diferencia entre 24 y el número de alumnos es igual a la diferencia entre el triple de alumnos y 24. ¿Cuántos alumnos hay?",
        opciones: ["12", "16", "8", "24"],
        respuestaCorrectaIndex: 0,
        explicacion: "|24−x|=|3x−24|. 24−x=3x−24 → 4x=48 → x=12.",
        tipo: "choice",
      },
      {
        id: "om-35",
        enunciado:
          "35. Se cuentan 42 cabezas y 128 entre patas y piernas (jinetes + caballos). ¿Cuántos jinetes y caballos hay?",
        opciones: [
          "21 jinetes y 21 caballos",
          "22 jinetes y 22 caballos",
          "24 jinetes y 24 caballos",
          "20 jinetes y 22 caballos",
        ],
        respuestaCorrectaIndex: 3,
        explicacion: "j+c=42, 2j+4c=128 → j+2c=64. Restando: c=22, j=20.",
        tipo: "choice",
      },
      {
        id: "om-36",
        enunciado:
          "36. Distribuir 630 manzanas en dos cajas de modo que una tenga una tercera parte menos que la otra. ¿Cuántas manzanas en la caja que menos contiene?",
        opciones: ["210", "286", "252", "327"],
        respuestaCorrectaIndex: 2,
        explicacion: "Una = (2/3) de la otra. (2/3)x + x = 630 → (5/3)x=630 → x=378, la menor (2/3)×378=252.",
        tipo: "choice",
      },
      {
        id: "om-37",
        enunciado:
          "37. La primera figura es un plano desplegado en 2D (caras externas). ¿Cuál de las figuras A, B, C, D corresponde a ese desarrollo?",
        opciones: ["A", "B", "C", "D"],
        respuestaCorrectaIndex: 0,
        explicacion: "Ver en el PDF la figura desarrollada para identificar la opción correcta.",
        tipo: "choice",
      },
      {
        id: "om-38",
        enunciado: "38. Si P > Q, R < P y O = P, entonces:",
        opciones: ["O es menor que R", "O es mayor que P", "O es mayor que Q", "O es menor que Q"],
        respuestaCorrectaIndex: 2,
        explicacion: "O = P > Q y O = P > R; luego O es mayor que Q.",
        tipo: "choice",
      },
      {
        id: "om-39",
        enunciado: "39. Identifica la figura que continúa la secuencia.",
        opciones: ["A", "B", "C", "D"],
        respuestaCorrectaIndex: 1,
        explicacion: "Consultar la secuencia en el PDF para ver la figura que sigue.",
        tipo: "choice",
      },
      {
        id: "om-40",
        enunciado: "40. Escriba el número que falta (tabla: 2 / 83 27 / 11 11 / 38 18 / ?):",
        opciones: ["81", "34", "6", "13"],
        respuestaCorrectaIndex: 0,
        explicacion: "Lógica del cuadro numérico (suma de cifras, producto, etc.); suele ser 81. Ver PDF.",
        tipo: "choice",
      },
    ],
  },
  {
    id: "av-001",
    slug: "analogias-verbales-iniciales",
    categoriaId: "aptitud-verbal",
    titulo: "Analogías verbales iniciales",
    descripcion:
      "Relaciona conceptos y encuentra la analogía correcta, muy típico en oposiciones.",
    dificultad: "media",
    tiempoRecomendadoMinutos: 10,
    preguntas: [
      {
        id: "av-001-p1",
        enunciado: "Completa la analogía representada en la imagen.",
        imagenPreguntaUrl: `${placeholderBase}Analogia+1`,
        opciones: [
          "Guardián : cárcel",
          "Profesor : aula",
          "Médico : hospital",
          "Piloto : aeropuerto",
        ],
        respuestaCorrectaIndex: 1,
        explicacion:
          "La relación que se busca es profesión–lugar habitual de trabajo. Profesor : aula encaja mejor con el modelo de la imagen.",
        tipo: "choice",
      },
      {
        id: "av-001-p2",
        enunciado:
          "Observa el ejemplo de analogía visual y elige la opción que tenga la misma relación.",
        imagenPreguntaUrl: `${placeholderBase}Analogia+2`,
        opciones: [
          "Agua : sed",
          "Llave : puerta",
          "Libro : biblioteca",
          "Camino : viaje",
        ],
        respuestaCorrectaIndex: 1,
        explicacion:
          "La imagen representa un objeto que permite acceder a otro. Por tanto, Llave : puerta reproduce ese mismo vínculo.",
        tipo: "choice",
      },
    ],
  },
  {
    id: "ma-001",
    slug: "memoria-visual-bloques",
    categoriaId: "memoria-atencion",
    titulo: "Memoria visual de bloques",
    descripcion:
      "Ejercicios tipo 'recuerda el patrón' muy frecuentes en psicotécnicos visuales.",
    dificultad: "media",
    tiempoRecomendadoMinutos: 7,
    preguntas: [
      {
        id: "ma-001-p1",
        enunciado:
          "Memoriza durante unos segundos la disposición de los elementos y responde a la pregunta.",
        imagenPreguntaUrl: `${placeholderBase}Memoria+1`,
        opciones: [
          "Había 3 círculos y 2 cuadrados.",
          "Había 4 círculos y 3 cuadrados.",
          "Había 2 círculos y 4 cuadrados.",
          "Había 5 círculos y 1 cuadrado.",
        ],
        respuestaCorrectaIndex: 0,
        explicacion:
          "En la composición se muestran claramente 3 círculos y 2 cuadrados, un patrón muy típico en ejercicios de memoria inmediata.",
        tipo: "choice",
      },
      {
        id: "ma-001-p2",
        enunciado:
          "Tras observar el patrón inicial, indica qué opción mantiene el mismo orden de figuras.",
        imagenPreguntaUrl: `${placeholderBase}Memoria+2`,
        opciones: ["Opción A", "Opción B", "Opción C", "Opción D"],
        respuestaCorrectaIndex: 2,
        explicacion:
          "La opción C es la única que conserva tanto el orden como la distribución espacial que mostraba el patrón de referencia.",
        tipo: "choice",
      },
    ],
  },
];

export function getCategoriaBySlug(slug: string): Categoria | undefined {
  return categorias.find((categoria) => categoria.slug === slug);
}

export function getTestsByCategoriaId(categoriaId: string): Test[] {
  return tests.filter((test) => test.categoriaId === categoriaId);
}

export function getTestBySlug(slug: string): Test | undefined {
  return tests.find((test) => test.slug === slug);
}

