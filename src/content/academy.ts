export const youtubeChannel = {
  handle: "@parabrahmanyosoy",
  name: "Parabrahman Yo Soy",
  url: "https://www.youtube.com/@parabrahmanyosoy",
  uploadsEmbedUrl:
    "https://www.youtube-nocookie.com/embed?listType=user_uploads&list=parabrahmanyosoy",
} as const;

export const academyCourse = {
  slug: "fundamentos",
  title: "Fundamentos del Vedanta Advaita",
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
      id: "pregunta-quien-soy",
      order: 3,
      title: "¿Quién soy yo?",
      description:
        "Próxima unidad: investigación directa de la identidad y la presencia consciente.",
      duration: "Próximamente",
      href: "/cursos",
      available: false,
    },
    {
      id: "presencia-yo-soy",
      order: 4,
      title: "La presencia Yo Soy",
      description:
        "Próxima unidad: reconocimiento de la presencia anterior a toda identificación.",
      duration: "Próximamente",
      href: "/cursos",
      available: false,
    },
    {
      id: "neti-neti",
      order: 5,
      title: "Neti-neti: la negación de la ilusión",
      description:
        "Próxima unidad: discernimiento por negación de aquello que no constituye el Sí Mismo.",
      duration: "Próximamente",
      href: "/cursos",
      available: false,
    },
    {
      id: "atman-verdadera-naturaleza",
      order: 6,
      title: "Atman, mi verdadera naturaleza",
      description:
        "Próxima unidad: reconocimiento del Atman como la verdadera naturaleza del Sí Mismo.",
      duration: "Próximamente",
      href: "/cursos",
      available: false,
    },
    {
      id: "autorrealizacion-si-mismo",
      order: 7,
      title: "La autorrealización del Sí Mismo",
      description:
        "Próxima unidad: integración del recorrido inicial y significado de la autorrealización.",
      duration: "Próximamente",
      href: "/cursos",
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
    title: "Fundamentos del Vedanta Advaita",
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
