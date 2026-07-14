# Supabase de Parabrahman

Las migraciones contienen cambios versionados de la base de datos. No incluyen claves ni credenciales.

## Aplicar las migraciones

1. Abrir el proyecto de Parabrahman en Supabase.
2. Entrar en **SQL Editor**.
3. Crear una consulta nueva.
4. Copiar y ejecutar, en orden, `migrations/202607130001_lesson_discussions.sql` y `migrations/202607130002_lesson_progress.sql`.
5. Ejecutar cada consulta una sola vez.
6. Volver a la plataforma y actualizar la página.

Las migraciones habilitan Row Level Security. Cualquier visitante puede leer aportes publicados, pero solo un usuario autenticado puede publicar y conservar progreso asociado a su propia identidad.

Antes de abrir la escuela a gran escala se añadirá moderación, reporte y límites de frecuencia.
