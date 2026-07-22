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
      video: {
        youtubeId: "VbxxAhoZZx0",
        embedUrl: "https://www.youtube-nocookie.com/embed/VbxxAhoZZx0?rel=0",
        watchUrl: "https://www.youtube.com/watch?v=VbxxAhoZZx0",
      },
    },
    {
      id: "yo-soy",
      order: 2,
      title: "¿Qué es el Vedanta Advaita?",
      description:
        "Introducción audiovisual al significado, propósito y enfoque no dual del Vedanta Advaita.",
      duration: "A tu ritmo",
      href: "/aprender/fundamentos/que-es-vedanta-advaita",
      available: true,
      video: {
        youtubeId: "3HjTyOKPN6A",
        embedUrl: "https://www.youtube-nocookie.com/embed/3HjTyOKPN6A?rel=0",
        watchUrl: "https://www.youtube.com/watch?v=3HjTyOKPN6A",
      },
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
