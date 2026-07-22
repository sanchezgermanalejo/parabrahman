import { AcademyLessonPage } from "@/components/academy-lesson-page";

export const metadata = {
  title: "Bienvenida al recorrido — Parabrahman",
  description: "Primera aula audiovisual de Parabrahman.",
};

export default function WelcomeLessonPage() {
  return (
    <AcademyLessonPage
      lessonId="bienvenida"
      introduction="Esta primera aula presenta el modelo de estudio: mirar la enseñanza en el canal oficial, registrar el avance y continuar luego dentro de un recorrido académico ordenado."
      unitNote="esta lección está vinculada a su video específico del canal oficial. El reproductor utiliza el modo de privacidad mejorada de YouTube y conserva el formato académico de la ruta."
    />
  );
}
