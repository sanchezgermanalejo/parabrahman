# Parabrahman — Escuela de Vedanta Advaita

Escuela online interactiva, gratuita y centrada en la enseñanza mediante video.

La identidad visual inicial utiliza el emblema Om dorado como marca compacta y la composición panorámica de Parabrahman como portada institucional. Los archivos originales están versionados en `public/brand/`.

## Estado

MVP audiovisual navegable. La portada dirige a un primer recorrido, existe un catálogo inicial en `/cursos`, un aula pública en `/aprender/fundamentos/bienvenida` y un panel protegido en `/mi-aprendizaje`.

La interfaz de autenticación está disponible en `/acceso`. Incluye registro, inicio de sesión y recuperación de contraseña mediante acciones del servidor, más una ruta de confirmación de correo preparada para Supabase. La portada reconoce la sesión activa y enlaza con `/cuenta`, donde cada alumno puede guardar su nombre visible y cerrar sesión.

El canal oficial [@parabrahmanyosoy](https://www.youtube.com/@parabrahmanyosoy) es la fuente audiovisual central. YouTube aloja y distribuye los videos; la plataforma aporta organización académica, contexto y seguimiento. El progreso del primer incremento se conserva localmente en el navegador y se migrará a Supabase para sincronizar dispositivos.

Las reuniones participativas tienen un espacio separado en `/encuentros`: la portada destaca la próxima sala de Zoom y el archivo mostrará las grabaciones como miniaturas cuando existan enlaces públicos verificados. Las lecciones también incluyen un cuaderno personal local para preguntas y reflexiones.

El lenguaje visual combina profundidad cósmica, luz dorada y acentos tecnológicos azules. Los movimientos se implementan con CSS, respetan `prefers-reduced-motion` y no agregan dependencias de animación al cliente.

Todas las rutas incorporan un acceso flotante a WhatsApp, identificado por su isotipo, y al asistente inteligente de Parabrahman, representado por un robot amable con auriculares de atención al público. WhatsApp se activa mediante `NEXT_PUBLIC_WHATSAPP_NUMBER`. El asistente actual responde un conjunto institucional explícito; las respuestas filosóficas permanecerán limitadas hasta conectar un corpus autorizado con recuperación y citas.

Cada lección puede incorporar un cuestionario con puntaje mínimo; aprobarlo registra la finalización. La primera aula también incluye preguntas y comentarios públicos con valoración de cinco estrellas. Para compartir estos aportes entre usuarios debe aplicarse la migración `supabase/migrations/202607130001_lesson_discussions.sql`.

## Tecnología

- Next.js con App Router
- React y TypeScript
- Tailwind CSS
- ESLint
- Node.js 24 LTS
- Supabase Auth con sesiones SSR basadas en cookies

Se eligió un monolito modular para mantener baja la complejidad inicial y permitir que los dominios funcionales se separen en el futuro solamente cuando exista una necesidad comprobada.

## Desarrollo local

Requisitos:

- Node.js 24
- npm

En Windows, la forma más sencilla es ejecutar `INICIAR_PARABRAHMAN.cmd`, ubicado en la carpeta superior. El lanzador utiliza el runtime portátil preparado para el proyecto y abre el navegador automáticamente.

En una copia descargada desde GitHub, puedes ejecutar el `INICIAR_PARABRAHMAN.cmd` incluido en esta misma carpeta después de instalar Node.js 24 y ejecutar `npm install`.

```bash
npm install
npm run dev
```

La aplicación queda disponible en [http://localhost:3000](http://localhost:3000).

## Configuración de Supabase

1. Crear un proyecto en Supabase.
2. Copiar `.env.example` como `.env.local`.
3. Reemplazar la URL y la clave publicable con los valores del proyecto.

La clave publicable puede utilizarse en el navegador cuando las tablas están protegidas mediante Row Level Security. Las claves secretas o de servicio nunca deben usar el prefijo `NEXT_PUBLIC_` ni incorporarse al frontend.

## Verificación

```bash
npm run lint
npm run build
```

No deben guardarse claves o secretos en el repositorio. Las variables locales se incorporarán mediante `.env.local` cuando comience la integración con Supabase.

## Documentación del producto

La visión, las decisiones arquitectónicas y las fases se mantienen en `docs/DOCUMENTO_MAESTRO_PARABRAHMAN.md`.
