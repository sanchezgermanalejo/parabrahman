# ADR-003 — Sistema visual espiritual y tecnológico

**Estado:** Aceptada  
**Fecha:** 13 de julio de 2026

## Contexto

Parabrahman necesita expresar profundidad espiritual y excelencia técnica sin convertir la interfaz en un espectáculo que distraiga del aprendizaje.

## Decisión

La interfaz utilizará fondos oscuros en capas, luz dorada para la identidad espiritual, azul luminoso para funciones tecnológicas y movimiento ambiental lento. Los efectos compartidos vivirán en el sistema CSS global y se aplicarán mediante clases reutilizables.

## Por qué se elige

- crea una identidad reconocible en todas las rutas;
- evita instalar una biblioteca de animación antes de necesitar interacciones complejas;
- reduce JavaScript y mantiene tiempos de carga previsibles;
- permite controlar intensidad, contraste y movimiento desde un único lugar;
- conserva la prioridad visual de videos, textos y acciones importantes.

## Reglas

- respetar siempre `prefers-reduced-motion`;
- no usar destellos rápidos, movimiento permanente de gran amplitud o efectos que dificulten leer;
- las animaciones no pueden ser necesarias para comprender una función;
- medir rendimiento antes de incorporar video de fondo, WebGL o partículas programadas;
- mantener contraste suficiente y foco visible en acciones interactivas.

## Condición de revisión

Evaluar una biblioteca especializada solamente cuando se necesiten transiciones de estado complejas que CSS no pueda resolver de forma mantenible y después de medir su impacto real.
