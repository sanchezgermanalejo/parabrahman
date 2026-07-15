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
