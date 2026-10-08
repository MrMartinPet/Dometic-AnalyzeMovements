# Dometic — Analyze Movements

Mobile-friendly operator movement observation and spaghetti diagrams in English, Swedish and German. The repository and public URL are unchanged.

## Set up positions

- Load an Excel list using the same **Steg / Moment**, **Step / Workstep**, or **Schritt / Arbeitsschritt** columns as Worksteps & Times (Moment-timer). The `Tabell1` worksheet is preferred, otherwise the first sheet is used. XLSX, XLS, CSV and TSV are supported.
- Imported positions start in the list, without invented coordinates. Drag a handle onto the layout or choose **Place on layout** and tap the destination.
- Drag placed points directly before starting. Type in the list to rename immediately, or double-click a point. Add and delete positions directly from the list.
- **Save list** exports an XLSX file that can also be opened in Worksteps & Times.
- Enter actual layout dimensions, or upload a PNG/JPG/WebP plan and calibrate it using a known reference distance.

## Draw a layout

Use **Rectangle** and click two opposite corners. **Connected line** continues from each click; finish with the button or Enter. **Snap** joins existing corners and endpoints and aligns horizontal/vertical segments. **Area name** places a text label. Rename any object directly in the list, or double-click it to focus its name. Undo the latest segment/object, or delete objects from the list. Image upload remains available and drawings can be layered over it.

Drawings save immediately on this device and are included in project JSON, SVG and PDF. Layout editing is locked during observation. Older projects open with an empty drawing layer.

## Observe

Start observation and tap the first position, then each next position on arrival. Add bends for aisles around obstacles. There is no **Next cycle** button. Finish whenever the observation is complete; an optional minute target is a reminder and never automatically stops the measurement. Enter the total number of observed cycles afterwards only if per-cycle values are needed.

The observation timer uses elapsed wall-clock time, including phone sleep, and excludes explicit pauses. Positions and scale are locked during an observation to preserve distances.

### Walking time and steps

- Calibrate the layout before starting. Tap only the position the operator arrives at; there are no departure or walking-time controls.
- Walking time is always an estimate: calibrated path distance / configured walking speed. The default assumption is 1.2 m/s (about 0.83 s per metre), configurable for the observed process. Cards, logs, CSV and PDF explicitly identify the estimate. Old manually timed walks are ignored when estimating current results.
- Steps are estimated from distance / step length unless counted steps are entered afterwards. There is no phone pedometer or GPS measurement.
- If estimated walking time exceeds observation time, no misleading percentage is shown; check the calibration and speed.
- Distances follow the drawn path, including aisle bends. Straight lines do not automatically avoid obstacles.
- The language popup appears on every opening, with the previous language preselected.

## Results and exports

Six primary cards show observation duration, distance, steps, movements, walking time and walking share. Completed observations also show visited positions, average distance/steps per movement, longest movement, steps per observation minute, unique routes and route/position rankings. Optional cycle totals add per-cycle summaries for the whole observation.

PDF export uses the A4 landscape standard of 20 Cycle Check and Worksteps & Times: navy header, blue accents, KPI cards, diagram, frequent routes and clearly stated measurement methods. Additional pages contain every movement, with wrapped names and repeated headers. CSV, diagram SVG and portable project JSON exports remain available.

Data is stored in the browser. Export a JSON project to back up or transfer it. Older version 1 projects are migrated without discarding visits. Imported running projects resume paused.

## Hosting and checks

Static HTML/CSS/JavaScript on GitHub Pages. XLSX 0.18.5 and jsPDF 2.5.1 are loaded from jsDelivr, matching the existing companion apps.

The browser regression suite requires Playwright and Chromium, with the app served at localhost:8076. Run `node tests/app.test.cjs` with Playwright on `NODE_PATH`. Optional environment variables: `APP_URL`, `CHROME_PATH`, `STEP_FILE`, `QA_OUTPUT`, `QA_LIBS`. The latter can point to local copies of the two CDN scripts for deterministic offline tests. Outputs should be stored outside the published repository.

Checks cover actual list import/export, immediate naming, double-click, mouse/touch placement, timers/pauses, automatic estimated walking time, cycle totals, data migration, overrides, aisle bends, languages, PDF/CSV/JSON export and mobile overflow. PDF pages are also rendered and visually inspected.

Run `node tests/layout.test.cjs` for drawing, snapping, naming, persistence, import validation, observation locking and export checks. It uses an intercepted local app URL, so no local server is needed.
