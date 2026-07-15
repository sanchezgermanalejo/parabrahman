export const forumCategories = {
  presentaciones: "Presentaciones",
  estudio: "Estudio de las enseñanzas",
  practica: "Práctica e integración",
  encuentros: "Encuentros y Zoom",
  biblioteca: "Biblioteca y fuentes",
} as const;

export type ForumCategory = keyof typeof forumCategories;
