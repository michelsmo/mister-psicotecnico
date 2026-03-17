## Psicotécnicos Policía

Aplicación web para practicar tests psicotécnicos orientados a oposiciones de Policía.  
Incluye categorías, varios tests por categoría y preguntas con imágenes y explicación para estudiar.

### Requisitos

- Node.js 18 o superior
- npm (se instala con Node)

### Ejecutar en local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000` en tu navegador para ver la web.

### Estructura principal

- `src/app/page.tsx`: página de inicio con hero estilo Apple y llamada a la acción a categorías.
- `src/app/categorias/page.tsx`: lista de categorías disponibles.
- `src/app/categorias/[categoriaSlug]/page.tsx`: detalle de una categoría y lista de tests.
- `src/app/tests/[testSlug]/page.tsx`: pantalla para realizar un test completo y ver el resultado.
- `src/data/tests.ts`: datos estáticos de ejemplo (categorías, tests, preguntas, URLs de imágenes de ejemplo).

### Despliegue en Vercel

1. Crea un repositorio (por ejemplo en GitHub) con este proyecto.
2. Entra en Vercel y crea un nuevo proyecto importando ese repositorio.
3. Deja la configuración por defecto de Next.js.
4. Vercel construirá y publicará automáticamente la web.

Después, podrás actualizar los tests e imágenes editando `src/data/tests.ts` y haciendo un nuevo commit.

### Imágenes del simulacro OMNIBUS (40 preguntas)

El test "Simulacro OMNIBUS 18-03-2023" usa imágenes por página del PDF original. Por defecto hay placeholders (imágenes mínimas). Para generar las imágenes reales a partir del PDF:

1. Instala poppler (incluye `pdftoppm`):
   - **macOS:** `brew install poppler`
   - **Linux (Ubuntu/Debian):** `sudo apt install poppler-utils`
2. Ejecuta el script:
   ```bash
   node scripts/extract-pdf-images.mjs
   ```
   El script descarga el PDF del simulacro y guarda cada página como `public/simulacro-omnibus-2023/pag-1.png`, `pag-2.png`, … `pag-9.png`. Reinicia el servidor de desarrollo para ver las nuevas imágenes.

