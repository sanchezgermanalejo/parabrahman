# ADR-012 — Netlify Free sin tarjeta

- **Estado:** Aceptada para el MVP
- **Fecha:** 16 de julio de 2026
- **Proyecto:** Parabrahman — Escuela de Vedanta Advaita

## Contexto

La plataforma necesita una URL pública HTTPS compatible con Next.js App Router, renderizado del servidor, Server Actions, cookies y Supabase Auth. El propietario requiere que el proveedor no solicite tarjeta ni pueda originar pagos automáticos.

## Decisión

El alojamiento público inicial se realizará en Netlify Free mediante un subdominio `netlify.app`. GitHub `main` será la fuente de producción. El plan Free conservará su límite mensual rígido y no se habilitarán tarjetas, recargas ni complementos pagos.

## Por qué

- Netlify declara su plan Free en USD 0 por mes, con créditos limitados y sin recarga automática.
- Soporta Next.js App Router, SSR, Server Actions, middleware y rutas dinámicas mediante OpenNext.
- Ofrece HTTPS, despliegues desde GitHub y una URL pública sin convertir la aplicación en una exportación estática.
- Mantiene Supabase desacoplado y permite migrar el alojamiento en el futuro.

## Límites

- Si se consumen los créditos mensuales, el sitio puede pausarse hasta el siguiente ciclo.
- La gratuidad futura depende de las condiciones del proveedor y no puede garantizarse perpetuamente.
- Un dominio propio continúa siendo opcional y normalmente requiere pago anual a un registrador.

## Alternativas descartadas

- **Vercel:** técnicamente apropiado, pero presentó una prueba Pro y un flujo comercial que el propietario decidió no aceptar.
- **Render Free:** admite Next.js como servicio web, pero duerme tras 15 minutos de inactividad y el primer acceso puede tardar cerca de un minuto.
- **Exportación estática:** rompería o complicaría autenticación SSR, Server Actions y funciones protegidas.

## Portabilidad

La aplicación conserva Next.js estándar, Supabase y variables de entorno. `netlify.toml` solo declara el comando de compilación, la salida y Node.js 24; no introduce dependencias propietarias en el código académico.
