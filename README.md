# Dometic — Movements & Paths

Mobile-friendly operator movement observation and spaghetti diagram, in English, Swedish and German. Repository and URL names remain unchanged.

## Use

1. Name the workstation and add process positions on the layout.
2. On a blank layout, enter real width and height, then apply dimensions. Optionally upload a plan image (PNG/JPG/WebP) and calibrate it by selecting the endpoints of a known distance.
3. Start observation. Tap the first position and each subsequent position in walking order. Use route bends to trace aisles around obstacles.
4. Select **Next cycle** after each work cycle, and **Finish** at the end.
5. Enter measured distances or counted steps per movement when available. Export CSV for Excel, the diagram as SVG, a portable project as JSON, or print to PDF.

Distances follow the drawn path; straight lines do not automatically avoid obstacles. Steps are estimates from distance / step length unless counted steps are entered. Observation time includes work and walking. The app does not use a pedometer or GPS.

Measurements, timestamps and image data are stored locally in the browser. Export a project backup to transfer it to another device. There is no server storage or cross-device synchronisation. Exported projects resume paused.

## Hosting

Static HTML, CSS and JavaScript with no runtime dependencies. GitHub Actions publishes `main` to GitHub Pages. `configure-pages` enables Pages for the repository. The application works at a repository subpath.

## Validation

The test suite in `tests/app.test.cjs` uses jsdom (install in a temporary directory and set `NODE_PATH`). It covers routing, bend distances, completed-cycle averages, independent step and distance overrides, timer pause/reload, scale calibration, persistence, import validation, translated exports, input validation and escaping. Browser layout/print rendering should also be reviewed when adjusting CSS.
