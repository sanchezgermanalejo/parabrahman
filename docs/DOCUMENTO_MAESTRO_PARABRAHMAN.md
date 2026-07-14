# Documento Maestro — Parabrahman — Escuela de Vedanta Advaita

**Estado:** Documento vivo
**Versión:** 0.19
**Fecha de creación:** 12 de julio de 2026
**Responsables:** Parabrahman y socio técnico del proyecto
**Próxima revisión:** al aprobar los fundamentos del producto o cerrar el primer módulo

---

## 1. Propósito del documento

Este documento es la fuente principal de verdad del proyecto. Define por qué existe la plataforma, qué experiencia debe ofrecer, cómo se organiza académica y funcionalmente, qué decisiones técnicas la sostienen y en qué orden se construirá.

Debe actualizarse cuando:

- se apruebe, cambie o descarte una decisión importante;
- termine un módulo funcional;
- cambie el alcance de una fase;
- aparezca un riesgo o restricción relevante;
- una validación con usuarios modifique una hipótesis;
- se adopte o sustituya una tecnología central.

El código describe cómo funciona el sistema. Este documento explica por qué se construye de esa manera.

### 1.1 Identidad canónica

- **Nombre oficial:** Parabrahman
- **Subtítulo institucional:** Escuela de Vedanta Advaita
- **Presentación completa:** Parabrahman — Escuela de Vedanta Advaita
- **Sentido institucional indicado:** término sánscrito entendido como “más allá de Brahman”

Esta escritura es obligatoria en documentación, arquitectura, interfaces, metadatos, código y comunicaciones del proyecto. No se utilizarán como variantes “Para Brahmam”, “Parabrama”, “Paragonal”, “Veranta Baita” ni otras grafías. Los identificadores técnicos usarán `parabrahman` en URLs, nombres de paquetes, prefijos y símbolos en minúsculas, y `Parabrahman` en símbolos de código que utilicen PascalCase.

Si una decisión o contenido futuro contradice esta identidad, deberá señalarse antes de incorporarlo.

### 1.2 Identidad visual inicial

- **Emblema principal:** símbolo Om dorado sobre fondo cósmico oscuro, conservado en `public/brand/parabrahman-emblem.png`.
- **Portada institucional:** paisaje cósmico panorámico con el nombre Parabrahman y el lema “Tat Tvam Asi — Tú eres Eso”, conservado en `public/brand/parabrahman-hero.png`.
- **Uso del emblema:** cabeceras compactas, perfiles, miniaturas y presentación móvil.
- **Uso de la portada:** apertura institucional en pantallas medianas y grandes, metadatos sociales y piezas panorámicas.
- **Accesibilidad:** el nombre oficial y la información esencial deben existir también como texto HTML; ninguna imagen con texto será la única fuente de significado.
- **Adaptación:** se respetará la proporción de los originales y se evitarán recortes que eliminen símbolos, lemas o el nombre institucional. Las variantes optimizadas futuras deberán derivarse de estos archivos sin reemplazarlos.
- **Lenguaje de interfaz:** profundidad oscura, luz dorada vinculada a la identidad espiritual y acentos azules vinculados a la dimensión tecnológica.
- **Movimiento:** lento, ambiental y funcional; nunca debe competir con el video, la lectura o los formularios.
- **Accesibilidad del movimiento:** toda animación deberá respetar `prefers-reduced-motion`, mantener contraste y evitar destellos rápidos.
- **Rendimiento:** se priorizarán CSS y recursos locales antes que bibliotecas de animación o efectos que aumenten innecesariamente el JavaScript del cliente.

---

## 2. Misión

Facilitar el acceso libre, ordenado y sostenible al conocimiento ofrecido por Parabrahman mediante una escuela online interactiva, centrada en la enseñanza por video y capaz de conectar contenidos, docentes y estudiantes sin establecer barreras económicas de acceso.

## 3. Visión

Construir una comunidad educativa digital de referencia para Parabrahman: abierta, accesible, confiable y capaz de acompañar a cada estudiante desde su primer contacto con un tema hasta un recorrido formativo profundo.

A largo plazo, la plataforma deberá preservar y organizar el patrimonio educativo de Parabrahman, ampliar su alcance internacional y ofrecer orientación personalizada mediante un tutor de inteligencia artificial que responda a partir de materiales propios, cite sus fuentes y reconozca sus límites.

## 4. Valores

### Acceso abierto

Los contenidos educativos esenciales serán gratuitos. Donar no otorgará ventajas académicas ni bloqueará contenidos para quienes no puedan contribuir.

### Rigor y honestidad intelectual

Los materiales deberán identificar autores, fuentes, versiones y contexto. La plataforma evitará presentar opiniones, interpretaciones o respuestas de IA como certezas sin fundamento.

### Simplicidad

Cada función deberá resolver una necesidad comprobable. Se evitarán complejidad técnica y características prematuras que dificulten mantener el proyecto.

### Sostenibilidad responsable

Las donaciones serán voluntarias y transparentes. La publicidad será limitada, identificable, pertinente y no interrumpirá el aprendizaje.

### Privacidad y seguridad

Se recopilarán únicamente los datos necesarios. Los permisos se aplicarán en el servidor y en la base de datos, no solo en la interfaz.

### Accesibilidad e inclusión

La experiencia deberá funcionar en dispositivos móviles, conexiones modestas y tecnologías de asistencia. Se favorecerán transcripciones, subtítulos y formatos descargables cuando los derechos lo permitan.

### Comunidad respetuosa

Los espacios participativos tendrán reglas públicas, moderación proporcional y mecanismos de reporte y apelación.

### Evolución basada en evidencia

Las decisiones se revisarán mediante datos, pruebas y conversaciones con estudiantes y docentes, no únicamente por preferencias tecnológicas.

---

## 5. Públicos principales

1. **Visitante:** explora la institución, el catálogo y los materiales públicos.
2. **Estudiante:** se inscribe, aprende, registra su progreso y participa en la comunidad.
3. **Docente:** organiza contenidos, acompaña estudiantes y modera conversaciones de sus cursos.
4. **Editor académico:** revisa textos, metadatos, licencias y publicación.
5. **Moderador:** gestiona reportes y convivencia sin acceso innecesario a la administración.
6. **Administrador:** configura la plataforma, roles, cursos, eventos y sostenibilidad.
7. **Donante o patrocinador:** contribuye sin condicionar la independencia académica.

---

## 6. Objetivos

### Objetivos del producto

- Publicar cursos gratuitos organizados en recorridos comprensibles.
- Ofrecer el video como medio pedagógico principal y los textos como material complementario.
- Permitir que el estudiante conserve y retome su progreso.
- Reunir videos, textos, encuentros y conversaciones en una sola experiencia.
- Proporcionar herramientas editoriales que Parabrahman pueda operar sin depender de programadores.
- Construir comunidad mediante encuentros y foros moderados.
- Financiar la operación con donaciones y patrocinio no invasivo.
- Preparar los contenidos y datos para incorporar un tutor de IA confiable.

### Objetivos operativos

- Poder publicar el primer curso piloto sin infraestructura compleja.
- Mantener bajos los costos fijos durante la validación.
- Tener copias de seguridad, trazabilidad administrativa y procedimientos de recuperación.
- Medir activación, avance y finalización sin vigilancia publicitaria.
- Documentar decisiones, operación y responsabilidades.

### Indicadores iniciales propuestos

Estos indicadores son hipótesis y deberán recibir metas después del piloto:

- porcentaje de visitantes que comienzan un curso;
- porcentaje de estudiantes que completa la primera lección;
- progreso medio y tasa de finalización por curso;
- estudiantes que regresan dentro de 7 y 30 días;
- participación útil y reportes en foros;
- asistencia a reuniones programadas;
- costo mensual por estudiante activo;
- proporción de costos cubierta por donaciones y patrocinio;
- accesibilidad y rendimiento en dispositivos móviles.

---

## 7. Principios de alcance

### Lo que la plataforma será

- Un entorno educativo propio de Parabrahman.
- Una escuela online interactiva centrada principalmente en lecciones de video.
- Un catálogo público de cursos y recursos.
- Un espacio para aprendizaje asincrónico y encuentros programados.
- Una biblioteca digital con derechos y metadatos controlados.
- Una comunidad moderada.
- Una base preparada para orientación mediante IA.

### Lo que no será inicialmente

- Una red social generalista.
- Una plataforma de videoconferencia propia.
- Un alojamiento y distribuidor de video.
- Un sistema de mensajería instantánea.
- Un marketplace de cursos pagos.
- Una arquitectura de microservicios.
- Un sistema académico institucional completo con equivalencias y títulos oficiales.
- Un modelo de IA entrenado desde cero.

---

## 8. Arquitectura funcional

### Núcleo público

- Sitio institucional.
- Catálogo y buscador.
- Ficha de curso.
- Biblioteca pública.
- Calendario público configurable.
- Información sobre donaciones, patrocinadores y transparencia.

### Identidad y acceso

- Registro, ingreso y recuperación de cuenta.
- Perfil y preferencias.
- Roles y permisos.
- Consentimientos y gestión de datos personales.
- Registro de acciones administrativas relevantes.

El MVP usará Supabase Auth con correo y contraseña, confirmación de correo y sesiones SSR almacenadas en cookies. Habrá clientes separados para navegador y servidor. La renovación de tokens ocurrirá en el Proxy de Next.js, pero la autorización se comprobará nuevamente junto a cada página protegida, operación y acceso a datos. En código de servidor se verificará la identidad mediante `getClaims()` o un usuario actualizado; no se confiará en `getSession()` para autorizar.

### Aprendizaje

- Cursos, módulos y lecciones.
- Lecciones de video de YouTube como experiencia académica principal.
- Textos, archivos y enlaces como recursos complementarios.
- Inscripciones gratuitas.
- Progreso por lección, módulo y curso.
- Continuación desde el último punto.
- Evaluaciones y certificados en fases posteriores.

El canal oficial `https://www.youtube.com/@parabrahmanyosoy` es la fuente audiovisual central. YouTube conserva la responsabilidad de alojamiento, publicación y reproducción; Parabrahman organiza esos contenidos en recorridos, unidades y lecciones. El catálogo académico se mantiene separado del canal para permitir selección, secuenciación y contexto sin duplicar los videos.

Las lecciones aprobadas se registran en `lesson_progress` de Supabase para alumnos autenticados, después de validar el cuestionario nuevamente en el servidor. Las políticas RLS limitan cada registro a su propietario. El almacenamiento local permanece temporalmente como respaldo para visitantes y mientras se aplica la migración, pero no es la fuente académica oficial.

### Biblioteca

- Obras, autores, temas, idiomas y ediciones.
- Archivos o enlaces externos.
- Licencias y permisos de publicación.
- Búsqueda y filtros.
- Versionado y preparación futura para recuperación semántica.

### Encuentros

- Calendario por curso y general.
- Reuniones mediante enlaces de Zoom.
- Zona horaria visible.
- Recordatorios y cambios de agenda.
- Integración automática con Zoom solo si la operación manual deja de ser suficiente.

Zoom tendrá un espacio propio y visible junto al canal de YouTube. YouTube concentrará las enseñanzas unipersonales; `/encuentros` presentará reuniones en vivo, conversaciones con participantes y grabaciones anteriores mediante miniaturas. La portada destacará el próximo encuentro. Hasta disponer de enlaces reales, la interfaz mostrará un estado vacío y no inventará reuniones.

### Comunidad

- Foros asociados a cursos.
- Temas y respuestas.
- Reglas, reportes y moderación.
- Notificaciones controlables.
- Sin chat privado durante las primeras fases.

La primera lección incorpora una conversación pública con comentarios o preguntas, autor visible y valoración obligatoria de una a cinco estrellas. La lectura es pública y la publicación requiere una cuenta autenticada. La tabla `lesson_discussions` aplica RLS para impedir publicaciones en nombre de otra persona. Antes de ampliar el acceso deberán incorporarse reporte, moderación y límites de frecuencia.

### Evaluación y aprobación

- Cada lección publicada deberá definir un cuestionario breve y un puntaje mínimo.
- La finalización no se otorgará mediante un botón manual: se registrará al aprobar el cuestionario.
- Cada intento mostrará el puntaje sin revelar automáticamente una interpretación filosófica no documentada.
- Los cuestionarios de conocimiento se redactarán a partir de los objetivos y materiales reales de la lección.
- El resultado local del MVP se migrará a Supabase junto con el progreso académico.

### Sostenibilidad

- Donaciones puntuales y, posteriormente, recurrentes.
- Confirmaciones e historial administrativo.
- Transparencia sobre uso de fondos.
- Patrocinios directos, claramente rotulados y sin interrupciones.
- Métricas agregadas; sin perfilado conductual para publicidad.

### Administración

- Gestión editorial de cursos, lecciones y biblioteca.
- Gestión de usuarios y roles.
- Moderación.
- Agenda de eventos.
- Donaciones y campañas de patrocinio.
- Informes operativos.

### Tutor de IA futuro

- Ingesta controlada de materiales autorizados.
- División, indexación y versionado de fragmentos.
- Recuperación de contexto relevante (RAG).
- Respuestas con citas al material original.
- Declaración explícita cuando no existe evidencia suficiente.
- Reporte y revisión humana de respuestas problemáticas.
- Separación de corpus según permisos.

La interfaz flotante del asistente se incorpora antes que el motor de conocimiento para validar lenguaje, preguntas frecuentes y ubicación. En esta etapa solo responde información institucional explícita y declara su límite ante consultas filosóficas. No se presentará como tutor entrenado hasta disponer de materiales autorizados, evaluación y citas verificables.

El orden de implementación será: inventario de fuentes, permisos, extracción, fragmentos versionados, índices semánticos, recuperación, generación limitada al contexto, citas, evaluación humana y despliegue gradual. Se mantendrá separada la orientación institucional de la interpretación filosófica.

### Atención y consultas

- Botón flotante de WhatsApp disponible en todas las rutas.
- Número público configurado mediante variable de entorno, nunca fijado en componentes.
- Mensaje inicial institucional y apertura en una pestaña externa.
- Estado informativo cuando el número todavía no está configurado.
- Ningún número privado, clave, token o historial de conversación se guardará en GitHub.

---

## 9. Recorrido principal del alumno

1. Descubre un curso desde el catálogo o un enlace externo.
2. Consulta descripción, objetivos, programa, docente y dedicación estimada.
3. Explora una muestra antes de crear una cuenta, cuando sea apropiado.
4. Se registra e inscribe gratuitamente.
5. Accede al panel personal y comienza o retoma el curso.
6. Recorre módulos y lecciones con video, texto y recursos.
7. Marca o registra automáticamente el avance según el tipo de actividad.
8. Consulta materiales relacionados en la biblioteca.
9. Participa opcionalmente en el foro y en encuentros por Zoom.
10. Recibe recordatorios configurables, no intrusivos.
11. Completa el recorrido y obtiene reconocimiento cuando esa función exista.
12. Puede continuar con un curso relacionado, donar o compartir el proyecto.

### Principios de la experiencia

- El registro no debe bloquear innecesariamente el descubrimiento.
- El botón para continuar debe ser evidente.
- El progreso debe ser comprensible, pero no convertirse en presión artificial.
- La donación debe aparecer en momentos naturales y nunca impedir estudiar.
- La publicidad no debe insertarse dentro del contenido académico.
- El alumno debe controlar sus notificaciones y datos.

---

## 10. Estructura académica

```text
Área o línea de estudio
└── Curso
    ├── Información académica
    ├── Módulo
    │   └── Lección
    │       ├── Contenido principal
    │       ├── Video opcional
    │       ├── Recursos
    │       └── Actividad opcional
    ├── Encuentros
    └── Foro
```

### Curso

Debe definir título, descripción, imagen, objetivos, destinatarios, requisitos, docentes, temario, dedicación estimada, estado editorial y criterios de finalización.

### Módulo

Agrupa lecciones alrededor de un objetivo parcial y mantiene un orden recomendado.

### Lección

Es la unidad mínima de avance. Puede contener contenido enriquecido, video, documentos, enlaces y una actividad. Debe tener un objetivo claro y una estimación de duración.

### Recurso bibliográfico

Debe registrar título, autoría, edición, fecha, idioma, tema, descripción, procedencia, licencia, titular de derechos y condiciones de acceso.

### Criterio editorial

Estados mínimos: borrador, en revisión, publicado y archivado. Publicar y modificar contenidos sensibles deberá quedar registrado.

---

## 11. Arquitectura técnica propuesta

### Estilo: monolito modular

Una aplicación desplegable, dividida internamente por dominios: identidad, aprendizaje, biblioteca, comunidad, calendario, sostenibilidad y administración.

**Por qué se recomienda:** minimiza infraestructura, coordinación y costo operativo durante los primeros años, sin impedir una separación posterior.

**Alternativa considerada:** microservicios. Se descartan inicialmente porque añadirían comunicación distribuida, despliegues independientes y observabilidad antes de existir una necesidad real.

**Cuándo revisar:** cuando un dominio necesite escalar o desplegarse independientemente, tenga un equipo propio o comprometa la estabilidad del resto. El procesamiento de IA es el primer candidato a separarse.

### Aplicación: Next.js con TypeScript

**Por qué se recomienda:** permite construir interfaz, páginas públicas indexables y operaciones de servidor dentro de un solo proyecto. TypeScript reduce errores de integración mediante tipos compartidos.

**Desventajas:** exige disciplina para no mezclar interfaz, reglas de negocio y acceso a datos. El framework evoluciona con rapidez y requiere mantenimiento periódico.

**Alternativas:** una API separada con React, o un framework backend tradicional. Serían razonables con equipos especializados o múltiples clientes desde el inicio, condiciones que aún no están confirmadas.

La base del MVP se creó con Next.js 16.2.10, React 19.2.4 y Node.js 24 LTS. El proyecto declara explícitamente la versión principal de Node para evitar diferencias silenciosas entre desarrollo, integración continua y producción.

### Datos: PostgreSQL mediante Supabase

**Por qué se recomienda:** el dominio tiene relaciones claras entre usuarios, cursos, lecciones, inscripciones, progreso y permisos. PostgreSQL ofrece consistencia y capacidad de consulta; Supabase reduce el trabajo inicial de autenticación, almacenamiento y operación.

**Desventajas:** crea dependencia operativa parcial del proveedor y exige diseñar correctamente políticas de seguridad por fila. Deberán mantenerse migraciones SQL portables y exportaciones verificadas.

**Condición de revisión:** límites de costo, requisitos regulatorios o necesidad de operación propia.

### Video: YouTube embebido

**Por qué se recomienda:** evita asumir costos y complejidad de procesamiento, almacenamiento y distribución de video.

**Desventajas:** dependencia de disponibilidad, políticas, privacidad y experiencia visual de YouTube.

**Evolución:** comenzar con reproducción embebida y finalización manual; usar eventos del reproductor únicamente cuando exista una necesidad pedagógica validada.

### Reuniones: enlaces de Zoom

**Por qué se recomienda:** un evento con enlace, fecha y zona horaria cubre el caso inicial sin credenciales ni sincronización compleja.

**Desventaja:** creación y actualización manual.

**Condición de integración:** volumen de eventos suficiente para que los errores o el tiempo administrativo justifiquen conectar la API.

### Archivos: almacenamiento de objetos

Los archivos se guardarán fuera de la base de datos; PostgreSQL conservará metadatos, permisos y referencias.

**Por qué:** los objetos grandes tienen necesidades distintas de respaldo y distribución. Los permisos de acceso deberán reflejar las licencias de cada material.

### Despliegue inicial

- Aplicación en un servicio administrado compatible con Next.js.
- PostgreSQL, autenticación y objetos en Supabase.
- Entornos separados de desarrollo, pruebas y producción.
- Integración continua, migraciones y copias de seguridad verificadas.

No se fijará un proveedor de aplicación definitivamente hasta comparar costo, límites, localización de datos y facilidad de salida.

### Tutor de IA: RAG antes que entrenamiento

**Por qué se recomienda:** recuperar fragmentos autorizados y proporcionarlos al modelo permite actualizar materiales, ofrecer citas y controlar mejor el conocimiento utilizado. Entrenar un modelo desde cero sería costoso y no resolvería por sí mismo la trazabilidad.

**Riesgos:** respuestas incorrectas, citas deficientes, filtración de materiales restringidos, costos variables y dependencia del proveedor del modelo.

**Prerequisitos:** corpus con permisos, textos limpios, versiones, evaluaciones de respuesta, política de privacidad y revisión humana.

---

## 12. Seguridad, privacidad y calidad

- Aplicar mínimo privilegio y permisos por rol.
- Proteger datos mediante políticas de base de datos y operaciones de servidor.
- No almacenar secretos en el código.
- Registrar cambios administrativos relevantes.
- Limitar intentos, spam y automatizaciones abusivas.
- Mantener copias de seguridad y ensayar restauraciones.
- Permitir exportación, corrección y eliminación de datos personales según corresponda.
- Evitar analítica invasiva y datos innecesarios.
- Diseñar conforme a estándares actuales de accesibilidad web.
- Probar al menos autenticación, permisos, publicación y progreso.
- Definir tiempos de respuesta ante incidentes y reportes de comunidad.

La normativa aplicable deberá revisarse según los países de operación, residencia de usuarios, medios de pago y ubicación de datos.

---

## 13. Fases del proyecto

### Fase 0 — Fundamentos y validación

- Aprobar misión, públicos, alcance y métricas.
- Comparar desarrollo propio con adaptación de un LMS existente.
- Inventariar materiales y derechos.
- Seleccionar un curso piloto.
- Probar recorridos mediante prototipos.
- Aprobar arquitectura y modelo operativo.

**Salida:** fundamentos aprobados, curso piloto preparado y decisiones centrales registradas.

### Fase 1 — Núcleo educativo

- Sitio y catálogo.
- Identidad y permisos.
- Cursos, módulos y lecciones.
- YouTube y recursos.
- Inscripción y progreso.
- Panel del estudiante.
- Administración editorial mínima.

**Salida:** un estudiante puede descubrir, comenzar, retomar y completar un curso piloto.

### Fase 2 — Biblioteca

- Catálogo bibliográfico.
- Metadatos y licencias.
- Búsqueda, filtros y acceso controlado.
- Relación entre recursos y cursos.

**Salida:** biblioteca operable y jurídicamente trazable.

### Fase 3 — Encuentros y comunidad

- Calendario y Zoom.
- Recordatorios.
- Foros, reportes y moderación.
- Notificaciones configurables.

**Salida:** comunidad educativa asincrónica y encuentros programados.

### Fase 4 — Sostenibilidad

- Donaciones puntuales y recurrentes si son viables.
- Transparencia e informes.
- Patrocinios directos no invasivos.
- Métricas agregadas.

**Salida:** mecanismos de financiación operativos sin limitar el acceso académico.

### Fase 5 — Profundización académica

- Evaluaciones.
- Reconocimientos o certificados.
- Notas, favoritos y búsqueda mejorada.
- Informes para docentes.
- Mejoras basadas en evidencia del uso real.

### Fase 6 — Tutor de IA

- Pipeline documental.
- Índice semántico y permisos.
- Tutor con citas.
- Evaluaciones automáticas y humanas.
- Piloto limitado antes del acceso general.

---

## 14. Criterio de finalización de un módulo

Un módulo no se considera terminado solo porque el código funcione. Debe cumplir:

- alcance y casos de uso aceptados;
- permisos y tratamiento de errores probados;
- interfaz usable en móvil y escritorio;
- accesibilidad básica verificada;
- pruebas proporcionales al riesgo;
- migraciones y operación documentadas;
- métricas mínimas definidas;
- revisión de privacidad y seguridad;
- documento maestro y decisiones actualizados;
- aceptación funcional por parte de Parabrahman.

---

## 15. Gobierno de decisiones

Cada decisión importante se documentará con:

1. contexto y problema;
2. opciones reales consideradas;
3. recomendación;
4. razones;
5. ventajas y desventajas;
6. costo y complejidad;
7. riesgos y mitigaciones;
8. condición que obligaría a revisarla;
9. fecha y estado: propuesta, aceptada, reemplazada o descartada.

Las decisiones arquitectónicas detalladas podrán vivir como ADR individuales. Este documento conservará su síntesis y enlaces.

### Sincronización obligatoria con GitHub

Un cambio de código, configuración, arquitectura o documentación no se considera terminado hasta que:

1. el documento maestro y los ADR afectados estén actualizados;
2. las validaciones proporcionales al cambio hayan pasado;
3. se haya comprobado que no se incluyen secretos ni archivos locales;
4. exista un commit descriptivo;
5. el commit esté publicado en GitHub en la rama correspondiente;
6. el PR asociado refleje el alcance y las validaciones realizadas.

GitHub es el respaldo colaborativo y el registro de evolución del proyecto. Los secretos, archivos `.env.local`, dependencias instaladas, compilaciones y credenciales permanecen fuera del repositorio.

### Decisiones actualmente recomendadas, aún por ratificar

| ID | Decisión | Estado |
|---|---|---|
| DM-001 | Plataforma propia frente a LMS existente | Pendiente de comparación |
| DM-002 | Monolito modular como arquitectura inicial | Aceptada |
| DM-003 | Next.js y TypeScript para la aplicación | Aceptada |
| DM-004 | PostgreSQL y Supabase para datos y servicios iniciales | Aceptada |
| DM-005 | YouTube embebido para video | Aceptada |
| DM-006 | Enlaces de Zoom antes de integrar su API | Recomendada |
| DM-007 | Patrocinio directo antes que red publicitaria conductual | Recomendada |
| DM-008 | RAG antes que entrenamiento propio para el tutor | Recomendada |
| DM-009 | Identidad “Parabrahman — Escuela de Vedanta Advaita” | Aceptada |
| DM-010 | Escuela online interactiva centrada en video | Aceptada |
| DM-011 | Node.js 24 LTS como runtime reproducible del MVP | Aceptada |
| DM-012 | Contenido público sin registro; cuenta requerida para funciones personales | Aceptada |
| DM-013 | Supabase Auth con correo/contraseña, cookies SSR y verificación cercana a los datos | Aceptada |
| DM-014 | Emblema Om dorado y portada cósmica como identidad visual inicial | Aceptada |
| DM-015 | Formularios de acceso con acciones del servidor, validación en servidor y confirmación PKCE | Aceptada |
| DM-016 | Recuperación de contraseña mediante PKCE y respuesta que no revela cuentas registradas | Aceptada |
| DM-017 | Nombre visible del MVP en metadatos autenticados; perfil académico futuro en tabla `profiles` con RLS | Aceptada |
| DM-018 | Canal `@parabrahmanyosoy` como fuente audiovisual central y catálogo académico desacoplado | Aceptada |
| DM-019 | Progreso local como respaldo temporal, no como fuente académica oficial | Reemplazada por DM-028 |
| DM-020 | Uso exclusivo de “escuela” en producto y documentación | Aceptada |
| DM-021 | Zoom separado de YouTube: reuniones y conversaciones en `/encuentros`, con acceso externo en el MVP | Aceptada |
| DM-022 | Profundidad espiritual-tecnológica mediante CSS, movimiento reducido accesible y cero dependencia visual adicional | Aceptada |
| DM-023 | WhatsApp global configurado por variable pública y sin credenciales en código | Aceptada |
| DM-024 | Asistente institucional limitado ahora; tutor filosófico futuro mediante RAG, fuentes citadas y evaluación humana | Aceptada |
| DM-025 | Comentarios y preguntas de lectura pública, publicación autenticada, cinco estrellas y RLS | Aceptada |
| DM-026 | Una lección se completa únicamente al aprobar su cuestionario mínimo | Aceptada |
| DM-027 | Accesos de soporte identificados mediante isotipo de WhatsApp y un robot amable con auriculares en SVG local | Aceptada |
| DM-028 | Progreso autenticado en Supabase con RLS y validación del cuestionario en servidor | Aceptada |

---

## 16. Riesgos iniciales

| Riesgo | Impacto | Respuesta inicial |
|---|---|---|
| Construir demasiadas funciones antes de validar | Alto | Curso piloto y entregas verticales pequeñas |
| Falta de capacidad editorial | Alto | Flujo de borrador, revisión y publicación sencillo |
| Derechos insuficientes sobre textos | Alto | Inventario y registro de licencias antes de publicar |
| Costos crecientes de proveedores | Medio/alto | Presupuestos, alertas y portabilidad de datos |
| Spam o conflictos comunitarios | Medio/alto | Moderación, reportes y límites desde el lanzamiento del foro |
| Baja continuidad del alumno | Alto | Medir primera lección, retorno y causas de abandono |
| Dependencia de YouTube, Zoom o Supabase | Medio | Capas de integración simples y planes de salida documentados |
| Respuestas incorrectas del tutor | Alto | Citas, límites, evaluaciones y despliegue gradual |
| Datos sensibles expuestos | Alto | Mínimo privilegio, pruebas de permisos y respuesta a incidentes |

---

## 17. Preguntas abiertas

- ¿Qué enseña exactamente Parabrahman y cuál es su audiencia prioritaria?
- ¿En qué países espera operar durante los primeros dos años?
- ¿Qué curso será el piloto y quién será su responsable académico?
- ¿Qué materiales existen y cuáles pueden redistribuirse legalmente?
- ¿Cuántos estudiantes, docentes y eventos se esperan el primer año?
- ¿Quién administrará contenidos, soporte, moderación y finanzas?
- ¿Se necesitan certificados? En caso afirmativo, ¿qué valor institucional tendrán?
- ¿Qué idiomas y requisitos de accesibilidad son prioritarios?
- ¿Qué medios de donación son viables para la entidad jurídica responsable de Parabrahman?
- ¿Qué presupuesto mensual y capacidad técnica existen?
- ¿Qué datos pueden utilizarse para el futuro tutor de IA?

---

## 18. Próximo hito

Completar la primera unidad audiovisual con datos editoriales reales:

1. seleccionar el primer video o lista de reproducción del canal oficial;
2. registrar título, objetivo, duración y orden académico sin inventar metadatos;
3. aplicar la migración `lesson_progress` en Supabase y verificar la sincronización entre dos dispositivos;
4. probar registro, acceso, perfil, recuperación, reproducción y avance de extremo a extremo;
5. incorporar el enlace, horario y primeras grabaciones reales de Zoom;
6. configurar el número institucional de WhatsApp;
7. inventariar y autorizar el primer corpus del tutor;
8. aplicar la migración de comunidad y probar dos usuarios reales;
9. renovar la autorización de GitHub, publicar los commits pendientes y actualizar el PR.

Después se incorporará la administración editorial mínima para actualizar el catálogo sin modificar código.

---

## 19. Historial de cambios

| Versión | Fecha | Cambio | Motivo |
|---|---|---|---|
| 0.19 | 13-07-2026 | Progreso persistente con Supabase, RLS, corrección en servidor y respaldo local | Permitir continuidad entre dispositivos sin obligar al visitante a registrarse ni confiar en una puntuación calculada por el navegador |
| 0.18 | 13-07-2026 | El asistente adopta la imagen de un robot amable con auriculares y micrófono | Comunicar de inmediato inteligencia digital y atención al público sin confundirlo con una figura docente humana |
| 0.17 | 13-07-2026 | Identidad visual específica para los accesos flotantes de WhatsApp y asistente | Mejorar el reconocimiento inmediato, la claridad funcional y la nitidez sin agregar imágenes remotas ni dependencias |
| 0.16 | 13-07-2026 | Comunidad pública con estrellas, permisos RLS y aprobación mediante cuestionario | Convertir cada lección en una experiencia verificable y participativa sin permitir publicaciones anónimas o progreso manual |
| 0.15 | 13-07-2026 | Botones flotantes de WhatsApp y asistente institucional, con límites explícitos y plan RAG | Habilitar consultas desde toda la escuela sin presentar respuestas filosóficas no verificadas como conocimiento |
| 0.14 | 13-07-2026 | Sistema visual con profundidad, resplandor, movimiento ambiental y adaptación a movimiento reducido | Comunicar una escuela virtual profesional sin perjudicar concentración, accesibilidad o rendimiento |
| 0.13 | 13-07-2026 | Se consolida “escuela”, se crea el espacio Zoom y se amplían las rutas con cuaderno personal | Reforzar la identidad institucional y diferenciar enseñanzas unipersonales de encuentros con personas |
| 0.12 | 13-07-2026 | Primera experiencia audiovisual: navegación, catálogo, aula, canal oficial, panel y progreso local | Convertir la base técnica en un recorrido educativo visible sin inventar metadatos del canal ni introducir una integración prematura |
| 0.11 | 13-07-2026 | La portada reconoce la sesión y se incorpora un perfil mínimo para el nombre visible del alumno | Evitar que una persona autenticada siga viendo “Acceder” y permitir completar cuentas existentes sin datos simulados |
| 0.10 | 13-07-2026 | Recuperación y actualización segura de contraseña preparadas mediante PKCE | Completar el ciclo mínimo de identidad antes de construir el panel del alumno |
| 0.9 | 13-07-2026 | Interfaz real de registro e ingreso, validación del lado servidor y callback de confirmación preparados | Construir autenticación segura sin introducir usuarios simulados ni exponer credenciales |
| 0.8 | 13-07-2026 | Incorporación del emblema principal, la portada institucional y sus reglas de uso | Mantener una identidad visual consistente, adaptable y accesible desde el inicio |
| 0.7 | 12-07-2026 | Política obligatoria de sincronización con GitHub y actualización del próximo hito | Mantener código, arquitectura y documentación respaldados y trazables en cada entrega |
| 0.6 | 12-07-2026 | Preparación técnica de Supabase Auth y política de verificación de sesiones | Establecer una base segura antes de construir formularios y rutas protegidas |
| 0.5 | 12-07-2026 | Aprobación y creación de la base técnica del MVP | Fijar arquitectura, runtime y política de acceso público antes de implementar funciones |
| 0.4 | 12-07-2026 | Confirmación de identidad y orientación pedagógica centrada en video | Alinear el producto con la experiencia universitaria online definida |
| 0.3 | 12-07-2026 | Corrección del nombre oficial a “Parabrahman” | Respetar la grafía unida y el significado institucional del término sánscrito |
| 0.2 | 12-07-2026 | Primera definición de identidad y reglas de nomenclatura | Versión reemplazada posteriormente por la corrección de la versión 0.3 |
| 0.1 | 12-07-2026 | Creación del documento maestro | Establecer visión, alcance, arquitectura y gobierno inicial |
