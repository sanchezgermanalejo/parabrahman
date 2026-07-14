# ADR-002 — Zoom como espacio de encuentros

**Estado:** Aceptada  
**Fecha:** 13 de julio de 2026

## Contexto

La escuela necesita distinguir las enseñanzas audiovisuales unipersonales de las reuniones en las que participan otras personas. También necesita mostrar el próximo encuentro y conservar un archivo navegable de conversaciones grabadas.

## Decisión

Zoom tendrá una sección propia en `/encuentros` y un acceso visible junto al canal de YouTube. La portada mostrará el próximo encuentro. Las grabaciones se presentarán mediante miniaturas con título, fecha, tema y enlace verificado.

Durante el MVP, el botón de participación abrirá la reunión en Zoom. No se integrará Meeting SDK hasta comprobar que abandonar momentáneamente la plataforma daña la experiencia.

## Por qué se elige

- separa con claridad clases unipersonales y conversaciones;
- permite comenzar con enlaces públicos sin credenciales API;
- funciona mejor en computadoras y dispositivos móviles;
- evita incorporar un SDK complejo antes de validar frecuencia y asistencia;
- crea un archivo editorial que más adelante puede apuntar a Zoom, YouTube u otro alojamiento.

## Seguridad

El repositorio solo podrá contener enlaces destinados a participantes. Nunca guardará contraseñas de cuenta, claves de anfitrión, tokens, secretos de API o grabaciones privadas. Los enlaces con acceso restringido deberán administrarse fuera del código.

## Condición de revisión

Evaluar Meeting SDK o automatización con la API cuando exista una agenda frecuente, el mantenimiento manual sea insuficiente y haya una política definida para privacidad, consentimiento, grabación y publicación.
