# SoundShed Explorer

Guía visual de presets y cadenas de efectos para guitarra digital. Cada preset muestra el orden de los pedales y los valores de cada bloque (ganancia, ecualización, tipo de cabina) para armar un tono sin buscar en foros.

Proyecto de la pasantía de Desarrollo Web — Instituto Santo Tomás.

## Tecnologías

- React + Vite (JavaScript)
- Bootstrap 5 (por CDN) y CSS propio en `src/index.css`
- `useState` para el modal y la navegación entre secciones

## Cómo correrlo

```
npm install
npm run dev
```

Se abre en `http://localhost:5173`. Para generar la versión de producción: `npm run build`.

## Qué hace

- **Inicio**: presentación, vista previa de presets y un modal que explica cómo leer una cadena de efectos.
- **Presets**: catálogo con tres presets (Shoegaze Fuzz, J-Rock Crunch, Clean Ambient).
- **Detalle**: cadena de efectos y tabla de parámetros de cada preset.
- **Contacto**: formulario para pedir un tono, comunidad y preguntas frecuentes.

El menú cambia de sección sin recargar la página.

## Estructura

```
src/
  App.jsx                 estado (modal y sección) y composición de la página
  index.css               estilos del proyecto
  components/
    Header.jsx            menú
    Footer.jsx            pie de página
    secciones/            Inicio, Presets, PresetCard, Detalle* y Contacto
public/img/               fotografías
```

## Créditos de las fotografías

| Uso | Autor | Fuente |
|---|---|---|
| Inicio (hero) | Abraham Osorio | [Unsplash](https://unsplash.com/photos/xDJN2VQA3tw) |
| Shoegaze Fuzz | Clint Patterson | [Unsplash](https://unsplash.com/photos/unknown-person-playing-guitar-yFO-YLFUnP8) |
| J-Rock Crunch | Vlad Fonsark | [Pexels](https://www.pexels.com/photo/man-using-a-guitar-on-stage-5201330/) |
| Clean Ambient | alfie narisma | [Pexels](https://www.pexels.com/photo/sunburst-acoustic-guitar-in-soft-light-34944601/) |
| Contacto | Cedric Fauntleroy | [Pexels](https://www.pexels.com/photo/people-watching-the-man-playing-guitar-7221432/) |

## Autor

Antonio Elías Pavés Torres — 4°C

## Licencia

GNU GPL v3 (ver `LICENSE`).
