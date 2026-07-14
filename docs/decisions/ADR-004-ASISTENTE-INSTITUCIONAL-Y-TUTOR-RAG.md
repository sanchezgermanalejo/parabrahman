# ADR-004 — Asistente institucional y tutor con RAG

**Estado:** Aceptada  
**Fecha:** 13 de julio de 2026

## Contexto

La escuela necesita responder dudas institucionales y, en el futuro, acompañar consultas sobre Vedanta Advaita, filosofía y metafísica. Una interfaz conversacional puede ser útil, pero un modelo sin fuentes controladas podría inventar respuestas o mezclar interpretaciones incompatibles.

## Decisión

Se implementan dos niveles:

1. un asistente institucional inmediato con respuestas explícitas y límites visibles;
2. un tutor de conocimiento futuro basado en recuperación aumentada (RAG), materiales autorizados, citas y evaluación humana.

La presencia del botón no implica que el corpus filosófico ya esté conectado. La interfaz lo comunicará claramente.

## Por qué se elige

- permite validar qué preguntan realmente los estudiantes;
- evita afirmar que el sistema fue entrenado con materiales que todavía no fueron incorporados;
- mantiene trazabilidad entre respuesta, fragmento y fuente;
- permite actualizar contenidos sin volver a entrenar un modelo completo;
- facilita separar información institucional de interpretación filosófica.

## Arquitectura prevista

```text
Material autorizado
→ extracción y versionado
→ fragmentos con metadatos
→ índice semántico
→ recuperación según la pregunta
→ respuesta limitada al contexto
→ citas y enlaces a la fuente
→ evaluación y reportes
```

## Reglas de seguridad académica

- declarar cuando no existe evidencia suficiente;
- citar materiales propios o autorizados;
- no presentar orientación espiritual personalizada como diagnóstico o certeza;
- registrar versión y procedencia del corpus;
- permitir reporte y revisión humana;
- evaluar respuestas antes de ampliar el acceso.

## Condición de revisión

Revisar el proveedor de modelos, almacenamiento vectorial y costos después de inventariar el corpus y medir volumen real de consultas. La interfaz no obliga a adoptar un proveedor específico.
