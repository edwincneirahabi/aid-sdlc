# Markdown Guidelines

Estas pautas establecen un formato consistente para escribir y mantener documentos en Markdown
dentro de repositorios de desarrollo de software. Su objetivo es facilitar la lectura por humanos y
la interpretación correcta por herramientas y copilotos, evitando fricciones y asegurando que la
documentación pueda servir como **infraestructura crítica** del AI-Driven SDLC.

---

## Encabezados

- Utiliza siempre encabezados **ATX** (`#`, `##`, `###`), no subrayados (`===` o `---`).
- Un único `#` (H1) por documento, al inicio.
- Deja **una línea en blanco** antes y después de cada encabezado para mejorar el renderizado y el
  diff.
- Usa títulos claros y concisos, evitando signos de puntuación innecesarios.
- En español, utiliza _sentence case_:  
  `## Instalación y configuración` (no “Instalación Y Configuración”).

---

## Párrafos y espaciado

- Separa los párrafos con **una línea en blanco**.
- No insertes espacios al final de línea.
- No uses dobles espacios para forzar salto de línea; si necesitas un salto explícito, usa `<br>`.
- Mantén un ancho máximo de línea de **100 caracteres** para mejorar la legibilidad en CLI y reducir
  diffs ruidosos.

---

## Listas

- Usa `-` para listas no ordenadas.
- Usa `1.` repetido para listas ordenadas (el renderer numerará automáticamente).
- Deja una línea en blanco antes de empezar la lista y después de terminarla.
- Indenta sublistas con 2 espacios.

Ejemplo:

```markdown
- Paso uno
- Paso dos
  - Subpaso
```

---

## Bloques de código

- Usa **fences** (```) y especifica el lenguaje para activar resaltado.
- Mantén el código válido y sin comillas “inteligentes”.
- No mezcles tabs y espacios.
- Abre y cierra correctamente el bloque, con el código en líneas separadas.

Ejemplo:

```bash
touch hello-world.c
vi hello-world.c
```

---

## Tablas

- Usa la primera fila como encabezado y separa columnas con `|`.
- No intentes alinear manualmente con espacios; deja que lo haga un formateador automático si lo
  usas.
- Mantén el contenido breve en cada celda para evitar cortes al visualizar en CLI.

Ejemplo:

```markdown
| ID  | Descripción |
| --- | ----------- |
| 1   | Item 1      |
```

---

## Enlaces e imágenes

- Usa rutas relativas dentro del repo cuando sea posible.
- Proporciona texto alternativo significativo para accesibilidad.
- Evita URLs largas en línea; utiliza enlaces con texto descriptivo.
- Para imágenes SVG (por ejemplo, diagramas Mermaid exportados), preferir SVG si se requiere
  escalabilidad; usar PNG/JPG para capturas de pantalla.

Ejemplo:

```markdown
![Diagrama del flujo de build](docs/build-flow.png)  
[Guía de contribución](CONTRIBUTING.md)
```

---

## Nombres de archivo y estructura

**Convención oficial:**

1. **Archivos raíz convencionales (MAYÚSCULAS)**  
   Usar mayúsculas para los archivos reconocidos por plataformas y herramientas:  
   `README.md`, `LICENSE`, `CONTRIBUTING.md`, `CHANGELOG.md`, `CODE_OF_CONDUCT.md`.

2. **Resto de archivos (minúsculas con guiones)**  
   Para todos los demás `.md` (documentación técnica, guías internas, contextos, specs, etc.):  
   `architecture.md`, `security.md`, `markdown-guidelines.md`.

3. **Documentos de release**  
   Si están bajo `/docs/` u otra carpeta, usar minúsculas con guiones:  
   `docs/release-notes-2025-08.md`, `docs/release-checklist.md`.

**Reglas adicionales:**

- Coloca documentos extensos en `docs/` y deja `README.md` en la raíz.
- Usa front-matter (`---`) solo si es requerido por el generador de sitio, y documenta qué campos se
  permiten.
- Todos los archivos deben guardarse en **UTF-8 sin BOM**.

---

## Estilo general

- Prefiere frases cortas y directas.
- Evita párrafos muy largos (más de 5–6 líneas).
- Usa viñetas o tablas para resumir información técnica.
- Mantén consistencia terminológica y evita mezclar idiomas en un mismo documento.
- Evita caracteres especiales, emojis o símbolos que puedan romper el renderizado o la
  compatibilidad.
- Usa enlaces internos con anclas (`[Texto](#seccion)`) en documentos largos para facilitar la
  navegación.
