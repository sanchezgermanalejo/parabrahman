# ADR-005 — Comunidad pública y cuestionarios

**Estado:** Aceptada  
**Fecha:** 13 de julio de 2026

## Contexto

Cada lección debe permitir participación comunitaria y verificar una comprensión mínima antes de registrar progreso. Los aportes públicos introducen riesgos de suplantación, spam y contenido inapropiado.

## Decisión

- los comentarios y preguntas publicados serán visibles para cualquier visitante;
- publicar requerirá una cuenta autenticada;
- cada aporte incluirá una valoración de una a cinco estrellas;
- Supabase aplicará RLS y asociará el aporte al usuario autenticado;
- cada lección definirá un cuestionario y un puntaje mínimo;
- solo aprobar el cuestionario marcará la lección como completada.

## Por qué se elige

- permite aprender de preguntas y reflexiones de otros estudiantes;
- mantiene baja la barrera de lectura sin permitir publicación anónima;
- evita que el alumno declare progreso sin una comprobación mínima;
- convierte cuestionarios y conversación en componentes reutilizables;
- prepara datos estructurados para moderación y analítica futuras.

## Limitaciones del MVP

- el progreso aprobado permanece en el navegador hasta migrarlo a Supabase;
- la tabla de comunidad debe aplicarse mediante la migración incluida;
- falta implementar reportes, moderación, edición y límites de frecuencia;
- la valoración expresa utilidad o experiencia, no determina verdad filosófica.

## Condición de revisión

Revisar auto-publicación si aparecen spam, conflictos o información sensible. Antes de un lanzamiento amplio deberán existir herramientas de reporte, ocultamiento y revisión administrativa.
