# ADR-010 — Ruta curricular y avance personal

- **Estado:** Aceptada
- **Fecha:** 16 de julio de 2026
- **Última actualización:** 20 de julio de 2026
- **Proyecto:** Parabrahman — Escuela de Vedanta Advaita

## Contexto

La escuela necesita dos perspectivas distintas: un mapa largo y público que oriente la producción audiovisual futura, y una vista personal que permita a cada alumno retomar exactamente donde estaba. El prototipo anterior mostraba tres unidades y calculaba progreso solo sobre la única lección publicada; no expresaba el alcance académico ni destacaba la actividad más reciente.

Además, algunos temas solicitados —tattvas, tres guṇas, antaḥkaraṇa, chakras y estados de conciencia— pertenecen a marcos con relaciones y enumeraciones diferentes. Fusionarlos sin explicar su procedencia produciría una ruta aparentemente ordenada pero doctrinalmente engañosa.

## Decisión

1. `/cursos` será el mapa curricular público de largo recorrido.
2. `/cursos` integrará también la perspectiva personal autenticada con etapa actual, próxima tarea, última tarea aprobada y fecha, evitando una navegación duplicada.
3. El currículo inicial tendrá cinco ciclos, quince etapas y exactamente siete lecciones por etapa: 105 títulos definidos como datos tipados y desacoplados de las páginas.
4. Cada lección tendrá estado `planned` o `published`; solo una lección con material y ruta real podrá presentarse como disponible.
5. El panel mostrará dos porcentajes: finalización del contenido publicado y posición dentro del mapa total. Así no mostrará 100 % de toda la escuela cuando solo se haya completado todo lo que existe hoy.
6. La última actividad se resolverá desde `lesson_progress`, ordenada por `updated_at`, sin duplicar progreso en otra tabla.
7. El análisis Advaita de Māṇḍūkya conservará vigilia, sueño, sueño profundo y Turīya. El modelo de siete chakras y niveles será una especialización comparativa de Parabrahman con advertencia visible y revisión académica pendiente.
8. Las listas de tattvas declararán explícitamente que varían entre escuelas.
9. El catálogo validará al ejecutarse que cada etapa conserve exactamente siete lecciones; una edición incompleta deberá fallar de forma visible antes de publicarse.

## Por qué

- Permite producir videos gradualmente sin rediseñar la navegación cada vez.
- Da al alumno continuidad inmediata después de iniciar sesión.
- Separa disponibilidad real de planificación editorial.
- Evita porcentajes engañosos y protege la trazabilidad del avance.
- Integra la visión pedagógica de Parabrahman sin atribuir al Advaita clásico equivalencias que no son universales.

## Alternativas consideradas

### Un único porcentaje de progreso

Descartada. Con contenido todavía en producción, sería 100 % sobre lo publicado o casi 0 % sobre el mapa total; ninguna cifra aislada explica bien ambas realidades.

### Crear una tabla adicional de “última lección”

Descartada para el MVP. `lesson_progress.updated_at` ya permite derivar la última actividad y evita estados contradictorios.

### Presentar chakras, dimensiones y estados como una sola doctrina Advaita

Descartada. Puede ser una síntesis propia útil, pero debe identificarse como comparación y no como consenso textual del Advaita de Śaṅkara.

## Consecuencias

- Los 105 títulos son un balizado editorial sujeto a revisión, no 105 lecciones ya producidas.
- La estructura regular de siete lecciones por etapa facilita la orientación y la gamificación, pero no obliga a que todos los videos tengan igual duración o dificultad.
- Al publicar un video se deberá actualizar su estado, enlace, objetivo, actividad y metadatos reales.
- Cuando varias rutas estén activas, el modelo deberá añadir inscripción o selección de ruta sin reemplazar el historial existente.
