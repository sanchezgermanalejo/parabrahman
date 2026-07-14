export const youtubeChannel = {
  handle: "@parabrahmanyosoy",
  name: "Parabrahman Yo Soy",
  url: "https://www.youtube.com/@parabrahmanyosoy",
  uploadsEmbedUrl:
    "https://www.youtube-nocookie.com/embed?listType=user_uploads&list=parabrahmanyosoy",
} as const;

export const academyCourse = {
  slug: "fundamentos",
  title: "Fundamentos de Vedanta Advaita",
  eyebrow: "Recorrido inicial",
  description:
    "Una puerta de entrada ordenada a las enseñanzas audiovisuales de Parabrahman.",
  lessons: [
    {
      id: "bienvenida",
      order: 1,
      title: "Bienvenida al recorrido",
      description:
        "Conoce cómo estudiar con el canal oficial como centro de la experiencia.",
      duration: "A tu ritmo",
      href: "/aprender/fundamentos/bienvenida",
      available: true,
      quiz: {
        passingScore: 2,
        questions: [
          {
            id: "video-source",
            prompt: "¿Cuál es la fuente principal de las enseñanzas audiovisuales unipersonales?",
            options: ["El canal oficial de YouTube", "La sala de Zoom", "Los comentarios públicos"],
            correctOption: 0,
          },
          {
            id: "zoom-purpose",
            prompt: "¿Qué encontrarás principalmente en el apartado Zoom?",
            options: ["Reuniones y conversaciones", "Contraseñas privadas", "Contenido de pago obligatorio"],
            correctOption: 0,
          },
          {
            id: "free-access",
            prompt: "¿Es obligatorio crear una cuenta para explorar las enseñanzas?",
            options: ["Sí, siempre", "No; la cuenta sirve para funciones personales", "Solo si se realiza una donación"],
            correctOption: 1,
          },
        ],
      },
    },
    {
      id: "yo-soy",
      order: 2,
      title: "El sentido de «Yo Soy»",
      description:
        "Próxima unidad: selección y secuencia de enseñanzas del canal.",
      duration: "Próximamente",
      href: youtubeChannel.url,
      available: false,
    },
    {
      id: "tat-tvam-asi",
      order: 3,
      title: "Tat Tvam Asi",
      description:
        "Próxima unidad: profundización audiovisual en «Tú eres Eso».",
      duration: "Próximamente",
      href: youtubeChannel.url,
      available: false,
    },
  ],
} as const;

export const availableLessonIds = academyCourse.lessons
  .filter((lesson) => lesson.available)
  .map((lesson) => lesson.id);

export const learningPaths = [
  {
    id: "fundamentos",
    order: 1,
    title: "Fundamentos de Vedanta Advaita",
    description:
      "Orientación inicial para comprender cómo estudiar y recorrer las enseñanzas.",
    status: "available",
    href: "/aprender/fundamentos/bienvenida",
  },
  {
    id: "autoindagacion",
    order: 2,
    title: "Autoconocimiento y autoindagación",
    description:
      "Camino dedicado a la observación directa y a las preguntas centrales del autoconocimiento.",
    status: "editorial",
    href: "/cursos",
  },
  {
    id: "textos-dialogos",
    order: 3,
    title: "Textos y diálogos esenciales",
    description:
      "Recorridos audiovisuales acompañados por fuentes, referencias y materiales complementarios.",
    status: "editorial",
    href: "/cursos",
  },
] as const;
