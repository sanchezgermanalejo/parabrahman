# ADR-001 — YouTube como fuente audiovisual central

**Estado:** Aceptada  
**Fecha:** 13 de julio de 2026

## Contexto

Parabrahman ya publica sus enseñanzas en el canal oficial `@parabrahmanyosoy`. La plataforma necesita ofrecer una experiencia universitaria centrada en video sin asumir desde el MVP el costo y la complejidad de almacenar, transcodificar y distribuir archivos audiovisuales.

## Decisión

YouTube será la fuente de publicación y reproducción. La plataforma mantendrá un catálogo académico propio que referencia videos o listas del canal y aporta curso, módulo, orden, objetivos, recursos y progreso.

## Por qué se elige

- aprovecha el flujo editorial que ya existe;
- evita costos iniciales de infraestructura de video;
- conserva alcance y analítica en el canal oficial;
- permite ordenar un mismo video dentro de distintos recorridos;
- deja abierta una futura migración porque el dominio académico no depende del formato interno de YouTube.

## Alternativas descartadas por ahora

- **Alojar videos directamente:** ofrece más control, pero agrega almacenamiento, transcodificación, entrega global y costos antes de validar el producto.
- **Mostrar únicamente el canal:** es simple, pero no aporta secuencia académica, progreso ni contexto; no constituye una escuela online de autogestión.
- **Sincronización automática inmediata con la API de YouTube:** requiere credenciales, cuotas y reglas editoriales todavía no definidas. Primero se validará un catálogo pequeño y explícito.

## Consecuencias

- la disponibilidad de reproducción depende de YouTube;
- cada lección debe almacenar una referencia estable al video o lista;
- la plataforma debe ofrecer un enlace directo al canal si el reproductor falla;
- los metadatos académicos serán propios y no se inventarán a partir de títulos no verificados;
- cuando la carga editorial manual sea insuficiente, se evaluará sincronización mediante YouTube Data API o feed oficial.

## Condición de revisión

Revisar esta decisión si YouTube impide la reproducción embebida, los costos publicitarios o de privacidad dañan materialmente el aprendizaje, o Parabrahman necesita controlar distribución, acceso o preservación a largo plazo.
