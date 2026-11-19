# Orbit Kanban

Tablero Kanban en React para organizar tareas en **Por hacer**, **En progreso** y **Completado**. Incluye creación, edición, eliminación, cambio de estado por menú o arrastrando tarjetas, búsqueda, filtro por prioridad y guardado local en el navegador.

## Desarrollo local

```bash
npm install
npm run dev
```

## Pruebas y build

```bash
npm test
npm run build
```

GitHub Actions ejecuta instalación reproducible (`npm ci`), Vitest y build de producción en cada push a `main` y pull request dirigido a `main`.

## Publicación

Importa el repositorio en Vercel. La configuración de Vite detecta `npm run build` y `dist`; los despliegues automáticos se activan al vincular GitHub.

## Flujo de contribución

1. Crea una rama desde `main`.
2. Implementa y confirma la mejora.
3. Abre un pull request hacia `main` y revisa el check **CI** antes de fusionar.
