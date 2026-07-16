# Parabrahman — Escuela de Vedanta Advaita

Escuela online interactiva, gratuita y centrada en la enseñanza mediante video.

La identidad visual inicial utiliza el emblema Om dorado como marca compacta y la composición panorámica de Parabrahman como portada institucional. Los archivos originales están versionados en `public/brand/`.

## Estado

MVP audiovisual navegable. La portada dirige a un primer recorrido, existe un catálogo inicial en `/cursos`, un aula pública en `/aprender/fundamentos/bienvenida`, un panel protegido en `/mi-aprendizaje`, un foro en `/comunidad`, una Biblioteca en `/biblioteca`, un mapa histórico-tradicional en `/tradicion` y una ruta lingüística en `/sanscrito`.

La interfaz de autenticación está disponible en `/acceso`. Incluye registro, inicio de sesión y recuperación de contraseña mediante acciones del servidor, más una ruta de confirmación de correo preparada para Supabase. La portada reconoce la sesión activa y enlaza con `/cuenta`, donde cada alumno puede guardar su nombre visible y cerrar sesión.

El canal oficial [@parabrahmanyosoy](https://www.youtube.com/@parabrahmanyosoy) es la fuente audiovisual central. YouTube aloja y distribuye los videos; la plataforma aporta organización académica, contexto y seguimiento. El progreso autenticado se conserva en Supabase cuando la migración correspondiente está activa, con respaldo local durante la transición.

Las reuniones participativas tienen un espacio separado en `/encuentros`: la portada destaca la próxima sala de Zoom y el archivo mostrará las grabaciones como miniaturas cuando existan enlaces públicos verificados. Las lecciones también incluyen un cuaderno personal local para preguntas y reflexiones.

El lenguaje visual combina profundidad cósmica, luz dorada y acentos tecnológicos azules. Los movimientos se implementan con CSS, respetan `prefers-reduced-motion` y no agregan dependencias de animación al cliente.

Todas las rutas incorporan un único asistente inteligente flotante, identificado por el emblema OM y una luz verde de disponibilidad. El botón independiente de WhatsApp fue retirado para simplificar la interfaz. `NEXT_PUBLIC_WHATSAPP_NUMBER` configura el teléfono público que el agente comparte cuando una consulta requiere atención humana. El asistente actual responde un conjunto institucional explícito; las respuestas filosóficas permanecerán limitadas hasta conectar un corpus autorizado con recuperación y citas.

Cada lección puede incorporar un cuestionario con puntaje mínimo; aprobarlo registra la finalización. La primera aula también incluye preguntas y comentarios públicos con valoración de cinco estrellas. Para compartir estos aportes entre usuarios debe aplicarse la migración `supabase/migrations/202607130001_lesson_discussions.sql`.

La comunidad general ofrece temas, respuestas tipo chat y adjuntos públicos de hasta 5 MB. La lectura es libre y la participación requiere cuenta. La migración `supabase/migrations/202607150001_student_forum.sql` crea las tablas, políticas RLS y el bucket de Storage. El módulo Tradición organiza cronología, literatura, maestros, geografía y fuentes verificables, con foco en Vedanta Advaita dentro del marco plural del Sanātana Dharma. Sus períodos y textos enlazan a portales académicos u oficiales, mientras que los centros históricos ofrecen accesos separados para estudiar su contexto y abrir su ubicación cartográfica. Siete pasajes incorporan original sánscrito, IAST, lectura literal, síntesis y límites interpretativos.

El módulo Sánscrito ofrece una progresión pública desde sonido, IAST y devanāgarī hasta morfología, sandhi, compuestos y lectura guiada. Incluye una carrera automatizada de cuatro ciclos y doce clases secuenciales, con clasificación, objetivos, contenidos, evaluaciones y logros; además conserva vocabulario, mahāvākyas, tarjetas y ejercicios interactivos. El progreso de la carrera es local y no acreditado durante el MVP. El objetivo inicial es aprender a leer y analizar fuentes, no simular fluidez ni reemplazar revisión docente.

La Biblioteca reúne una selección inicial de textos del Sanātana Dharma y el Vedanta Advaita con búsqueda y filtros históricos. Cada ficha enlaza una fuente oficial, una edición de dominio público, una vista previa o un préstamo digital según los derechos disponibles. Las obras modernas protegidas no se alojan ni redistribuyen desde Parabrahman.

La Ruta de aprendizaje pública organiza cinco ciclos, quince etapas y 92 títulos de videos futuros. Los títulos funcionan como balizado editorial: solo aparecen como publicados cuando existe una lección real. El panel autenticado “Mi aprendizaje” muestra la última tarea aprobada, la etapa actual, el próximo paso y diferencia el avance sobre contenido disponible del avance sobre la ruta total. El bloque de siete centros se identifica como especialización comparativa y no reemplaza el análisis Advaita de los cuatro pādas de la Māṇḍūkya Upaniṣad.

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

## Publicación en Internet

El procedimiento del MVP está documentado en `docs/DESPLIEGUE_PUBLICO.md`. En Windows puede iniciarse con `PUBLICAR_WEB_GRATIS.cmd`, ubicado en la carpeta superior. El flujo actualiza GitHub, permite revisar la incorporación a `main` y abre la importación del proyecto en Vercel. Las variables de Supabase se cargan directamente en el proveedor y nunca se incorporan al repositorio.

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
