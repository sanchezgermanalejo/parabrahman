export const libraryCategories = [
  { id: "all", label: "Todos" },
  { id: "sanatana", label: "Sanātana Dharma" },
  { id: "prasthanatrayi", label: "Prasthānatrayī" },
  { id: "advaita-classic", label: "Advaita clásico" },
  { id: "modern", label: "Transmisión moderna" },
  { id: "contemporary", label: "Maestros contemporáneos" },
] as const;

export type LibraryCategory = Exclude<
  (typeof libraryCategories)[number]["id"],
  "all"
>;

export type LibraryBook = {
  id: string;
  title: string;
  originalTitle?: string;
  author: string;
  era: string;
  date: string;
  authorDates?: string;
  category: LibraryCategory;
  summary: string;
  language: string;
  access: string;
  url: string;
  source: string;
  rightsNote: string;
  alternativeUrl?: string;
  alternativeLabel?: string;
};

export const vedicTextSequence = [
  {
    order: 1,
    title: "Saṃhitās védicas",
    shortTitle: "Vedas",
    description: "Himnos, fórmulas y recitaciones de las cuatro colecciones védicas.",
    url: "https://vedicheritage.gov.in/en/samhitas/",
  },
  {
    order: 2,
    title: "Brāhmaṇas",
    shortTitle: "Brāhmaṇas",
    description: "Explicaciones rituales y simbólicas vinculadas con cada tradición védica.",
    url: "https://vedicheritage.gov.in/brahmanas/",
  },
  {
    order: 3,
    title: "Āraṇyakas",
    shortTitle: "Āraṇyakas",
    description: "Textos de transición hacia la contemplación y la interpretación interior.",
    url: "https://vedicheritage.gov.in/aranyakas/",
  },
  {
    order: 4,
    title: "Upaniṣads",
    shortTitle: "Upaniṣads",
    description: "Investigación de ātman, Brahman, conocimiento y liberación.",
    url: "https://vedicheritage.gov.in/upanishads/",
  },
] as const;

export const libraryBooks: readonly LibraryBook[] = [
  {
    id: "vedic-samhitas",
    title: "Las cuatro Saṃhitās védicas",
    originalTitle: "Ṛgveda · Yajurveda · Sāmaveda · Atharvaveda",
    author: "Tradición védica",
    era: "Período védico",
    date: "ca. 1500–500 a. C. · estratos diversos",
    category: "sanatana",
    summary:
      "Puerta de entrada al corpus más antiguo del Sanātana Dharma, con textos, recitación y recursos organizados por el portal patrimonial del Gobierno de India.",
    language: "Sánscrito e inglés",
    access: "Lectura y audio oficiales",
    url: "https://vedicheritage.gov.in/en/samhitas/",
    source: "Vedic Heritage Portal",
    rightsNote: "Consulta externa en el portal institucional de la IGNCA.",
  },
  {
    id: "brahmanas",
    title: "Brāhmaṇas",
    originalTitle: "Aitareya · Kauṣītaki · Śatapatha · Taittirīya y otros",
    author: "Tradición védica",
    era: "Período védico",
    date: "ca. 1000–700 a. C. · rangos aproximados y estratos diversos",
    category: "sanatana",
    summary:
      "Segundo estrato del recorrido védico: textos asociados con las Saṃhitās que explican ritos, fórmulas, correspondencias y significados sacrificiales.",
    language: "Sánscrito e inglés",
    access: "Lectura oficial",
    url: "https://vedicheritage.gov.in/brahmanas/",
    source: "Vedic Heritage Portal",
    rightsNote: "Consulta externa en el portal patrimonial oficial de la IGNCA.",
  },
  {
    id: "aranyakas",
    title: "Āraṇyakas",
    originalTitle: "Aitareya · Kauṣītaki · Bṛhadāraṇyaka · Taittirīya y Talavakāra",
    author: "Tradición védica",
    era: "Período védico tardío",
    date: "ca. 900–600 a. C. · rangos aproximados y superpuestos",
    category: "sanatana",
    summary:
      "Tercer estrato del recorrido védico: textos que enlazan la interpretación ritual con la contemplación, el simbolismo y la investigación que culmina en las Upaniṣads.",
    language: "Sánscrito e inglés",
    access: "Lectura oficial",
    url: "https://vedicheritage.gov.in/aranyakas/",
    source: "Vedic Heritage Portal",
    rightsNote: "Consulta externa en el portal patrimonial oficial de la IGNCA.",
  },
  {
    id: "upanishads",
    title: "Upaniṣads",
    originalTitle: "Colección de Upaniṣads védicas",
    author: "Tradición védica",
    era: "Final del período védico",
    date: "ca. 700–100 a. C. · principales Upaniṣads",
    category: "sanatana",
    summary:
      "Textos que investigan ātman, Brahman, conocimiento y liberación; constituyen el fundamento revelado de las escuelas de Vedanta.",
    language: "Sánscrito e inglés",
    access: "Lectura oficial",
    url: "https://vedicheritage.gov.in/upanishads/",
    source: "Vedic Heritage Portal",
    rightsNote: "Consulta externa en un portal patrimonial oficial.",
  },
  {
    id: "valmiki-ramayana",
    title: "Rāmāyaṇa de Vālmīki",
    author: "Vālmīki",
    era: "Épica sánscrita",
    date: "ca. 500 a. C.–200 d. C. · composición estratificada",
    authorDates: "Vālmīki · cronología histórica indeterminada",
    category: "sanatana",
    summary:
      "Una de las grandes epopeyas de India. Su relato de Rāma articula dharma, deber, devoción, gobierno y vida humana.",
    language: "Sánscrito, hindi e inglés",
    access: "Lector académico",
    url: "https://www.gitasupersite.iitk.ac.in/",
    source: "Gita Supersite · IIT Kanpur",
    rightsNote: "El portal académico ofrece el acceso desde su selector de textos.",
  },
  {
    id: "yoga-sutras",
    title: "Yoga Sūtras",
    author: "Patañjali",
    era: "Período clásico",
    date: "ca. siglos II a. C.–V d. C. · datación discutida",
    authorDates: "Patañjali · cronología histórica discutida",
    category: "sanatana",
    summary:
      "Aforismos fundamentales del Yoga clásico. Complementan el estudio vedántico al ordenar mente, práctica, concentración y liberación.",
    language: "Sánscrito, hindi e inglés",
    access: "Lector académico",
    url: "https://www.gitasupersite.iitk.ac.in/",
    source: "Gita Supersite · IIT Kanpur",
    rightsNote: "El portal académico ofrece el acceso desde su selector de textos.",
  },
  {
    id: "bhagavad-gita",
    title: "Bhagavad Gītā",
    author: "Tradicionalmente atribuida a Vyāsa",
    era: "Épica sánscrita",
    date: "ca. 200 a. C.–200 d. C.",
    authorDates: "Vyāsa · figura tradicional, sin fecha histórica única",
    category: "prasthanatrayi",
    summary:
      "Diálogo entre Kṛṣṇa y Arjuna sobre acción, conocimiento, devoción, naturaleza del ser y liberación; es la base práctica del triple canon vedántico.",
    language: "Sánscrito, hindi e inglés",
    access: "Texto y comentarios",
    url: "https://www.gitasupersite.iitk.ac.in/",
    source: "Gita Supersite · IIT Kanpur",
    rightsNote: "Acceso académico con múltiples traducciones y comentarios.",
  },
  {
    id: "brahma-sutras",
    title: "Brahma Sūtras con bhāṣya de Śaṅkara",
    author: "Bādarāyaṇa · comentario de Śaṅkara",
    era: "Vedanta clásico",
    date: "Sūtras ca. 200 a. C.–200 d. C. · comentario ca. siglo VIII",
    authorDates: "Bādarāyaṇa · ca. siglo I a. C.; Śaṅkara · ca. siglo VIII",
    category: "prasthanatrayi",
    summary:
      "Aforismos que sistematizan la enseñanza de las Upaniṣads, acompañados por el comentario central de Śaṅkara para la tradición Advaita.",
    language: "Sánscrito, hindi e inglés",
    access: "Texto y comentario",
    url: "https://www.gitasupersite.iitk.ac.in/bs_home",
    source: "Gita Supersite · IIT Kanpur",
    rightsNote: "Consulta académica en línea.",
  },
  {
    id: "vivekachudamani",
    title: "Vivekacūḍāmaṇi",
    originalTitle: "La joya suprema del discernimiento",
    author: "Atribuido tradicionalmente a Śaṅkara",
    era: "Advaita clásico",
    date: "Fecha discutida · probablemente posterior al siglo VIII",
    authorDates: "Śaṅkara · ca. siglo VIII; atribución de esta obra debatida",
    category: "advaita-classic",
    summary:
      "Manual pedagógico sobre discernimiento, cualificaciones del estudiante, maestro, ātman, ignorancia y liberación.",
    language: "Inglés",
    access: "Lectura de dominio público",
    url: "https://en.wikisource.org/wiki/Vivekachudamani_%28Swami_Madhavananda%29",
    source: "Wikisource · traducción de 1921",
    rightsNote:
      "La traducción es de dominio público; la transcripción comunitaria puede estar incompleta.",
  },
  {
    id: "upadesasahasri",
    title: "Upadeśasāhasrī",
    originalTitle: "Mil enseñanzas",
    author: "Śaṅkara",
    era: "Advaita clásico · ca. siglo VIII",
    date: "ca. siglo VIII d. C.",
    authorDates: "Śaṅkara · ca. siglo VIII",
    category: "advaita-classic",
    summary:
      "Obra independiente de Śaṅkara que expone el método de enseñanza no dual mediante prosa y versos.",
    language: "Sánscrito",
    access: "Texto original",
    url: "https://sanskritdocuments.org/doc_z_misc_shankara/upadeshasaahasrii1.pdf",
    source: "Sanskrit Documents",
    rightsNote: "PDF externo del texto sánscrito; no incluye traducción al español.",
  },
  {
    id: "ashtavakra-gita",
    title: "Aṣṭāvakra Gītā",
    author: "Autor tradicional desconocido",
    era: "Advaita posclásico",
    date: "ca. siglos VIII–XIV · estimación debatida",
    category: "advaita-classic",
    summary:
      "Diálogo radical sobre libertad, conciencia y desapego entre el sabio Aṣṭāvakra y el rey Janaka.",
    language: "Inglés",
    access: "Lectura de dominio público",
    url: "https://en.wikisource.org/wiki/Ashtavakra_Gita",
    source: "Wikisource",
    rightsNote: "Edición comunitaria de una traducción de dominio público.",
  },
  {
    id: "avadhuta-gita",
    title: "Avadhūta Gītā",
    author: "Atribuida a Dattātreya",
    era: "Advaita posclásico",
    date: "ca. siglos IX–X · estimación aproximada",
    authorDates: "Dattātreya · figura tradicional; atribución no verificable históricamente",
    category: "advaita-classic",
    summary:
      "Canto no dual que presenta la identidad libre e indivisible del ser más allá de las categorías mentales.",
    language: "Inglés",
    access: "Lectura de dominio público",
    url: "https://en.wikisource.org/wiki/Translation%3AAvadhuta_Gita/Chapter_1",
    source: "Wikisource",
    rightsNote: "La navegación del lector permite continuar por los capítulos disponibles.",
  },
  {
    id: "panchadasi",
    title: "Pañcadaśī",
    author: "Vidyāraṇya",
    era: "Advaita posclásico · ca. siglo XIV",
    date: "ca. siglo XIV d. C.",
    authorDates: "Vidyāraṇya · ca. 1296–1386",
    category: "advaita-classic",
    summary:
      "Quince capítulos de exposición sistemática sobre discernimiento, conciencia, realidad, dicha y liberación.",
    language: "Sánscrito",
    access: "Texto original y recursos",
    url: "https://sanskritdocuments.org/itrans/vidyaranya/",
    source: "Sanskrit Documents",
    rightsNote: "Índice externo de textos; verificar cada edición antes de citarla.",
  },
  {
    id: "drg-drsya-viveka",
    title: "Dṛg-Dṛśya-Viveka",
    originalTitle: "Discernimiento entre el observador y lo observado",
    author: "Atribución tradicional discutida",
    era: "Advaita posclásico",
    date: "ca. siglo XIV · atribución y fecha discutidas",
    category: "advaita-classic",
    summary:
      "Texto breve para investigar la diferencia entre aquello que conoce y todo lo que aparece como objeto conocido.",
    language: "Inglés",
    access: "Vista previa legal",
    url: "https://books.google.com/books/about/Drig_Drisya_Viveka.html?id=5vylDwAAQBAJ",
    source: "Google Books",
    rightsNote: "La disponibilidad de páginas depende de la región y del editor.",
  },
  {
    id: "vivekananda-complete-works",
    title: "Obras completas de Swami Vivekananda",
    originalTitle: "The Complete Works of Swami Vivekananda",
    author: "Swami Vivekananda",
    era: "Siglos XIX–XX",
    date: "Conferencias y escritos · 1890–1902",
    authorDates: "Swami Vivekananda · 1863–1902",
    category: "modern",
    summary:
      "Conferencias, escritos y conversaciones que llevaron el Vedanta a un público global y marcaron su transmisión moderna.",
    language: "Inglés",
    access: "Lectura de dominio público",
    url: "https://en.wikisource.org/wiki/The_Complete_Works_of_Swami_Vivekananda",
    source: "Wikisource",
    rightsNote: "Edición comunitaria de obras de dominio público.",
  },
  {
    id: "vedanta-principiantes",
    title: "Vedanta para principiantes",
    author: "Swami Sivananda",
    era: "Siglo XX",
    date: "Primera mitad del siglo XX",
    authorDates: "Swami Sivananda · 1887–1963",
    category: "modern",
    summary:
      "Introducción progresiva en español a los conceptos, prácticas y finalidad del Vedanta.",
    language: "Español",
    access: "Lectura completa oficial",
    url: "https://www.dlshq.org/spanish/vedanta_para_principiantes_sp.htm",
    source: "The Divine Life Society",
    rightsNote: "Lectura enlazada desde la versión web oficial; no se redistribuye el contenido.",
  },
  {
    id: "all-about-hinduism",
    title: "Todo sobre el hinduismo",
    originalTitle: "All About Hinduism",
    author: "Swami Sivananda",
    era: "Siglo XX",
    date: "Primera mitad del siglo XX",
    authorDates: "Swami Sivananda · 1887–1963",
    category: "modern",
    summary:
      "Panorama del Sanātana Dharma, sus escrituras, escuelas, prácticas, festividades y formas de vida.",
    language: "Inglés",
    access: "Lectura completa oficial",
    url: "https://www.dlshq.org/religions/hinduism/",
    source: "The Divine Life Society",
    rightsNote: "Lectura en el sitio oficial de la organización editora.",
  },
  {
    id: "who-am-i",
    title: "¿Quién soy yo?",
    originalTitle: "Nāṉ Yār? · Who Am I?",
    author: "Sri Ramana Maharshi",
    era: "Siglo XX",
    date: "Respuestas de 1902 · primera edición tamil de 1923",
    authorDates: "Sri Ramana Maharshi · 1879–1950",
    category: "modern",
    summary:
      "Presentación breve del método de autoindagación asociado a Ramana Maharshi.",
    language: "Inglés",
    access: "Descarga oficial",
    url: "https://www.gururamana.org/Resources/Books/Who_Am_I_English.pdf",
    source: "Sri Ramanasramam",
    rightsNote: "PDF ofrecido por el sitio oficial del ashram.",
  },
  {
    id: "talks-ramana-extract",
    title: "Conversaciones con Sri Ramana Maharshi",
    originalTitle: "Talks with Sri Ramana Maharshi · selección",
    author: "Sri Ramana Maharshi",
    era: "Siglo XX",
    date: "Conversaciones registradas entre 1935–1939",
    authorDates: "Sri Ramana Maharshi · 1879–1950",
    category: "modern",
    summary:
      "Selección oficial de diálogos sobre autoindagación, mente, silencio, entrega y realización.",
    language: "Inglés",
    access: "Extracto oficial",
    url: "https://www.gururamana.org/Resources/Books/Talks_Exract.pdf",
    source: "Sri Ramanasramam",
    rightsNote: "Es una selección autorizada, no la obra completa.",
  },
  {
    id: "gems-ramana",
    title: "Gemas de Bhagavan",
    originalTitle: "Gems from Bhagavan",
    author: "Sri Ramana Maharshi",
    era: "Siglo XX",
    date: "Enseñanzas recopiladas · primera mitad del siglo XX",
    authorDates: "Sri Ramana Maharshi · 1879–1950",
    category: "modern",
    summary:
      "Compilación breve de respuestas y enseñanzas de Ramana Maharshi organizada para una primera aproximación.",
    language: "Inglés",
    access: "Descarga oficial",
    url: "https://www.gururamana.org/Resources/Books/Gems.pdf",
    source: "Sri Ramanasramam",
    rightsNote: "PDF ofrecido por el sitio oficial del ashram.",
  },
  {
    id: "gospel-ramakrishna",
    title: "El Evangelio de Sri Ramakrishna",
    originalTitle: "The Gospel of Sri Ramakrishna",
    author: "Mahendranath Gupta · traducción de Swami Nikhilananda",
    era: "Siglos XIX–XX",
    date: "Conversaciones 1882–1886 · edición inglesa de 1942",
    authorDates: "Sri Ramakrishna · 1836–1886; Mahendranath Gupta · 1854–1932",
    category: "modern",
    summary:
      "Registro de conversaciones de Sri Ramakrishna y una fuente central para comprender el movimiento que influyó en el Vedanta moderno.",
    language: "Inglés",
    access: "Edición electrónica oficial",
    url: "https://ebooks.advaitaashrama.org/",
    source: "Advaita Ashrama",
    rightsNote: "El catálogo oficial indica si cada edición es gratuita o de compra.",
  },
  {
    id: "i-am-that",
    title: "Yo soy Eso",
    originalTitle: "I Am That",
    author: "Sri Nisargadatta Maharaj · conversaciones editadas por Maurice Frydman",
    era: "Siglo XX · publicado en 1973",
    date: "Primera edición inglesa · 1973",
    authorDates: "Nisargadatta Maharaj · 1897–1981; Maurice Frydman · 1901–1976",
    category: "contemporary",
    summary:
      "Conversaciones sobre el sentido de «yo soy», conciencia, identidad y lo absoluto. Es una referencia decisiva de la no dualidad contemporánea.",
    language: "Inglés",
    access: "Préstamo digital controlado",
    url: "https://openlibrary.org/works/OL2971595W/I_Am_That?edition=iamthattalkswith0000nisa",
    source: "Open Library",
    rightsNote:
      "Obra moderna protegida: Parabrahman no aloja copias. El enlace ofrece préstamo sujeto a disponibilidad.",
    alternativeUrl: "https://books.google.com/books/about/I_Am_that.html?id=IbYgAAAAMAAJ",
    alternativeLabel: "Ver ficha en Google Books",
  },
];

export function getLibraryCategoryLabel(category: LibraryCategory) {
  return (
    libraryCategories.find((item) => item.id === category)?.label ?? category
  );
}
