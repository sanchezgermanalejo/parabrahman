# Supabase de Parabrahman

Las migraciones contienen cambios versionados de la base de datos. No incluyen claves ni credenciales.

## Aplicar las migraciones

1. Abrir el proyecto de Parabrahman en Supabase.
2. Entrar en **SQL Editor**.
3. Crear una consulta nueva.
4. Copiar y ejecutar, en orden, `migrations/202607130001_lesson_discussions.sql`, `migrations/202607130002_lesson_progress.sql`, `migrations/202607150001_student_forum.sql` y `migrations/202607220001_student_activity_and_video_replies.sql`.
5. Ejecutar cada consulta una sola vez.
6. Volver a la plataforma y actualizar la página.

Las migraciones habilitan Row Level Security. Cualquier visitante puede leer comentarios y temas publicados, pero solo un usuario autenticado puede publicar, responder, adjuntar archivos y conservar progreso asociado a su propia identidad. La última migración enlaza respuestas de videos y guarda únicamente la fecha en que cada alumno revisó su centro de actividad. El foro crea el bucket público `forum-attachments`; solo se aceptan PDF, TXT, JPG, PNG y WebP de hasta 5 MB, separados por carpeta de usuario.

Antes de abrir la escuela a gran escala se añadirá moderación, reporte y límites de frecuencia.
