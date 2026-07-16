# ADR-011 — Alojamiento público inicial

- **Estado:** Aceptada para el MVP
- **Fecha:** 16 de julio de 2026
- **Proyecto:** Parabrahman — Escuela de Vedanta Advaita

## Contexto

`localhost` solo permite navegar la plataforma desde la computadora que ejecuta Next.js. La escuela necesita una URL pública HTTPS, actualizaciones reproducibles y compatibilidad con las rutas dinámicas, cookies SSR y Supabase Auth.

## Decisión

El primer alojamiento público se realizará en Vercel mediante el plan Hobby y un subdominio `vercel.app`. GitHub será la fuente de despliegue y `main` la rama de producción. Las variables de Supabase se configurarán en Vercel, nunca en el repositorio.

## Por qué

- Es la ruta de menor complejidad para el Next.js actual.
- Proporciona HTTPS, despliegue reproducible e integración con GitHub.
- Evita convertir la aplicación SSR a un sitio estático y conservará autenticación, progreso y comunidad.
- Permite conectar un dominio propio más adelante sin reescribir el producto.

## Límites

- “Gratis y permanente” no puede garantizarse: los límites y condiciones pertenecen al proveedor.
- Hobby puede pausar el servicio al superar la cuota incluida.
- Si la escuela adquiere operación comercial, tráfico significativo o necesidades de soporte, deberá revisarse la idoneidad legal y económica del plan.
- Un dominio propio no es gratuito y tiene renovación periódica.

## Alternativas consideradas

### Cloudflare Workers con OpenNext

Posible y escalable, pero agrega una adaptación de runtime y más complejidad operativa que no aporta valor al MVP actual.

### Exportación estática

Descartada porque rompería o complicaría autenticación SSR, rutas protegidas y funciones del servidor.

### Servidor propio

Postergado por costos, mantenimiento, certificados, copias de seguridad y responsabilidad operativa.

## Portabilidad

La aplicación conservará Next.js estándar, Supabase desacoplado, variables documentadas y GitHub como fuente de verdad. El dominio público no se codificará de forma irreversible; se resolverá mediante `NEXT_PUBLIC_SITE_URL`.
