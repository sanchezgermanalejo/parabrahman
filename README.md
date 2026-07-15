# Parabrahman — Escuela de Vedanta Advaita

Escuela online interactiva, gratuita y centrada en la enseñanza mediante video.

La identidad visual inicial utiliza el emblema Om dorado como marca compacta y la composición panorámica de Parabrahman como portada institucional. Los archivos originales están versionados en `public/brand/`.

## Estado

MVP audiovisual navegable. La portada dirige a un primer recorrido, existe un catálogo inicial en `/cursos`, un aula pública en `/aprender/fundamentos/bienvenida`, un panel protegido en `/mi-aprendizaje`, un foro en `/comunidad`, un mapa histórico-tradicional en `/tradicion` y una ruta lingüística en `/sanscrito`.

La interfaz de autenticación está disponible en `/acceso`. Incluye registro, inicio de sesión y recuperación de contraseña mediante acciones del servidor, más una ruta de confirmación de correo preparada para Supabase. La portada reconoce la sesión activa y enlaza con `/cuenta`, donde cada alumno puede guardar su nombre visible y cerrar sesión.

El canal oficial [@parabrahmanyosoy](https://www.youtube.com/@parabrahmanyosoy) es la fuente audiovisual central. YouTube aloja y distribuye los videos; la plataforma aporta organización académica, contexto y seguimiento. El progreso autenticado se conserva en Supabase cuando la migración correspondiente está activa, con respaldo local durante la transición.

Las reuniones participativas tienen un espacio separado en `/encuentros`: la portada destaca la próxima sala de Zoom y el archivo mostrará las grabaciones como miniaturas cuando existan enlaces públicos verificados. Las lecciones también incluyen un cuaderno personal local para preguntas y reflexiones.

El lenguaje visual combina profundidad cósmica, luz dorada y acentos tecnológicos azules. Los movimientos se implementan con CSS, respetan `prefers-reduced-motion` y no agregan dependencias de animación al cliente.

Todas las rutas incorporan un único asistente inteligente flotante, identificado por el emblema OM y una luz verde de disponibilidad. El botón independiente de WhatsApp fue retirado para simplificar la interfaz. `NEXT_PUBLIC_WHATSAPP_NUMBER` configura el teléfono público que el agente comparte cuando una consulta requiere atención humana. El asistente actual responde un conjunto institucional explícito; las respuestas filosóficas permanecerán limitadas hasta conectar un corpus autorizado con recuperación y citas.

Cada lección puede incorporar un cuestionario con puntaje mínimo; aprobarlo registra la finalización. La primera aula también incluye preguntas y comentarios públicos con valoración de cinco estrellas. Para compartir estos aportes entre usuarios debe aplicarse la migración `supabase/migrations/202607130001_lesson_discussions.sql`.

La comunidad general ofrece temas, respuestas tipo chat y adjuntos públicos de hasta 5 MB. La lectura es libre y la participación requiere cuenta. La migración `supabase/migrations/202607150001_student_forum.sql` crea las tablas, políticas RLS y el bucket de Storage. El módulo Tradición organiza cronología, literatura, maestros, geografía y fuentes verificables, con foco en Vedanta Advaita dentro del marco plural del Sanātana Dharma.

El módulo Sánscrito ofrece una progresión pública desde sonido, IAST y devanāgarī hasta morfología, sandhi, compuestos y lectura guiada. Incluye vocabulario de Vedanta Advaita, mahāvākyas, tarjetas y ejercicios interactivos. El objetivo inicial es aprender a leer y analizar fuentes, no simular fluidez ni reemplazar revisión docente.

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
