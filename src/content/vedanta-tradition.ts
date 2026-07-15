export type TraditionPeriod = {
  id: string;
  period: string;
  title: string;
  summary: string;
  focus: readonly string[];
  datingNote?: string;
};

export const traditionPeriods: readonly TraditionPeriod[] = [
  {
    id: "veda",
    period: "Período védico",
    title: "Saṃhitās: del Ṛgveda a los cuatro Vedas",
    summary:
      "El Ṛgveda conserva himnos de la cultura védica y forma, junto con Yajurveda, Sāmaveda y Atharvaveda, el núcleo de śruti. Cada Veda se relaciona con estratos de Saṃhitā, Brāhmaṇa, Āraṇyaka y Upaniṣad.",
    focus: ["Ṛgveda", "Yajurveda", "Sāmaveda", "Atharvaveda", "ritual, himno y transmisión oral"],
    datingNote:
      "Las fechas históricas del corpus védico son aproximadas y discutidas; la tradición lo comprende como apauruṣeya, no de autor humano.",
  },
  {
    id: "upanishads",
    period: "Final del período védico",
    title: "Las Upaniṣads y la interiorización del conocimiento",
    summary:
      "Las Upaniṣads exploran ātman, Brahman, conocimiento, liberación y el sentido último del Veda. Las principales incluyen Bṛhadāraṇyaka, Chāndogya, Aitareya, Taittirīya, Kena, Katha, Īśa, Muṇḍaka, Māṇḍūkya y Praśna.",
    focus: ["mahāvākyas", "ātman y Brahman", "mokṣa", "śravaṇa, manana y contemplación"],
  },
  {
    id: "prasthanatrayi",
    period: "Antigüedad tardía",
    title: "Prasthānatrayī: triple fundamento del Vedanta",
    summary:
      "Las Upaniṣads, la Bhagavad Gītā y los Brahma Sūtras se convierten en el triple punto de partida escriturario, práctico y razonado que las distintas escuelas vedánticas interpretan de maneras diferentes.",
    focus: ["Upaniṣads", "Bhagavad Gītā", "Brahma Sūtras", "comentario y hermenéutica"],
    datingNote: "La composición y fijación de estos textos abarca siglos; no se ofrece una fecha única como certeza.",
  },
  {
    id: "gaudapada",
    period: "Advaita preclásico · ca. siglos VI–VII",
    title: "Gauḍapāda y la Māṇḍūkya Kārikā",
    summary:
      "La Kārikā vinculada a la Māṇḍūkya Upaniṣad desarrolla una exposición temprana y sistemática de la no dualidad, el análisis de los estados de experiencia y la doctrina de no-originación.",
    focus: ["Māṇḍūkya Upaniṣad", "cuatro estados", "ajāti", "linaje de enseñanza"],
  },
  {
    id: "shankara",
    period: "Advaita clásico · ca. siglo VIII",
    title: "Śaṅkara y la sistematización del Advaita Vedanta",
    summary:
      "Śaṅkara articula la no dualidad mediante comentarios al Prasthānatrayī y métodos de enseñanza orientados al reconocimiento liberador. La tradición lo vincula también con linajes monásticos y centros de enseñanza en India.",
    focus: ["adhyāsa", "jñāna", "Brahman no dual", "comentarios", "método pedagógico"],
    datingNote: "Su cronología exacta y algunas atribuciones de obras o instituciones siguen siendo materia de estudio.",
  },
  {
    id: "post-shankara",
    period: "Período posclásico · siglos IX–XVII",
    title: "Desarrollo de comentarios, subescuelas y manuales",
    summary:
      "Discípulos y autores posteriores amplían la epistemología, el lenguaje y la pedagogía del Advaita. Se consolidan líneas interpretativas y textos introductorios para distintos niveles de estudio.",
    focus: ["Sureśvara", "Padmapāda", "Vācaspati Miśra", "Prakāśātman", "Vidyāraṇya", "Madhusūdana Sarasvatī"],
  },
  {
    id: "vedanta-dialogue",
    period: "Vedanta plural · siglos XI–XIII y posteriores",
    title: "Diálogo con Viśiṣṭādvaita, Dvaita y otras lecturas",
    summary:
      "Rāmānuja, Madhva y otros ācāryas interpretan las mismas fuentes vedánticas desde posiciones distintas. Conocer esas diferencias permite comprender que Vedanta no es sinónimo exclusivo de Advaita.",
    focus: ["Rāmānuja", "Madhva", "Viśiṣṭādvaita", "Dvaita", "debate entre escuelas"],
  },
  {
    id: "modernity",
    period: "Siglos XIX–XXI",
    title: "Transmisión moderna y alcance universal",
    summary:
      "El Vedanta llega a públicos globales mediante órdenes tradicionales, movimientos modernos, traducciones y maestros de distintas formas de transmisión. La plataforma distinguirá siempre la exégesis tradicional de expresiones contemporáneas de no dualidad.",
    focus: ["Ramakrishna y Vivekananda", "Ramana Maharshi", "Swami Sivananda", "Swami Chinmayananda", "Swami Dayananda Saraswati", "Nisargadatta Maharaj"],
    datingNote:
      "La inclusión en esta etapa indica influencia histórica, no equivalencia doctrinal ni pertenencia a un único sampradāya.",
  },
];

export const textFamilies = [
  {
    title: "Śruti y corpus védico",
    role: "Fuente revelada en la comprensión tradicional",
    items: ["Cuatro Vedas", "Brāhmaṇas", "Āraṇyakas", "Upaniṣads principales"],
  },
  {
    title: "Prasthānatrayī",
    role: "Base textual compartida por las escuelas de Vedanta",
    items: ["Upaniṣads", "Bhagavad Gītā", "Brahma Sūtras de Bādarāyaṇa"],
  },
  {
    title: "Advaita clásico",
    role: "Exposición, comentario y razonamiento no dual",
    items: ["Māṇḍūkya Kārikā", "Brahma Sūtra Bhāṣya", "comentarios de Śaṅkara", "Upadeśasāhasrī"],
  },
  {
    title: "Manuales y profundización",
    role: "Puertas pedagógicas posteriores",
    items: ["Pañcadaśī", "Vedāntasāra", "Vedāntaparibhāṣā", "Advaitasiddhi", "textos de prakaraṇa"],
  },
] as const;

export const traditionPlaces = [
  {
    region: "Noroeste y norte védico",
    significance: "Ámbito histórico asociado a buena parte de la cultura védica temprana y a la preservación de śākhās.",
  },
  {
    region: "Mithilā y la llanura gangética",
    significance: "Contexto de diálogos upaniṣádicos vinculados con Yājñavalkya, Gārgī y el rey Janaka.",
  },
  {
    region: "Kāśī (Varanasi)",
    significance: "Centro de aprendizaje, renuncia y comentario sánscrito durante siglos.",
  },
  {
    region: "Kālaḍi, Kerala",
    significance: "Lugar de nacimiento de Śaṅkara según la memoria tradicional.",
  },
  {
    region: "Śṛṅgeri, Purī, Dvārakā y Jyotirmath",
    significance: "Centros monásticos atribuidos tradicionalmente a la organización de Śaṅkara; su historia institucional requiere tratamiento crítico por separado.",
  },
  {
    region: "Tamil Nadu y Arunāchala",
    significance: "Región decisiva para expresiones modernas de indagación del Sí mismo, especialmente alrededor de Ramana Maharshi.",
  },
] as const;

export const traditionSources = [
  {
    title: "Vedic Heritage Portal — Introducción al corpus védico",
    publisher: "Indira Gandhi National Centre for the Arts · Gobierno de India",
    url: "https://vedicheritage.gov.in/introduction/",
  },
  {
    title: "Vedic Heritage Portal — Upaniṣads",
    publisher: "Indira Gandhi National Centre for the Arts · Gobierno de India",
    url: "https://vedicheritage.gov.in/upanishads/",
  },
  {
    title: "Śaṅkara",
    publisher: "Stanford Encyclopedia of Philosophy",
    url: "https://plato.stanford.edu/entries/shankara/",
  },
  {
    title: "Advaita Vedanta",
    publisher: "Internet Encyclopedia of Philosophy",
    url: "https://iep.utm.edu/advaita-vedanta/",
  },
  {
    title: "Upaniṣads",
    publisher: "Internet Encyclopedia of Philosophy",
    url: "https://iep.utm.edu/upanisad/",
  },
] as const;
