export type TraditionPeriod = {
  id: string;
  period: string;
  title: string;
  summary: string;
  focus: readonly string[];
  resources: readonly TraditionLink[];
  datingNote?: string;
};

export type TraditionLink = {
  label: string;
  url: string;
};

export const traditionPeriods: readonly TraditionPeriod[] = [
  {
    id: "veda",
    period: "Período védico",
    title: "Saṃhitās: del Ṛgveda a los cuatro Vedas",
    summary:
      "El Ṛgveda conserva himnos de la cultura védica y forma, junto con Yajurveda, Sāmaveda y Atharvaveda, el núcleo de śruti. Cada Veda se relaciona con estratos de Saṃhitā, Brāhmaṇa, Āraṇyaka y Upaniṣad.",
    focus: ["Ṛgveda", "Yajurveda", "Sāmaveda", "Atharvaveda", "ritual, himno y transmisión oral"],
    resources: [{ label: "Explorar el corpus védico", url: "https://vedicheritage.gov.in/introduction/" }],
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
    resources: [{ label: "Consultar las Upaniṣads", url: "https://vedicheritage.gov.in/upanishads/" }],
  },
  {
    id: "prasthanatrayi",
    period: "Antigüedad tardía",
    title: "Prasthānatrayī: triple fundamento del Vedanta",
    summary:
      "Las Upaniṣads, la Bhagavad Gītā y los Brahma Sūtras se convierten en el triple punto de partida escriturario, práctico y razonado que las distintas escuelas vedánticas interpretan de maneras diferentes.",
    focus: ["Upaniṣads", "Bhagavad Gītā", "Brahma Sūtras", "comentario y hermenéutica"],
    resources: [{ label: "Estudiar el Prasthānatrayī", url: "https://www.gitasupersite.iitk.ac.in/node/2" }],
    datingNote: "La composición y fijación de estos textos abarca siglos; no se ofrece una fecha única como certeza.",
  },
  {
    id: "gaudapada",
    period: "Advaita preclásico · ca. siglos VI–VII",
    title: "Gauḍapāda y la Māṇḍūkya Kārikā",
    summary:
      "La Kārikā vinculada a la Māṇḍūkya Upaniṣad desarrolla una exposición temprana y sistemática de la no dualidad, el análisis de los estados de experiencia y la doctrina de no-originación.",
    focus: ["Māṇḍūkya Upaniṣad", "cuatro estados", "ajāti", "linaje de enseñanza"],
    resources: [{ label: "Contexto académico del Advaita", url: "https://iep.utm.edu/advaita-vedanta/" }],
  },
  {
    id: "shankara",
    period: "Advaita clásico · ca. siglo VIII",
    title: "Śaṅkara y la sistematización del Advaita Vedanta",
    summary:
      "Śaṅkara articula la no dualidad mediante comentarios al Prasthānatrayī y métodos de enseñanza orientados al reconocimiento liberador. La tradición lo vincula también con linajes monásticos y centros de enseñanza en India.",
    focus: ["adhyāsa", "jñāna", "Brahman no dual", "comentarios", "método pedagógico"],
    resources: [{ label: "Perfil académico de Śaṅkara", url: "https://plato.stanford.edu/entries/shankara/" }],
    datingNote: "Su cronología exacta y algunas atribuciones de obras o instituciones siguen siendo materia de estudio.",
  },
  {
    id: "post-shankara",
    period: "Período posclásico · siglos IX–XVII",
    title: "Desarrollo de comentarios, subescuelas y manuales",
    summary:
      "Discípulos y autores posteriores amplían la epistemología, el lenguaje y la pedagogía del Advaita. Se consolidan líneas interpretativas y textos introductorios para distintos niveles de estudio.",
    focus: ["Sureśvara", "Padmapāda", "Vācaspati Miśra", "Prakāśātman", "Vidyāraṇya", "Madhusūdana Sarasvatī"],
    resources: [{ label: "Historia doctrinal del Advaita", url: "https://iep.utm.edu/advaita-vedanta/" }],
  },
  {
    id: "vedanta-dialogue",
    period: "Vedanta plural · siglos XI–XIII y posteriores",
    title: "Diálogo con Viśiṣṭādvaita, Dvaita y otras lecturas",
    summary:
      "Rāmānuja, Madhva y otros ācāryas interpretan las mismas fuentes vedánticas desde posiciones distintas. Conocer esas diferencias permite comprender que Vedanta no es sinónimo exclusivo de Advaita.",
    focus: ["Rāmānuja", "Madhva", "Viśiṣṭādvaita", "Dvaita", "debate entre escuelas"],
    resources: [
      { label: "Panorama de filosofías hindúes", url: "https://iep.utm.edu/hindu-ph/" },
      { label: "Conocer la tradición de Madhva", url: "https://iep.utm.edu/madhva/" },
    ],
  },
  {
    id: "modernity",
    period: "Siglos XIX–XXI",
    title: "Transmisión moderna y alcance universal",
    summary:
      "El Vedanta llega a públicos globales mediante órdenes tradicionales, movimientos modernos, traducciones y maestros de distintas formas de transmisión. La plataforma distinguirá siempre la exégesis tradicional de expresiones contemporáneas de no dualidad.",
    focus: ["Ramakrishna y Vivekananda", "Ramana Maharshi", "Swami Sivananda", "Swami Chinmayananda", "Swami Dayananda Saraswati", "Nisargadatta Maharaj"],
    resources: [{ label: "Marco histórico del Advaita", url: "https://iep.utm.edu/advaita-vedanta/" }],
    datingNote:
      "La inclusión en esta etapa indica influencia histórica, no equivalencia doctrinal ni pertenencia a un único sampradāya.",
  },
];

export const textFamilies = [
  {
    title: "Śruti y corpus védico",
    role: "Fuente revelada en la comprensión tradicional",
    items: [
      { label: "Cuatro Vedas", url: "https://vedicheritage.gov.in/introduction/" },
      { label: "Brāhmaṇas", url: "https://vedicheritage.gov.in/introduction/" },
      { label: "Āraṇyakas", url: "https://vedicheritage.gov.in/introduction/" },
      { label: "Upaniṣads principales", url: "https://vedicheritage.gov.in/upanishads/" },
    ],
  },
  {
    title: "Prasthānatrayī",
    role: "Base textual compartida por las escuelas de Vedanta",
    items: [
      { label: "Upaniṣads", url: "https://vedicheritage.gov.in/upanishads/" },
      { label: "Bhagavad Gītā", url: "https://www.gitasupersite.iitk.ac.in/" },
      { label: "Brahma Sūtras de Bādarāyaṇa", url: "https://www.gitasupersite.iitk.ac.in/bs_home" },
    ],
  },
  {
    title: "Advaita clásico",
    role: "Exposición, comentario y razonamiento no dual",
    items: [
      { label: "Māṇḍūkya Kārikā", url: "https://iep.utm.edu/advaita-vedanta/" },
      { label: "Brahma Sūtra Bhāṣya", url: "https://www.gitasupersite.iitk.ac.in/bs_home" },
      { label: "Comentarios de Śaṅkara", url: "https://plato.stanford.edu/entries/shankara/" },
      { label: "Upadeśasāhasrī", url: "https://plato.stanford.edu/entries/shankara/" },
    ],
  },
  {
    title: "Manuales y profundización",
    role: "Puertas pedagógicas posteriores",
    items: [
      { label: "Pañcadaśī", url: "https://iep.utm.edu/advaita-vedanta/" },
      { label: "Vedāntasāra", url: "https://iep.utm.edu/advaita-vedanta/" },
      { label: "Vedāntaparibhāṣā", url: "https://iep.utm.edu/advaita-vedanta/" },
      { label: "Advaitasiddhi", url: "https://iep.utm.edu/advaita-vedanta/" },
      { label: "Textos de prakaraṇa", url: "https://iep.utm.edu/advaita-vedanta/" },
    ],
  },
] as const;

export const traditionPlaces = [
  {
    region: "Noroeste y norte védico",
    significance: "Ámbito histórico asociado a buena parte de la cultura védica temprana y a la preservación de śākhās.",
    studyUrl: "https://vedicheritage.gov.in/introduction/",
  },
  {
    region: "Mithilā y la llanura gangética",
    significance: "Contexto de diálogos upaniṣádicos vinculados con Yājñavalkya, Gārgī y el rey Janaka.",
    studyUrl: "https://iep.utm.edu/upanisad/",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Mithila+India+Nepal",
  },
  {
    region: "Kāśī (Varanasi)",
    significance: "Centro de aprendizaje, renuncia y comentario sánscrito durante siglos.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Varanasi+India",
  },
  {
    region: "Kālaḍi, Kerala",
    significance: "Lugar de nacimiento de Śaṅkara según la memoria tradicional.",
    studyUrl: "https://www.sringeri.info/kaladi",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Kalady+Kerala+India",
  },
  {
    region: "Śṛṅgeri, Karnataka",
    significance: "Centro tradicional de enseñanza del Advaita y sede de una de las instituciones monásticas vinculadas con Śaṅkara.",
    studyUrl: "https://sringeri.co.in/aboutus.php?heading=About+Us",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Sringeri+Sharada+Peetham+Karnataka",
  },
  {
    region: "Purī, Odisha",
    significance: "Sede tradicional de Govardhana Matha, asociada a la transmisión oriental atribuida a Śaṅkara.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Govardhan+Math+Puri+Odisha",
  },
  {
    region: "Dvārakā, Gujarat",
    significance: "Sede tradicional de Śāradā Pīṭha, asociada a la transmisión occidental atribuida a Śaṅkara.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Sharada+Peeth+Dwarka+Gujarat",
  },
  {
    region: "Jyotirmath, Uttarakhand",
    significance: "Centro tradicional del norte, también conocido como Joshimath, vinculado a uno de los cuatro pīṭhas.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Jyotirmath+Joshimath+Uttarakhand",
  },
  {
    region: "Tamil Nadu y Arunāchala",
    significance: "Región decisiva para expresiones modernas de indagación del Sí mismo, especialmente alrededor de Ramana Maharshi.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Arunachala+Tiruvannamalai+Tamil+Nadu",
  },
] as const;

export const traditionSources = [
  {
    title: "Gītā Supersite — Bhagavad Gītā y Brahma Sūtras",
    publisher: "Indian Institute of Technology Kanpur",
    url: "https://www.gitasupersite.iitk.ac.in/",
  },
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
  {
    title: "Hindu Philosophy",
    publisher: "Internet Encyclopedia of Philosophy",
    url: "https://iep.utm.edu/hindu-ph/",
  },
] as const;
