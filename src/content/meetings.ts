export type ZoomMeeting = {
  id: string;
  title: string;
  description: string;
  startsAt: string;
  joinUrl: string;
};

export type ZoomRecording = {
  id: string;
  title: string;
  description: string;
  recordedAt: string;
  duration?: string;
  speaker?: string;
  thumbnailUrl?: string;
  watchUrl: string;
};

// Se completará con el enlace público que entregue la institución.
// Nunca guardar aquí claves de anfitrión, contraseñas de cuenta ni secretos API.
export const nextZoomMeeting: ZoomMeeting | null = null;

// Catálogo editorial explícito: no se crean reuniones o grabaciones ficticias.
export const zoomRecordings: ZoomRecording[] = [];
