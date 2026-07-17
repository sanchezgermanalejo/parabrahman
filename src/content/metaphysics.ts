export type DimensionLayer = {
  id: number;
  name: string;
  plane: string;
  description: string;
  color: string;
  note: string;
  day: string;
  chakra: string;
  loka: string;
  kosha: string;
  guna: string;
  element: string;
  tattvaRelation: string;
};

export const dimensionLayers: readonly DimensionLayer[] = [
  {
    id: 1,
    name: "Material",
    plane: "Forma, densidad y soporte",
    description: "La experiencia de la materia organizada: cuerpo físico, estructura, límite, estabilidad y transformación de las formas.",
    color: "Rojo",
    note: "Do",
    day: "Lunes",
    chakra: "Mūlādhāra · raíz",
    loka: "Bhū-loka",
    kosha: "Annamaya-kośa",
    guna: "Predominio pedagógico de tamas",
    element: "Tierra · pṛthivī",
    tattvaRelation: "Cinco mahābhūtas o elementos densos",
  },
  {
    id: 2,
    name: "Vital o vegetal",
    plane: "Vida, nutrición y crecimiento",
    description: "La potencia vital que anima, nutre, reproduce y orienta los procesos orgánicos hacia el crecimiento.",
    color: "Naranja",
    note: "Re",
    day: "Martes",
    chakra: "Svādhiṣṭhāna · sacro",
    loka: "Bhuvar-loka",
    kosha: "Prāṇamaya-kośa",
    guna: "Tamas en transición hacia rajas",
    element: "Agua · ap",
    tattvaRelation: "Funciones vitales y órganos de acción",
  },
  {
    id: 3,
    name: "Animal",
    plane: "Sensación, impulso y movimiento",
    description: "La vida sensible que percibe, desea, reacciona, busca y evita; aquí emerge una organización activa de la experiencia.",
    color: "Amarillo",
    note: "Mi",
    day: "Miércoles",
    chakra: "Maṇipūra · plexo solar",
    loka: "Svar-loka",
    kosha: "Manomaya-kośa",
    guna: "Predominio pedagógico de rajas",
    element: "Fuego · tejas",
    tattvaRelation: "Sentidos, acción y mente coordinadora",
  },
  {
    id: 4,
    name: "Plano astral",
    plane: "Imagen, emoción y mundo sutil",
    description: "El campo simbólico y afectivo de la mente sutil: imágenes, memoria, imaginación, vínculos y significados vividos.",
    color: "Verde",
    note: "Fa",
    day: "Jueves",
    chakra: "Anāhata · corazón",
    loka: "Mahar-loka",
    kosha: "Manomaya hacia Vijñānamaya",
    guna: "Rajas orientado hacia sattva",
    element: "Aire · vāyu",
    tattvaRelation: "Tanmatras, sentidos y organización mental",
  },
  {
    id: 5,
    name: "Alma o cuerpo causal",
    plane: "Causa, identidad profunda y latencia",
    description: "El nivel causal del individuo, donde se consideran las semillas de experiencia y la raíz no manifiesta de la identidad personal.",
    color: "Azul",
    note: "Sol",
    day: "Viernes",
    chakra: "Viśuddha · garganta",
    loka: "Jana-loka",
    kosha: "Ānandamaya-kośa",
    guna: "Predominio pedagógico de sattva",
    element: "Espacio · ākāśa",
    tattvaRelation: "Buddhi, ahaṃkāra y causalidad individual",
  },
  {
    id: 6,
    name: "Ser autoiluminoso · Ātman",
    plane: "Presencia consciente",
    description: "El reconocimiento del Ser que no necesita otra luz para ser conocido y que ilumina toda experiencia sin convertirse en objeto.",
    color: "Índigo",
    note: "La",
    day: "Sábado",
    chakra: "Ājñā · entrecejo",
    loka: "Tapa-loka",
    kosha: "Testigo de las cinco kośas",
    guna: "Dirección hacia guṇātīta",
    element: "Más allá de los cinco elementos",
    tattvaRelation: "Discernimiento de Puruṣa respecto de Prakṛti",
  },
  {
    id: 7,
    name: "Brahman",
    plane: "Consciencia impersonal",
    description: "La realidad no dual, ilimitada e impersonal: no un estrato espacial más, sino el fundamento que hace posible todos los niveles del mapa.",
    color: "Violeta",
    note: "Si",
    day: "Domingo",
    chakra: "Sahasrāra · corona",
    loka: "Satya-loka",
    kosha: "No condicionado por ninguna kośa",
    guna: "Nirguṇa · no condicionado por guṇas",
    element: "Fundamento no elemental",
    tattvaRelation: "El mapa de tattvas es contemplado dentro de la Consciencia",
  },
] as const;

export const sankhyaTattvaGroups = [
  { count: 1, label: "Prakṛti", detail: "Naturaleza primordial" },
  { count: 1, label: "Mahat · buddhi", detail: "Intelecto y determinación" },
  { count: 1, label: "Ahaṃkāra", detail: "Principio de individuación" },
  { count: 1, label: "Manas", detail: "Mente coordinadora" },
  { count: 5, label: "Jñānendriyas", detail: "Potencias de conocimiento" },
  { count: 5, label: "Karmendriyas", detail: "Potencias de acción" },
  { count: 5, label: "Tanmātras", detail: "Potenciales sutiles" },
  { count: 5, label: "Mahābhūtas", detail: "Elementos densos" },
  { count: 1, label: "Puruṣa", detail: "Principio consciente" },
] as const;

