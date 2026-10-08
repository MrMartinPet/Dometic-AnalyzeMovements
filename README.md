# Dometic — Movements & Paths

Mobile-friendly operator movement observation and spaghetti diagrams in English, Swedish and German. The repository and public URL are unchanged.

## Set up positions

- Load an Excel list using the same **Steg / Moment**, **Step / Workstep**, or **Schritt / Arbeitsschritt** columns as Worksteps & Times (Moment-timer). The `Tabell1` worksheet is preferred, otherwise the first sheet is used. XLSX, XLS, CSV and TSV are supported.
- Imported positions start in the list, without invented coordinates. Drag a handle onto the layout or choose **Place on layout** and tap the destination.
- Drag placed points directly before starting. Type in the list to rename immediately, or double-click a point. Add and delete positions directly from the list.
- **Save list** exports an XLSX file that can also be opened in Worksteps & Times.
- Enter actual layout dimensions, or upload a PNG/JPG/WebP plan and calibrate it using a known reference distance.

## Observe

Start observation and tap the first position, then each next position on arrival. Add bends for aisles around obstacles. There is no **Next cycle** button. Finish whenever the observation is complete; an optional minute target is a reminder and never automatically stops the measurement. Enter the total number of observed cycles afterwards only if per-cycle values are needed.

The observation timer uses elapsed wall-clock time, including phone sleep, and excludes explicit pauses. Positions and scale are locked during an observation to preserve distances.

### Walking time and steps

- Steps are estimated from distance / step length unless counted steps are entered for a movement. There is no phone pedometer or GPS measurement.
- For **measured walking time**, tap **Start walking** when the operator departs and tap the next position on arrival. Explicit pauses are excluded. Timing is optional and can also be entered in seconds in the movement log.
- Trips without measured walking time use distance / configured walking speed. Cards and reports explicitly label measured, estimated or mixed walking time. Time between ordinary position taps is never assumed to be walking time.
- If walking time exceeds observation time, no misleading percentage is shown; the app asks the observer to check inputs.
- Distances follow the drawn path. Straight lines do not automatically avoid obstacles.

## Results and exports

Six primary cards show observation duration, distance, steps, movements, walking time and walking share. Completed observations also show visited positions, average distance/steps per movement, longest movement, steps per observation minute, unique routes and route/position rankings. Optional cycle totals add per-cycle summaries for the whole observation.

PDF export uses the A4 landscape standard of 20 Cycle Check and Worksteps & Times: navy header, blue accents, KPI cards, diagram, frequent routes and clearly stated measurement methods. Additional pages contain every movement, with wrapped names and repeated headers. CSV, diagram SVG and portable project JSON exports remain available.

Data is stored in the browser. Export a JSON project to back up or transfer it. Older version 1 projects are migrated without discarding visits. Imported running projects resume paused.

## Hosting and checks

Static HTML/CSS/JavaScript on GitHub Pages. XLSX 0.18.5 and jsPDF 2.5.1 are loaded from jsDelivr, matching the existing companion apps.

The browser regression suite requires Playwright and Chromium, with the app served at localhost:8076. Run `node tests/app.test.cjs` with Playwright on `NODE_PATH`. Optional environment variables: `APP_URL`, `CHROME_PATH`, `STEP_FILE`, `QA_OUTPUT`, `QA_LIBS`. The latter can point to local copies of the two CDN scripts for deterministic offline tests. Outputs should be stored outside the published repository.

Checks cover actual list import/export, immediate naming, double-click, mouse/touch placement, timers/pauses, measured vs estimated walking time, cycle totals, data migration, overrides, aisle bends, languages, PDF/CSV/JSON export and mobile overflow. PDF pages are also rendered and visually inspected.
