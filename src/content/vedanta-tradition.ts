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
    period: "Período védico · ca. 1500–500 a. C.",
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
    period: "Upaniṣads védicas · ca. 700–100 a. C.",
    title: "Las Upaniṣads y la interiorización del conocimiento",
    summary:
      "Las Upaniṣads exploran ātman, Brahman, conocimiento, liberación y el sentido último del Veda. Las principales incluyen Bṛhadāraṇyaka, Chāndogya, Aitareya, Taittirīya, Kena, Katha, Īśa, Muṇḍaka, Māṇḍūkya y Praśna.",
    focus: ["mahāvākyas", "ātman y Brahman", "mokṣa", "śravaṇa, manana y contemplación"],
    resources: [{ label: "Consultar las Upaniṣads", url: "https://vedicheritage.gov.in/upanishads/" }],
  },
  {
    id: "prasthanatrayi",
    period: "Antigüedad tardía · ca. 200 a. C.–200 d. C.",
    title: "Prasthānatrayī: triple fundamento del Vedanta",
    summary:
      "Las Upaniṣads, la Bhagavad Gītā y los Brahma Sūtras se convierten en el triple punto de partida escriturario, práctico y razonado que las distintas escuelas vedánticas interpretan de maneras diferentes.",
    focus: ["Upaniṣads", "Bhagavad Gītā", "Brahma Sūtras", "comentario y hermenéutica"],
    resources: [{ label: "Estudiar el Prasthānatrayī", url: "https://www.gitasupersite.iitk.ac.in/node/2" }],
    datingNote: "La composición y fijación de estos textos abarca siglos; no se ofrece una fecha única como certeza.",
  },
  {
    id: "gaudapada",
    period: "Advaita preclásico · ca. siglo VI",
    title: "Gauḍapāda (ca. siglo VI) y la Māṇḍūkya Kārikā",
    summary:
      "La Kārikā vinculada a la Māṇḍūkya Upaniṣad desarrolla una exposición temprana y sistemática de la no dualidad, el análisis de los estados de experiencia y la doctrina de no-originación.",
    focus: ["Māṇḍūkya Upaniṣad", "cuatro estados", "ajāti", "linaje de enseñanza"],
    resources: [{ label: "Contexto académico del Advaita", url: "https://iep.utm.edu/advaita-vedanta/" }],
  },
  {
    id: "shankara",
    period: "Advaita clásico · ca. siglo VIII",
    title: "Śaṅkara (ca. siglo VIII) y la sistematización del Advaita Vedanta",
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
    focus: ["Sureśvara · siglo VIII", "Padmapāda · siglo VIII", "Vācaspati Miśra · siglo IX", "Prakāśātman · siglos X–XI", "Vidyāraṇya · ca. 1296–1386", "Madhusūdana Sarasvatī · ca. 1540–1640"],
    resources: [{ label: "Historia doctrinal del Advaita", url: "https://iep.utm.edu/advaita-vedanta/" }],
  },
  {
    id: "vedanta-dialogue",
    period: "Vedanta plural · siglos XI–XIII y posteriores",
    title: "Diálogo con Rāmānuja (1017–1137), Madhva (siglo XIII) y otras lecturas",
    summary:
      "Rāmānuja, Madhva y otros ācāryas interpretan las mismas fuentes vedánticas desde posiciones distintas. Conocer esas diferencias permite comprender que Vedanta no es sinónimo exclusivo de Advaita.",
    focus: ["Rāmānuja · 1017–1137", "Madhva · ca. 1238–1317", "Viśiṣṭādvaita", "Dvaita", "debate entre escuelas"],
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
    focus: ["Ramakrishna · 1836–1886", "Vivekananda · 1863–1902", "Ramana Maharshi · 1879–1950", "Swami Sivananda · 1887–1963", "Swami Chinmayananda · 1916–1993", "Swami Dayananda Saraswati · 1930–2015", "Nisargadatta Maharaj · 1897–1981"],
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
      { label: "Cuatro Vedas", date: "ca. 1500–500 a. C.", url: "https://vedicheritage.gov.in/introduction/" },
      { label: "Brāhmaṇas", date: "ca. 1000–700 a. C.", url: "https://vedicheritage.gov.in/introduction/" },
      { label: "Āraṇyakas", date: "ca. 900–600 a. C.", url: "https://vedicheritage.gov.in/introduction/" },
      { label: "Upaniṣads principales", date: "ca. 700–100 a. C.", url: "https://vedicheritage.gov.in/upanishads/" },
    ],
  },
  {
    title: "Prasthānatrayī",
    role: "Base textual compartida por las escuelas de Vedanta",
    items: [
      { label: "Upaniṣads", date: "ca. 700–100 a. C.", url: "https://vedicheritage.gov.in/upanishads/" },
      { label: "Bhagavad Gītā", date: "ca. 200 a. C.–200 d. C.", url: "https://www.gitasupersite.iitk.ac.in/" },
      { label: "Brahma Sūtras de Bādarāyaṇa", date: "ca. 200 a. C.–200 d. C.", url: "https://www.gitasupersite.iitk.ac.in/bs_home" },
    ],
  },
  {
    title: "Advaita clásico",
    role: "Exposición, comentario y razonamiento no dual",
    items: [
      { label: "Māṇḍūkya Kārikā", date: "ca. siglo VI", url: "https://iep.utm.edu/advaita-vedanta/" },
      { label: "Brahma Sūtra Bhāṣya", date: "ca. siglo VIII", url: "https://www.gitasupersite.iitk.ac.in/bs_home" },
      { label: "Comentarios de Śaṅkara", date: "ca. siglo VIII", url: "https://plato.stanford.edu/entries/shankara/" },
      { label: "Upadeśasāhasrī", date: "ca. siglo VIII", url: "https://plato.stanford.edu/entries/shankara/" },
    ],
  },
  {
    title: "Manuales y profundización",
    role: "Puertas pedagógicas posteriores",
    items: [
      { label: "Pañcadaśī", date: "ca. siglo XIV", url: "https://iep.utm.edu/advaita-vedanta/" },
      { label: "Vedāntasāra", date: "ca. siglos XV–XVI", url: "https://iep.utm.edu/advaita-vedanta/" },
      { label: "Vedāntaparibhāṣā", date: "ca. siglo XVII", url: "https://iep.utm.edu/advaita-vedanta/" },
      { label: "Advaitasiddhi", date: "ca. siglo XVI", url: "https://iep.utm.edu/advaita-vedanta/" },
      { label: "Textos de prakaraṇa", date: "siglos VIII–XVII", url: "https://iep.utm.edu/advaita-vedanta/" },
    ],
  },
] as const;

export const primaryPassages = [
  {
    id: "rigveda-one-reality",
    source: "Ṛgveda",
    date: "ca. 1200 a. C. · datación aproximada del estrato",
    reference: "1.164.46",
    devanagari: "एकं सद् विप्रा बहुधा वदन्ति",
    iast: "ekaṃ sad viprā bahudhā vadanti",
    literal: [
      { term: "ekam", meaning: "uno, una sola" },
      { term: "sat", meaning: "lo real, lo existente" },
      { term: "viprāḥ", meaning: "los inspirados o sabios" },
      { term: "bahudhā", meaning: "de muchas maneras" },
      { term: "vadanti", meaning: "hablan, denominan" },
    ],
    synthesis:
      "El himno reconoce una unidad de lo real expresada mediante múltiples nombres. Es un antecedente importante para estudiar la búsqueda védica de unidad, pero no debe presentarse sin más como una formulación completa del Advaita posterior.",
    context:
      "El verso completo menciona diversos nombres divinos. La lectura exige conservar su contexto poético védico antes de proyectar sobre él categorías filosóficas posteriores.",
    sourceUrl: "https://vedicheritage.gov.in/samhitas/rigveda/shakala-samhita/rigveda-shakala-samhitas-mandal-01-sukta-164/",
  },
  {
    id: "chandogya-tat-tvam-asi",
    source: "Chāndogya Upaniṣad",
    date: "ca. 700–500 a. C.",
    reference: "6.8.7",
    devanagari: "तत् त्वम् असि श्वेतकेतो",
    iast: "tat tvam asi śvetaketo",
    literal: [
      { term: "tat", meaning: "Eso, aquella realidad" },
      { term: "tvam", meaning: "tú" },
      { term: "asi", meaning: "eres" },
      { term: "śvetaketo", meaning: "oh Śvetaketu" },
    ],
    synthesis:
      "Uddālaka conduce a Śvetaketu a reconocer que el fundamento sutil de todo no está separado del Sí mismo. La frase se repite dentro de una enseñanza progresiva, no como afirmación aislada del individuo psicológico.",
    context:
      "La sección utiliza ejemplos como la semilla y la sal disuelta. Para el Advaita, la identidad señalada requiere distinguir el sentido inmediato y el sentido indicado de ‘tú’ y ‘Eso’.",
    sourceUrl: "https://vedicheritage.gov.in/upanishads/",
  },
  {
    id: "brihadaranyaka-aham-brahmasmi",
    source: "Bṛhadāraṇyaka Upaniṣad",
    date: "ca. 700–500 a. C.",
    reference: "1.4.10",
    devanagari: "अहं ब्रह्मास्मि",
    iast: "ahaṃ brahmāsmi",
    literal: [
      { term: "aham", meaning: "yo" },
      { term: "brahma", meaning: "Brahman, la realidad ilimitada" },
      { term: "asmi", meaning: "soy" },
    ],
    synthesis:
      "La expresión formula el reconocimiento de que la consciencia que se toma por limitada no es distinta de Brahman. No declara que la personalidad o el ego posean omnipotencia.",
    context:
      "El pasaje describe un conocimiento mediante el cual lo aparentemente separado se comprende desde su fundamento. Su lectura tradicional evita tanto el literalismo egocéntrico como una identidad meramente simbólica.",
    sourceUrl: "https://vedicheritage.gov.in/upanishads/",
  },
  {
    id: "mandukya-ayam-atma-brahma",
    source: "Māṇḍūkya Upaniṣad",
    date: "ca. 300–100 a. C.",
    reference: "mantra 2",
    devanagari: "अयमात्मा ब्रह्म",
    iast: "ayam ātmā brahma",
    literal: [
      { term: "ayam", meaning: "este, inmediato" },
      { term: "ātmā", meaning: "el Sí mismo" },
      { term: "brahma", meaning: "Brahman" },
    ],
    synthesis:
      "El texto identifica el Sí mismo inmediatamente conocido con Brahman y luego analiza vigilia, sueño, sueño profundo y turīya para retirar identificaciones parciales.",
    context:
      "Es una Upaniṣad extremadamente breve. La Māṇḍūkya Kārikā de Gauḍapāda desarrolla su alcance y es central en la historia del Advaita preclásico.",
    sourceUrl: "https://vedicheritage.gov.in/upanishads/",
  },
  {
    id: "aitareya-prajnanam-brahma",
    source: "Aitareya Upaniṣad",
    date: "ca. 700–500 a. C.",
    reference: "3.1.3",
    devanagari: "प्रज्ञानं ब्रह्म",
    iast: "prajñānaṃ brahma",
    literal: [
      { term: "prajñānam", meaning: "consciencia, conocimiento consciente" },
      { term: "brahma", meaning: "Brahman" },
    ],
    synthesis:
      "La consciencia no se presenta como una propiedad accidental entre otras, sino como aquello por lo cual toda experiencia y conocimiento son posibles.",
    context:
      "El término prajñāna admite matices que una sola palabra española no agota. La enseñanza requiere diferenciar consciencia de contenidos mentales cambiantes.",
    sourceUrl: "https://vedicheritage.gov.in/upanishads/",
  },
  {
    id: "isha-all-this",
    source: "Īśā Upaniṣad",
    date: "ca. 300–100 a. C.",
    reference: "mantra 1",
    devanagari: "ईशावास्यमिदं सर्वं यत्किञ्च जगत्यां जगत्",
    iast: "īśāvāsyam idaṃ sarvaṃ yat kiñca jagatyāṃ jagat",
    literal: [
      { term: "īśā", meaning: "por el Señor, por lo soberano" },
      { term: "vāsyam", meaning: "ha de ser cubierto o habitado" },
      { term: "idam sarvam", meaning: "todo esto" },
      { term: "yat kiñca", meaning: "todo cuanto" },
      { term: "jagatyāṃ jagat", meaning: "se mueve en el mundo cambiante" },
    ],
    synthesis:
      "El mantra abre una visión en la que nada queda fuera de la realidad sagrada y vincula esa comprensión con una relación no posesiva con el mundo.",
    context:
      "Las posibilidades gramaticales de vāsyam dan lugar a matices interpretativos. La síntesis no reemplaza el estudio de comentarios ni autoriza una traducción única como definitiva.",
    sourceUrl: "https://vedicheritage.gov.in/upanishads/",
  },
  {
    id: "gita-real-unreal",
    source: "Bhagavad Gītā",
    date: "ca. 200 a. C.–200 d. C.",
    reference: "2.16",
    devanagari: "नासतो विद्यते भावो नाभावो विद्यते सतः। उभयोरपि दृष्टोऽन्तस्त्वनयोस्तत्त्वदर्शिभिः॥",
    iast: "nāsato vidyate bhāvo nābhāvo vidyate sataḥ; ubhayor api dṛṣṭo ’ntas tv anayos tattvadarśibhiḥ",
    literal: [
      { term: "na asataḥ bhāvaḥ", meaning: "de lo no-real no hay ser independiente" },
      { term: "na sataḥ abhāvaḥ", meaning: "de lo real no hay ausencia" },
      { term: "ubhayoḥ antaḥ", meaning: "la conclusión acerca de ambos" },
      { term: "tattvadarśibhiḥ", meaning: "por quienes ven la realidad" },
    ],
    synthesis:
      "Kṛṣṇa distingue lo cambiante de aquello que no deja de ser. En la lectura advaita, esta discriminación sostiene el examen entre el Sí mismo y los fenómenos variables.",
    context:
      "El verso aparece en una enseñanza sobre el duelo, el cuerpo y el ātman. La palabra asat no debe reducirse automáticamente a una nada absoluta sin atender al comentario y al nivel de realidad discutido.",
    sourceUrl: "https://www.gitasupersite.iitk.ac.in/srimad?choose=1&field_chapter_value=2&field_nsutra_value=16&language=dv&show_mool=1",
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
