import { AcademyLessonPage } from "@/components/academy-lesson-page";

export const metadata = {
  title: "¿Qué es el Vedanta Advaita? — Parabrahman",
  description: "Segunda aula audiovisual de la Ruta de Aprendizaje de Parabrahman.",
};

export default function WhatIsVedantaAdvaitaPage() {
  return (
    <AcademyLessonPage
      lessonId="yo-soy"
      introduction="Esta lección introduce qué significa Vedanta Advaita, cuál es su pregunta central y cómo orienta el camino progresivo del autoconocimiento."
      unitNote="el video abre el estudio sistemático de la no dualidad. Después de verlo, el cuestionario permite comprobar las ideas centrales y registrar el avance del alumno."
    />
  );
}
