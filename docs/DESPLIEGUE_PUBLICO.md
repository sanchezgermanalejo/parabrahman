# Despliegue público de Parabrahman

## Objetivo

Publicar Parabrahman — Escuela de Vedanta Advaita con una URL HTTPS accesible fuera de la computadora local. Para el MVP se utiliza Vercel Hobby porque ofrece integración directa con Next.js, despliegues desde GitHub y un subdominio `vercel.app` sin costo inicial.

Ningún proveedor garantiza alojamiento gratuito perpetuo. Vercel puede modificar condiciones o pausar un proyecto cuando supera su cuota. El repositorio, Supabase y el dominio deben mantenerse desacoplados para permitir una futura migración.

## Flujo recomendado

1. Ejecutar `PUBLICAR_WEB_GRATIS.cmd` desde la carpeta principal.
2. Renovar GitHub si el asistente lo solicita y publicar la rama actual.
3. Revisar y combinar el Pull Request 1 en `main`.
4. Ingresar a Vercel con GitHub e importar `sanchezgermanalejo/parabrahman`.
5. Confirmar el preset Next.js y la rama de producción `main`.
6. Configurar únicamente las variables públicas necesarias:

```text
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
```

Los valores se copian localmente desde `.env.local`; nunca se escriben en GitHub, capturas, documentos o URLs.

7. Realizar el primer despliegue y copiar la URL de producción `https://…vercel.app`.
8. Añadir en Vercel `NEXT_PUBLIC_SITE_URL=https://…vercel.app` para Production y volver a desplegar.
9. En Supabase Auth → URL Configuration:
   - establecer **Site URL** con la URL exacta de producción;
   - conservar `http://localhost:3000/**` para desarrollo;
   - añadir `https://…vercel.app/**` como Redirect URL exacta.
10. Verificar portada, registro, confirmación de correo, recuperación, cursos, Biblioteca, Tradición y panel personal.

## Dominio propio futuro

El subdominio `vercel.app` no tiene costo. Un dominio como `parabrahman.org` debe comprarse y renovarse anualmente. Cuando exista, se conectará en Vercel y reemplazará la URL de producción en Vercel y Supabase sin modificar la arquitectura académica.

## Seguridad

- `.env.local` permanece ignorado por Git.
- La clave publicable de Supabase puede utilizarse en el navegador porque las tablas están protegidas con RLS.
- Ninguna clave secreta o `service_role` se configura con prefijo `NEXT_PUBLIC_`.
- Los despliegues deben provenir de commits revisados y reproducibles.
