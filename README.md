# Parabrahman — Escuela de Vedanta Advaita

Universidad online interactiva, gratuita y centrada en la enseñanza mediante video.

La identidad visual inicial utiliza el emblema Om dorado como marca compacta y la composición panorámica de Parabrahman como portada institucional. Los archivos originales están versionados en `public/brand/`.

## Estado

Base técnica del MVP. Las funciones de identidad, panel del alumno y lección pública se implementarán en pasos separados y validados.

La interfaz de autenticación está disponible en `/acceso`. Incluye registro e inicio de sesión mediante acciones del servidor y una ruta de confirmación de correo preparada para Supabase. La prueba real requiere las variables locales del proyecto.

## Tecnología

- Next.js con App Router
- React y TypeScript
- Tailwind CSS
- ESLint
- Node.js 24 LTS
- Supabase Auth con sesiones SSR basadas en cookies

Se eligió un monolito modular para mantener baja la complejidad inicial y permitir que los dominios funcionales se separen en el futuro solamente cuando exista una necesidad comprobada.

## Desarrollo local

Requisitos:

- Node.js 24
- npm

En Windows, la forma más sencilla es ejecutar `INICIAR_PARABRAHMAN.cmd`, ubicado en la carpeta superior. El lanzador utiliza el runtime portátil preparado para el proyecto y abre el navegador automáticamente.

En una copia descargada desde GitHub, puedes ejecutar el `INICIAR_PARABRAHMAN.cmd` incluido en esta misma carpeta después de instalar Node.js 24 y ejecutar `npm install`.

```bash
npm install
npm run dev
```

La aplicación queda disponible en [http://localhost:3000](http://localhost:3000).

## Configuración de Supabase

1. Crear un proyecto en Supabase.
2. Copiar `.env.example` como `.env.local`.
3. Reemplazar la URL y la clave publicable con los valores del proyecto.

La clave publicable puede utilizarse en el navegador cuando las tablas están protegidas mediante Row Level Security. Las claves secretas o de servicio nunca deben usar el prefijo `NEXT_PUBLIC_` ni incorporarse al frontend.

## Verificación

```bash
npm run lint
npm run build
```

No deben guardarse claves o secretos en el repositorio. Las variables locales se incorporarán mediante `.env.local` cuando comience la integración con Supabase.

## Documentación del producto

La visión, las decisiones arquitectónicas y las fases se mantienen en `docs/DOCUMENTO_MAESTRO_PARABRAHMAN.md`.
