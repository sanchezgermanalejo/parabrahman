# ADR-009 — Biblioteca digital y derechos de acceso

- **Estado:** Aceptada
- **Fecha:** 15 de julio de 2026
- **Proyecto:** Parabrahman — Escuela de Vedanta Advaita

## Contexto

La escuela necesita ofrecer un recorrido de lectura desde las fuentes del Sanātana Dharma y el Vedanta Advaita hasta autores modernos. Parte del corpus antiguo dispone de ediciones de dominio público o portales institucionales, mientras que obras contemporáneas como *I Am That / Yo soy Eso* continúan protegidas. Que un archivo exista en Internet no implica que pueda redistribuirse legalmente.

## Decisión

La ruta pública `/biblioteca` funcionará inicialmente como catálogo curado de enlaces, no como repositorio de archivos. Cada ficha declarará título, autoría, época, idioma, tipo de acceso, fuente y nota de derechos. El orden de preferencia será:

1. portal oficial del texto o de la institución editora;
2. edición legal de dominio público;
3. préstamo digital controlado;
4. vista previa o ficha de una edición autorizada.

Los archivos propios solo se alojarán cuando exista dominio público verificable o permiso de publicación registrado. Las obras modernas sin permiso se enlazarán mediante préstamo, compra, vista previa o ficha bibliográfica. Los enlaces deberán revisarse periódicamente y el catálogo se presentará como selección inicial, no como canon exhaustivo.

## Por qué

- Permite que la Biblioteca sea útil desde el MVP sin construir almacenamiento ni administración editorial prematuros.
- Reduce el riesgo de reproducir traducciones y ediciones protegidas.
- Hace visible al alumno qué puede leer completo y qué requiere préstamo o edición autorizada.
- Deja el contenido desacoplado de la interfaz y preparado para migrar a una base editorial cuando el volumen lo justifique.

## Alternativas consideradas

### Alojar todos los PDF encontrados

Descartada. Es simple técnicamente, pero confunde disponibilidad con autorización y expone al proyecto a retiradas y reclamos.

### Enviar cada obra a una búsqueda genérica

Descartada. Transfiere al alumno el problema de distinguir fuentes confiables y aumenta la probabilidad de llegar a copias no autorizadas.

### Construir ahora un gestor bibliotecario completo

Postergada. Versiones, préstamos propios, cuentas editoriales e indexación avanzada serán valiosos cuando exista un corpus autorizado y capacidad de mantenimiento comprobada.

## Consecuencias

- El catálogo inicial vive en código tipado y puede filtrarse en el navegador sin una nueva base de datos.
- La continuidad depende de fuentes externas, por lo que se requiere auditoría periódica de enlaces.
- La futura incorporación al tutor de IA será una decisión separada: que un alumno pueda leer una obra no concede permiso para procesarla o reutilizarla como corpus.
