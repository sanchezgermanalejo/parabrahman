import { permanentRedirect } from "next/navigation";

export default async function LearningDashboardPage() {
  permanentRedirect("/cursos");
}
