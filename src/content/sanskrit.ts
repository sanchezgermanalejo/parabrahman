export const sanskritCurriculum = [
  {
    order: 1,
    title: "Sonido, respiración e IAST",
    objective: "Distinguir vocales breves y largas, aspiración, retroflexión, anusvāra y visarga.",
    practice: "Escucha guiada futura, lectura lenta y transliteración bidireccional.",
  },
  {
    order: 2,
    title: "Devanāgarī desde cero",
    objective: "Reconocer letras, vocal inherente, signos vocálicos, ligaduras frecuentes y virāma.",
    practice: "Copiar, leer sílabas y pasar palabras vedánticas entre devanāgarī e IAST.",
  },
  {
    order: 3,
    title: "Palabras, raíces y diccionario",
    objective: "Separar forma flexionada, tema nominal y raíz verbal para buscar con criterio.",
    practice: "Vocabulario de ātman, Brahman, jñāna, mokṣa, guru y śiṣya.",
  },
  {
    order: 4,
    title: "Nombres y ocho casos",
    objective: "Comprender género, número y función de los ocho casos sin depender del orden español.",
    practice: "Declinaciones básicas en -a, -ā, -i y temas consonánticos frecuentes.",
  },
  {
    order: 5,
    title: "Verbos y formas no personales",
    objective: "Reconocer presente, imperativo, participios y absolutivos habituales en textos de enseñanza.",
    practice: "Raíces como √as, √bhū, √jñā, √dṛś, √śru y √gam.",
  },
  {
    order: 6,
    title: "Sandhi y formación de palabras",
    objective: "Deshacer cambios fonéticos entre palabras y dentro de compuestos.",
    practice: "Vocales, visarga, consonantes y segmentación de expresiones reales.",
  },
  {
    order: 7,
    title: "Samāsa y sintaxis vedántica",
    objective: "Analizar compuestos y reconstruir relaciones que el sánscrito expresa de forma condensada.",
    practice: "Tatpuruṣa, karmadhāraya, bahuvrīhi, dvandva y lectura por unidades de sentido.",
  },
  {
    order: 8,
    title: "Lectura guiada de Vedanta Advaita",
    objective: "Aplicar análisis morfológico, sintáctico y contextual a pasajes breves autorizados.",
    practice: "Mahāvākyas, Upaniṣads, Bhagavad Gītā y textos introductorios con comentario.",
  },
] as const;

export type SanskritAutomatedCourse = {
  code: string;
  title: string;
  classification: string;
  duration: string;
  objective: string;
  achievement: string;
  lessons: readonly string[];
  assessment: {
    prompt: string;
    options: readonly string[];
    answer: string;
    explanation: string;
  };
};

export type SanskritProgramLevel = {
  id: string;
  order: number;
  title: string;
  classification: string;
  goal: string;
  badge: string;
  courses: readonly SanskritAutomatedCourse[];
};

export const sanskritProgram: readonly SanskritProgramLevel[] = [
  {
    id: "foundations",
    order: 1,
    title: "Fundamentos de sonido y escritura",
    classification: "Ciclo preparatorio",
    goal: "Construir una base fonética y gráfica antes de introducir análisis gramatical.",
    badge: "Lector inicial",
    courses: [
      {
        code: "SA-101",
        title: "Fonética e IAST",
        classification: "Fonología",
        duration: "4 clases · 3 h",
        objective: "Distinguir cantidad vocálica, aspiración, retroflexión, anusvāra y visarga.",
        achievement: "Transliterar y leer lentamente palabras vedánticas sin borrar contrastes esenciales.",
        lessons: ["Vocales breves y largas", "Cinco puntos de articulación", "Aspiradas, nasales y sibilantes", "Convenciones del alfabeto IAST"],
        assessment: {
          prompt: "¿Qué diferencia representa la raya sobre ā?",
          options: ["Una vocal larga", "Una consonante aspirada", "Un tono interrogativo", "Una sílaba muda"],
          answer: "Una vocal larga",
          explanation: "En IAST, ā representa la vocal larga correspondiente a a; la cantidad puede distinguir formas y debe conservarse.",
        },
      },
      {
        code: "SA-102",
        title: "Devanāgarī: signos y vocal inherente",
        classification: "Escritura",
        duration: "5 clases · 4 h",
        objective: "Reconocer vocales independientes, consonantes, mātrās y virāma.",
        achievement: "Leer y escribir sílabas simples pasando entre devanāgarī e IAST.",
        lessons: ["Orden tradicional de las letras", "La vocal a inherente", "Signos vocálicos dependientes", "Virāma y grupos consonánticos"],
        assessment: {
          prompt: "¿Cómo se lee normalmente क cuando aparece sin otro signo?",
          options: ["ka", "k", "ki", "kā"],
          answer: "ka",
          explanation: "Una consonante devanāgarī aislada incluye normalmente la vocal inherente a; el virāma puede suprimirla.",
        },
      },
      {
        code: "SA-103",
        title: "Laboratorio de lectura inicial",
        classification: "Integración",
        duration: "4 clases · 3 h",
        objective: "Integrar sonido, escritura y segmentación de expresiones breves.",
        achievement: "Leer doce términos fundamentales de Vedanta en ambas escrituras.",
        lessons: ["Sílaba y ritmo", "Lectura de आत्मन् y ब्रह्मन्", "Dictado visual", "Autocorrección con IAST"],
        assessment: {
          prompt: "¿Cuál es la transliteración correcta de ज्ञान?",
          options: ["jñāna", "jnana", "gyāna", "jñana"],
          answer: "jñāna",
          explanation: "La forma conserva el grupo jñ y la vocal larga ā: jñāna.",
        },
      },
    ],
  },
  {
    id: "grammar",
    order: 2,
    title: "Gramática instrumental",
    classification: "Ciclo gramatical",
    goal: "Reconocer cómo las terminaciones expresan relaciones que el español suele indicar con preposiciones y orden.",
    badge: "Analista gramatical",
    courses: [
      {
        code: "SA-201",
        title: "Temas nominales y ocho casos",
        classification: "Morfología nominal",
        duration: "6 clases · 5 h",
        objective: "Distinguir tema, género, número, caso y terminación.",
        achievement: "Identificar funciones básicas de nominativo, acusativo, instrumental, dativo, ablativo, genitivo, locativo y vocativo.",
        lessons: ["Tema y forma de diccionario", "Tres números y tres géneros", "Funciones centrales de los ocho casos", "Paradigmas en -a y -ā"],
        assessment: {
          prompt: "¿Qué expresa principalmente el genitivo?",
          options: ["Relación o pertenencia", "Agente de una orden", "Movimiento hacia", "Llamado directo"],
          answer: "Relación o pertenencia",
          explanation: "El genitivo marca con frecuencia relación, pertenencia o dependencia entre nombres.",
        },
      },
      {
        code: "SA-202",
        title: "Raíces y sistema verbal",
        classification: "Morfología verbal",
        duration: "6 clases · 5 h",
        objective: "Reconocer raíz, persona, número y formas verbales frecuentes.",
        achievement: "Analizar presentes, imperativos y algunas formas no personales de textos pedagógicos.",
        lessons: ["La raíz verbal y el presente", "Persona y número", "Imperativo de instrucción", "Participios y absolutivos frecuentes"],
        assessment: {
          prompt: "¿Qué idea básica aporta la raíz √jñā?",
          options: ["Conocer", "Ir", "Escuchar", "Ser visible"],
          answer: "Conocer",
          explanation: "√jñā significa conocer y está relacionada con jñāna, conocimiento.",
        },
      },
      {
        code: "SA-203",
        title: "Sintaxis y concordancia",
        classification: "Sintaxis",
        duration: "5 clases · 4 h",
        objective: "Reconstruir relaciones sintácticas sin depender del orden de palabras español.",
        achievement: "Localizar verbo, participantes y modificadores en oraciones breves.",
        lessons: ["Concordancia nominal", "Verbo y participantes", "Orden flexible", "Oraciones nominales con y sin cópula"],
        assessment: {
          prompt: "¿Por qué el orden de palabras no basta para analizar una oración sánscrita?",
          options: ["Porque las terminaciones expresan funciones", "Porque no existen verbos", "Porque todo texto es poesía", "Porque solo hay un caso"],
          answer: "Porque las terminaciones expresan funciones",
          explanation: "Las terminaciones nominales y verbales permiten un orden más flexible y deben examinarse antes de traducir.",
        },
      },
    ],
  },
  {
    id: "text-analysis",
    order: 3,
    title: "Análisis y herramientas de lectura",
    classification: "Ciclo analítico",
    goal: "Aprender a desarmar la forma visible del texto y consultar herramientas sin aceptar resultados automáticamente.",
    badge: "Lector analítico",
    courses: [
      {
        code: "SA-301",
        title: "Sandhi: recuperar las palabras",
        classification: "Fonología aplicada",
        duration: "6 clases · 5 h",
        objective: "Reconocer cambios de vocales, consonantes y visarga en los límites de palabras.",
        achievement: "Proponer segmentaciones razonadas de expresiones unidas.",
        lessons: ["Sandhi interno y externo", "Encuentros vocálicos", "Visarga", "Método inverso de segmentación"],
        assessment: {
          prompt: "En brahmāsmi, ¿qué dos elementos se encuentran?",
          options: ["brahma + asmi", "brahman + asi", "brahma + asti", "brahmā + sma"],
          answer: "brahma + asmi",
          explanation: "La secuencia brahma + asmi produce brahmāsmi mediante el encuentro de a + a.",
        },
      },
      {
        code: "SA-302",
        title: "Samāsa: comprender compuestos",
        classification: "Formación de palabras",
        duration: "6 clases · 5 h",
        objective: "Distinguir relaciones básicas de tatpuruṣa, karmadhāraya, dvandva y bahuvrīhi.",
        achievement: "Expandir compuestos frecuentes en una relación explícita y comprobable.",
        lessons: ["Por qué el sánscrito compone", "Compuestos determinativos", "Coordinación y aposición", "Compuestos posesivos"],
        assessment: {
          prompt: "¿Qué hace el análisis de un compuesto?",
          options: ["Explicita la relación condensada", "Elimina toda ambigüedad automáticamente", "Sustituye el diccionario", "Convierte el texto en mantra"],
          answer: "Explicita la relación condensada",
          explanation: "La vigraha o expansión propone la relación entre miembros; el contexto todavía decide entre análisis posibles.",
        },
      },
      {
        code: "SA-303",
        title: "Diccionarios, analizadores y comentarios",
        classification: "Metodología",
        duration: "4 clases · 3 h",
        objective: "Usar recursos digitales y comentarios manteniendo trazabilidad y juicio crítico.",
        achievement: "Documentar una lectura con lema, análisis, fuente y dudas abiertas.",
        lessons: ["Buscar por lema", "Leer abreviaturas de diccionario", "Evaluar un análisis automático", "Comparar texto, traducción y bhāṣya"],
        assessment: {
          prompt: "¿Qué debe hacerse con el primer resultado de un analizador automático?",
          options: ["Verificarlo con gramática y contexto", "Aceptarlo siempre", "Traducir palabra por palabra sin cambios", "Descartar el texto original"],
          answer: "Verificarlo con gramática y contexto",
          explanation: "Los analizadores suelen ofrecer varias posibilidades; la sintaxis, el contexto y las fuentes permiten evaluarlas.",
        },
      },
    ],
  },
  {
    id: "vedanta-reading",
    order: 4,
    title: "Lectura guiada de Vedanta Advaita",
    classification: "Ciclo de integración",
    goal: "Integrar lengua, contexto y método de enseñanza en pasajes breves de las fuentes.",
    badge: "Lector vedántico inicial",
    courses: [
      {
        code: "SA-401",
        title: "Mahāvākyas palabra por palabra",
        classification: "Lectura upaniṣádica",
        duration: "5 clases · 4 h",
        objective: "Analizar forma y función de los términos de cuatro mahāvākyas.",
        achievement: "Explicar qué dice literalmente cada expresión y por qué el contexto excede la traducción.",
        lessons: ["prajñānaṃ brahma", "ahaṃ brahmāsmi", "tat tvam asi", "ayam ātmā brahma"],
        assessment: {
          prompt: "En tat tvam asi, ¿qué forma verbal significa ‘eres’?",
          options: ["asi", "tat", "tvam", "ayam"],
          answer: "asi",
          explanation: "asi es la segunda persona singular del presente de √as, ser.",
        },
      },
      {
        code: "SA-402",
        title: "Bhagavad Gītā: discriminación de sat y asat",
        classification: "Lectura comentada",
        duration: "5 clases · 4 h",
        objective: "Analizar Bhagavad Gītā 2.16 y relacionar gramática, traducción y comentario.",
        achievement: "Justificar una síntesis del verso citando formas concretas del original.",
        lessons: ["Segmentación del verso", "Genitivos sataḥ y asataḥ", "Compuesto tattvadarśin", "Límites de una traducción literal"],
        assessment: {
          prompt: "¿A quiénes señala tattvadarśibhiḥ?",
          options: ["A quienes ven la realidad", "A quienes realizan rituales", "A los autores del Veda", "A los gobernantes"],
          answer: "A quienes ven la realidad",
          explanation: "tattva-darśin combina ‘realidad o principio’ y ‘quien ve’; la forma instrumental plural expresa ‘por quienes ven la realidad’.",
        },
      },
      {
        code: "SA-403",
        title: "Seminario final de lectura responsable",
        classification: "Integración",
        duration: "6 clases · 6 h",
        objective: "Preparar un análisis trazable de un pasaje breve sin confundir traducción, comentario y doctrina.",
        achievement: "Completar una ficha final con original, segmentación, morfología, sintaxis, traducción de trabajo, síntesis y fuentes.",
        lessons: ["Elegir y delimitar un pasaje", "Construir la ficha morfológica", "Comparar interpretaciones", "Declarar dudas y límites"],
        assessment: {
          prompt: "¿Qué elemento vuelve responsable una lectura final?",
          options: ["Distinguir evidencia, interpretación y dudas", "Ocultar las alternativas", "Usar una sola traducción sin fuente", "Eliminar el original"],
          answer: "Distinguir evidencia, interpretación y dudas",
          explanation: "Una lectura rigurosa muestra qué proviene del texto, qué es interpretación y qué necesita revisión competente.",
        },
      },
    ],
  },
] as const;

export const devanagariRows = [
  { group: "Vocales", letters: ["अ a", "आ ā", "इ i", "ई ī", "उ u", "ऊ ū", "ऋ ṛ", "ॠ ṝ", "ऌ ḷ", "ए e", "ऐ ai", "ओ o", "औ au"] },
  { group: "Modificadores", letters: ["अं aṃ", "अः aḥ", "ँ candrabindu", "् virāma"] },
  { group: "Velares", letters: ["क ka", "ख kha", "ग ga", "घ gha", "ङ ṅa"] },
  { group: "Palatales", letters: ["च ca", "छ cha", "ज ja", "झ jha", "ञ ña"] },
  { group: "Retroflexas", letters: ["ट ṭa", "ठ ṭha", "ड ḍa", "ढ ḍha", "ण ṇa"] },
  { group: "Dentales", letters: ["त ta", "थ tha", "द da", "ध dha", "न na"] },
  { group: "Labiales", letters: ["प pa", "फ pha", "ब ba", "भ bha", "म ma"] },
  { group: "Aproximantes", letters: ["य ya", "र ra", "ल la", "व va"] },
  { group: "Sibilantes y h", letters: ["श śa", "ष ṣa", "स sa", "ह ha"] },
] as const;

export const vedantaVocabulary = [
  { devanagari: "अद्वैत", iast: "advaita", meaning: "no dualidad", note: "a- (no) + dvaita (dualidad)" },
  { devanagari: "आत्मन्", iast: "ātman", meaning: "Sí mismo; principio consciente", note: "Forma de diccionario; el nominativo singular es ātmā." },
  { devanagari: "ब्रह्मन्", iast: "brahman", meaning: "realidad absoluta", note: "Neutro; no confundir automáticamente con Brahmā." },
  { devanagari: "ज्ञान", iast: "jñāna", meaning: "conocimiento", note: "Relacionado con la raíz √jñā, conocer." },
  { devanagari: "मोक्ष", iast: "mokṣa", meaning: "liberación", note: "Liberación de saṃsāra en el contexto tradicional." },
  { devanagari: "श्रवण", iast: "śravaṇa", meaning: "escucha de la enseñanza", note: "Primera etapa de la metodología vedántica." },
  { devanagari: "मनन", iast: "manana", meaning: "reflexión razonada", note: "Examen destinado a resolver dudas." },
  { devanagari: "निदिध्यासन", iast: "nididhyāsana", meaning: "contemplación asimilativa", note: "Estabilización de la comprensión no dual." },
  { devanagari: "गुरु", iast: "guru", meaning: "maestro", note: "Quien transmite y esclarece la enseñanza." },
  { devanagari: "शिष्य", iast: "śiṣya", meaning: "discípulo o estudiante", note: "Quien recibe una disciplina de enseñanza." },
  { devanagari: "विवेक", iast: "viveka", meaning: "discernimiento", note: "Capacidad de distinguir lo permanente de lo cambiante." },
  { devanagari: "मिथ्या", iast: "mithyā", meaning: "realidad dependiente", note: "No equivale simplemente a inexistente o falso." },
] as const;

export const mahavakyas = [
  { devanagari: "प्रज्ञानं ब्रह्म", iast: "prajñānaṃ brahma", meaning: "La consciencia es Brahman", source: "Aitareya Upaniṣad" },
  { devanagari: "अहं ब्रह्मास्मि", iast: "ahaṃ brahmāsmi", meaning: "Yo soy Brahman", source: "Bṛhadāraṇyaka Upaniṣad" },
  { devanagari: "तत्त्वमसि", iast: "tat tvam asi", meaning: "Tú eres Eso", source: "Chāndogya Upaniṣad" },
  { devanagari: "अयमात्मा ब्रह्म", iast: "ayam ātmā brahma", meaning: "Este Sí mismo es Brahman", source: "Māṇḍūkya Upaniṣad" },
] as const;

export const sanskritPracticeItems = [
  { prompt: "अद्वैत", answer: "advaita", options: ["advaita", "ātman", "ananta", "adhyāsa"] },
  { prompt: "आत्मन्", answer: "ātman", options: ["ātman", "brahman", "manana", "mokṣa"] },
  { prompt: "ज्ञान", answer: "jñāna", options: ["jñāna", "dhyāna", "karma", "śruti"] },
  { prompt: "मोक्ष", answer: "mokṣa", options: ["mokṣa", "māyā", "mantra", "mīmāṃsā"] },
  { prompt: "श्रवण", answer: "śravaṇa", options: ["śravaṇa", "smaraṇa", "śaraṇa", "sādhana"] },
  { prompt: "तत्त्वमसि", answer: "tat tvam asi", options: ["tat tvam asi", "neti neti", "ahaṃ brahmāsmi", "ayam ātmā brahma"] },
] as const;

export const sanskritResources = [
  {
    title: "Ancient Sanskrit Online",
    provider: "Linguistics Research Center · University of Texas at Austin",
    url: "https://lrc.la.utexas.edu/eieol_toc/vedol",
    use: "Lecciones académicas, gramática y lecturas del Ṛgveda.",
  },
  {
    title: "Sanskrit Heritage Reader",
    provider: "Gérard Huet · INRIA",
    url: "https://sanskrit.inria.fr/DICO/reader.html",
    use: "Segmentación y análisis morfológico asistido; requiere interpretar resultados con criterio.",
  },
  {
    title: "Cologne Digital Sanskrit Dictionaries",
    provider: "University of Cologne",
    url: "https://www.sanskrit-lexicon.uni-koeln.de/",
    use: "Consulta de diccionarios digitalizados como Monier-Williams y Apte.",
  },
] as const;
