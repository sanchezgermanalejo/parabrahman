# Despliegue público de Parabrahman

## Objetivo

Publicar Parabrahman — Escuela de Vedanta Advaita con una URL HTTPS accesible fuera de la computadora local. Para el MVP se utiliza Netlify Free porque no exige tarjeta, posee un límite mensual rígido sin cargos automáticos, integra GitHub y soporta Next.js con App Router, SSR y Server Actions.

Ningún proveedor garantiza alojamiento gratuito perpetuo. Netlify puede modificar condiciones o pausar un proyecto cuando alcanza sus créditos mensuales. El repositorio, Supabase y el dominio deben mantenerse desacoplados para permitir una futura migración.

## Flujo recomendado

1. Ejecutar `PUBLICAR_WEB_GRATIS.cmd` desde la carpeta principal.
2. Renovar GitHub si el asistente lo solicita y publicar la rama actual.
3. Revisar y combinar el Pull Request 1 en `main`.
4. Ingresar a Netlify con GitHub, elegir **Import an existing project** e importar `sanchezgermanalejo/parabrahman`.
5. Confirmar la rama `main`, el comando `npm run build` y el directorio de publicación `.next`.
6. Configurar únicamente las variables públicas necesarias:

```text
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
```

Los valores se copian localmente desde `.env.local`; nunca se escriben en GitHub, capturas, documentos o URLs.

7. Confirmar que la cuenta permanezca en **Free**, sin tarjeta ni recargas, y realizar el primer despliegue.
8. Copiar la URL de producción `https://…netlify.app`, añadir en Netlify `NEXT_PUBLIC_SITE_URL=https://…netlify.app` y volver a desplegar.
9. En Supabase Auth → URL Configuration:
   - establecer **Site URL** con la URL exacta de producción;
   - conservar `http://localhost:3000/**` para desarrollo;
   - añadir `https://…netlify.app/**` como Redirect URL exacta.
10. Verificar portada, registro, confirmación de correo, recuperación, cursos, Biblioteca, Tradición y panel personal.

## Dominio propio futuro

El subdominio `netlify.app` no tiene costo. Un dominio como `parabrahman.org` debe comprarse y renovarse anualmente. Cuando exista, se conectará en Netlify y reemplazará la URL de producción en Netlify y Supabase sin modificar la arquitectura académica.

## Seguridad

- `.env.local` permanece ignorado por Git.
- La clave publicable de Supabase puede utilizarse en el navegador porque las tablas están protegidas con RLS.
- Ninguna clave secreta o `service_role` se configura con prefijo `NEXT_PUBLIC_`.
- Los despliegues deben provenir de commits revisados y reproducibles.
