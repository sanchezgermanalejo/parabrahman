# ADR-006 — Progreso persistente con Supabase

**Estado:** Aceptada  
**Fecha:** 13 de julio de 2026

## Contexto

El primer recorrido guardaba la aprobación únicamente en `localStorage`. Esto permitió validar la interfaz, pero no sincroniza dispositivos, puede perderse y no constituye un registro confiable del alumno.

## Decisión

Supabase será la fuente oficial del progreso autenticado mediante `lesson_progress`, clave compuesta por alumno y lección, y políticas RLS. El cuestionario se corrige nuevamente en una acción del servidor antes de guardar la aprobación. Durante la activación de la migración se conserva el almacenamiento local como respaldo y para visitantes sin cuenta.

## Razones

- reutiliza autenticación y PostgreSQL ya adoptados;
- impide que un alumno lea o modifique el progreso de otro;
- permite retomar el recorrido desde distintos dispositivos;
- mantiene el acceso libre sin obligar a registrarse;
- evita incorporar otro servicio o una API independiente.

## Consecuencias

La migración SQL debe aplicarse en Supabase antes de obtener sincronización real. El respaldo local no se considera fuente académica oficial y podrá retirarse después de migrar de forma segura los datos existentes.

## Revisión

Revisar cuando existan certificados, múltiples intentos evaluativos, analítica académica avanzada o requisitos de auditoría.
