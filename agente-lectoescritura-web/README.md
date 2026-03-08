# Agente de Lectoescritura – Sitio estático

Este paquete contiene una web estática lista para publicar y compartir fuera de la organización.

## Estructura

```
agente-lectoescritura-web/
├── index.html
├── assets/
│   ├── styles.css
│   ├── script.js
│   └── img/
│       ├── favicon.png (opcional)
│       └── og-image.png (opcional)
```

## Cómo editar

- Abre `index.html` y reemplaza los textos de ejemplo por tu contenido real del agente.
- Coloca tus documentos (PDF, DOCX, XLSX, etc.) en la carpeta `assets/` y actualiza los enlaces en la sección **Descargas**.
- Puedes cambiar colores y estilos en `assets/styles.css`.

## Cómo publicar y compartir

**Opción 1 – GitHub Pages (recomendado)**
1. Crea un repositorio en GitHub y sube esta carpeta.
2. Ve a **Settings → Pages** y selecciona la rama `main` y la carpeta raíz `/`.
3. Guarda. Tu web quedará disponible en una URL pública como `https://usuario.github.io/repositorio`.

**Opción 2 – Netlify / Vercel**
- Arrastra la carpeta al panel de Netlify o conecta tu repositorio. Es gratuito para sitios estáticos y genera una URL pública.

**Opción 3 – OneDrive/SharePoint (enlace público)**
- Sube la carpeta o un ZIP con `index.html`. Comparte con la opción «Cualquiera con el vínculo». Ten en cuenta que para que funcione como web navegable, necesitarías un hosting estático; si solo compartes archivos individuales, se abrirán como documentos descargables.

**Opción 4 – Cualquier hosting estático**
- Sube el contenido tal cual (sin renombrar `index.html`).

## Consejos

- Añade un `og-image.png` (1200×630) para mejorar la vista previa al compartir en redes.
- Comprueba que los enlaces de descargas apuntan a archivos reales dentro de `assets/` o a URLs externas accesibles sin autenticación.
- No incluyas datos personales sensibles en documentos públicos.
