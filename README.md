# Factoría Grupo Textil · sitio web

Sitio estático (HTML, CSS y JS, sin build) listo para GitHub y Vercel.

## Estructura

```
index.html            Página principal
css/styles.css        Estilos
js/main.js            WhatsApp, menú mobile, catálogo, galería
data/catalogo.js      Lista de productos (sin precios)
assets/brand/         Logos, favicon, imagen para compartir (og-image)
assets/img/           Imágenes optimizadas (WebP) de líneas y trabajos
vercel.json           Cache y headers de seguridad
img/                  Originales y lista de precios: están en .gitignore y NO se suben
```

## Cambios habituales

| Qué | Dónde |
|---|---|
| Número de WhatsApp | `js/main.js` → `WA_NUMBER`. También está en los `href` de `index.html` como respaldo y en el JSON-LD |
| Productos del catálogo | `data/catalogo.js` (las categorías y filtros se arman solas) |
| Redes | `index.html`: buscá `instagram.com` y `facebook.com` |
| Mensaje precargado de un botón | Atributo `data-wa="..."` del botón |
| Trabajos de la galería | Sección `#trabajos` de `index.html` |

Para sumar una imagen nueva, convertila a WebP de 1200 px de ancho más una versión `-sm` de 560 px y guardalas en `assets/img/`.

## Probar en local

Abrí la carpeta en VS Code y usá la extensión **Live Server**, o desde una terminal en la carpeta:

```
npx serve .
```

Las rutas empiezan con `/`, así que abrir `index.html` con doble clic no carga los estilos. Hace falta servirlo.

## Subir a GitHub (primera vez)

En PowerShell o Git Bash, dentro de `C:\proyecto\Factoria grupo textil`:

```
git init -b main
git add .
git commit -m "Sitio inicial Factoría Grupo Textil"
git remote add origin https://github.com/TU_USUARIO/factoria-grupo-textil.git
git push -u origin main
```

Antes, creá el repo vacío en GitHub (sin README).

## Desplegar en Vercel

1. vercel.com → **Add New… → Project** → importá el repo.
2. Framework Preset: **Other**. Build Command: vacío. Output Directory: vacío (raíz).
3. **Deploy**.

Cada `git push` a `main` vuelve a publicar solo.

### Dominio propio

Vercel → Project → Settings → Domains. Una vez que tengas el dominio, cambiá en `index.html` la ruta de `og:image` por la URL completa (por ejemplo `https://factoria.com.ar/assets/brand/og-image.jpg`) para que la vista previa al compartir en WhatsApp o Facebook se vea bien.
