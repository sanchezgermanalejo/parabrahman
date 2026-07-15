# ADR-008 — Sánscrito orientado a la lectura vedántica

**Estado:** Aceptada
**Fecha:** 15 de julio de 2026

## Contexto

La comprensión del Vedanta Advaita se beneficia del acceso progresivo a sus términos y fuentes en sánscrito. Un glosario aislado puede producir memorización superficial, mientras que un curso general de conversación no prioriza las estructuras necesarias para leer Upaniṣads, Bhagavad Gītā y comentarios.

## Decisión

Parabrahman incorpora `/sanscrito` como ruta pública y gratuita orientada a la lectura. La secuencia será: sonido e IAST, devanāgarī, uso de diccionario, morfología nominal, verbos, sandhi, compuestos, sintaxis y lectura guiada de textos vedánticos. La página combina contenido servido estáticamente con una isla cliente limitada para tarjetas y evaluación inmediata.

La progresión se implementa como un trayecto automatizado de cuatro ciclos y doce clases secuenciales. Cada clase declara clasificación, duración orientativa, objetivo, contenidos, logro verificable y una comprobación conceptual que desbloquea la siguiente. Los logros de ciclo describen avance interno, no créditos, títulos ni certificaciones oficiales. Durante el MVP el progreso se conserva en el navegador; una etapa posterior lo moverá a Supabase y validará evaluaciones en servidor cuando el contenido haya recibido revisión especializada.

Los mahāvākyas y términos se presentan con escritura, transliteración, significado inicial y contexto. La traducción no se considera sustituto del análisis lingüístico ni de la enseñanza tradicional. El audio se incorporará únicamente con pronunciación humana revisada; no se usará voz sintética como autoridad fonética.

## Razones

- alinea la lengua con el propósito académico de la escuela;
- crea valor práctico desde el primer nivel sin prometer dominio completo;
- mantiene casi toda la página como componente servidor y limita JavaScript al laboratorio interactivo;
- prepara ejercicios, progreso y lecturas futuras sin agregar otra plataforma;
- permite distinguir forma de diccionario, forma flexionada, sandhi y traducción interpretativa.
- hace visible qué capacidad demuestra cada clase y evita confundir tiempo consumido con aprendizaje aprobado;
- conserva una arquitectura simple mientras se valida el programa antes de diseñar certificaciones o tablas académicas permanentes.

## Consecuencias

El módulo inicial no reemplaza un docente de fonética o gramática y necesita revisión de un sanscritista antes de certificar aprendizajes. La evaluación cliente comprueba conceptos introductorios, pero no es resistente a manipulación y no tiene valor académico formal. Las próximas versiones requerirán audio revisado, ejercicios de escritura, paradigmas, corrección persistente en Supabase, validación de servidor y textos con permisos claros.

## Revisión

Revisar después de probar el módulo con estudiantes principiantes y antes de publicar la primera lectura completa o cualquier evaluación certificable.
