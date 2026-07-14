# Supabase de Parabrahman

Las migraciones contienen cambios versionados de la base de datos. No incluyen claves ni credenciales.

## Activar comentarios y preguntas públicas

1. Abrir el proyecto de Parabrahman en Supabase.
2. Entrar en **SQL Editor**.
3. Crear una consulta nueva.
4. Copiar el contenido de `migrations/202607130001_lesson_discussions.sql`.
5. Ejecutar la consulta una sola vez.
6. Volver a la lección y actualizar la página.

La migración habilita Row Level Security: cualquier visitante puede leer aportes publicados, pero únicamente un usuario autenticado puede crear uno asociado a su propia identidad.

Antes de abrir la escuela a gran escala se añadirá moderación, reporte y límites de frecuencia.
