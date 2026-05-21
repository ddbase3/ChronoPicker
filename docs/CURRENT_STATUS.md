# ChronoPicker Current Status

This file describes the implemented baseline of the current patch.

## Current implementation status

The repository has a runnable Vanilla JavaScript foundation with ES modules and no build step.

### Core source

- `src/ChronoPicker.js`
- `src/ChronoDatePicker.js`
- `src/ChronoDateTimePicker.js`
- `src/index.js`

### Core classes

- `src/core/ChronoEventBus.js`
- `src/core/ChronoStateStore.js`
- `src/core/ChronoPluginManager.js`
- `src/core/ChronoCommandRegistry.js`

### Adapters

- `src/adapters/NativeInputAdapter.js`
- `src/adapters/ModularGridFilterAdapter.js`

### Plugins

- `src/plugins/DatePickerPlugin.js`
- `src/plugins/DateTimePlugin.js`
- `src/plugins/KeyboardPlugin.js`
- `src/plugins/StoragePlugin.js`
- `src/plugins/RangePlugin.js`
- `src/plugins/PresetsPlugin.js`
- `src/plugins/MarkedDaysPlugin.js`

### Utilities

- `src/utils/dateMath.js`
- `src/utils/format.js`
- `src/utils/parse.js`
- `src/utils/dom.js`

### Styles

- `src/styles/chronopicker.css`

## Current working feature set

The current baseline supports:

- creating independent ChronoPicker instances
- inline standalone rendering
- input popover rendering
- date mode
- datetime mode with hour/minute selects
- month navigation
- today and clear actions
- strict date parsing
- strict datetime parsing
- formatting with `YYYY`, `MM`, `DD`, `HH` and `mm`
- native input enhancement
- onChange callback
- instance-local events and commands
- optional localStorage persistence foundation
- simulated ModularGrid filter control adapter

## Current demos

- `demos/inline-date/`
- `demos/input-popover/`
- `demos/datetime/`
- `demos/modulargrid-filter/`

## Current smoke coverage

- `tests/node-smoke/smoke.mjs` covers date math, parsing, formatting and native input adapter behavior.
- `tests/browser-smoke/smoke.js` covers inline rendering, date selection, input popover opening, datetime updates and filter adapter changes.

## Known limits

- No range picker UI yet.
- No preset picker UI yet.
- No marked/disabled-days UI beyond min/max range checks.
- No localization system yet.
- No calendar-week column yet.
- No real ModularGrid FiltersPlugin custom-control binding yet because the exact control contract has not been provided.
- Keyboard support is currently limited to Escape closing popovers.
