# ADR-007 — Foro estudiantil y mapa de la tradición

**Estado:** Aceptada
**Fecha:** 15 de julio de 2026

## Contexto

Parabrahman necesita que los alumnos puedan conversar más allá de una lección y comprender el contexto histórico, literario y geográfico del Vedanta Advaita dentro del Sanātana Dharma. Un chat instantáneo sin moderación perdería contexto y aumentaría el riesgo operativo. Una biblioteca que pretenda abarcar toda la tradición sin distinguir fuentes, derechos y niveles doctrinales produciría una falsa sensación de exhaustividad.

## Decisión

La comunidad comienza como foro público asincrónico con temas y respuestas en forma de chat pausado. Leer no requiere cuenta; crear temas, responder y subir archivos requiere autenticación. Los adjuntos se guardan en Supabase Storage, son públicos, se restringen a PDF, TXT, JPG, PNG y WebP, y tienen un máximo de 5 MB. Las tablas y el bucket aplican RLS y separación por carpeta de usuario. Realtime, mensajería privada y notificaciones quedan fuera de este incremento.

El módulo `/tradicion` ofrece un mapa editorial desde el corpus védico hasta la transmisión contemporánea, con foco en Advaita Vedanta. Distingue Sanātana Dharma, Vedanta y Advaita; organiza cronología, familias textuales, maestros, geografía y fuentes. Las fechas debatidas se presentan como aproximaciones y la influencia moderna no se equipara automáticamente con pertenencia a un sampradāya tradicional.

Cada período y obra se enlaza con una fuente académica, institucional u oficial seleccionada. Los centros geográficos separan el enlace de contexto del enlace cartográfico: una página de estudio explica la tradición y un mapa solo localiza el lugar. Las regiones amplias o históricamente discutidas no reciben coordenadas artificialmente precisas. No se utilizan tiendas, blogs anónimos ni copias de derechos inciertos como destino principal.

## Razones

- conserva el contexto de las conversaciones y facilita moderación posterior;
- reutiliza Supabase, Auth, PostgreSQL, Storage y RLS ya adoptados;
- evita almacenar archivos binarios dentro de la base de datos;
- mantiene libre el acceso a la lectura y reserva la escritura a identidades verificables;
- ofrece profundidad histórica sin presentar una selección inicial como el Sanātana Dharma completo;
- prepara una futura biblioteca trazable y un corpus RAG con fuentes identificadas.
- permite revisar enlaces desde un catálogo central sin acoplarlos al diseño visual.

## Consecuencias

Debe aplicarse la migración `202607150001_student_forum.sql`. Antes de una apertura masiva se necesitan reporte, moderación, análisis antivirus, límites de frecuencia y política de derechos. El mapa histórico será revisado editorialmente y ampliado por etapas; los textos completos solo se incorporarán con licencia o enlace autorizado.

## Revisión

Revisar cuando la comunidad necesite presencia en tiempo real, moderadores, notificaciones, mensajes privados o archivos mayores; y cuando exista un responsable académico para validar la biblioteca histórica.
