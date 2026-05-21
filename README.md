# ChronoPicker

ChronoPicker is a standalone Vanilla JavaScript date and datetime picker.

It can be used as a permanently visible inline picker or attached to an existing text input as a popover picker, similar in usage to classic jQuery UI datepicker integrations, but without jQuery or framework dependencies.

## Current scope

This initial package is the first development patch.

It includes:

- instance-based `ChronoPicker` core
- `ChronoDatePicker` and `ChronoDateTimePicker` convenience classes
- state store
- event bus
- command registry
- plugin manager
- native input adapter
- safe ModularGrid filter adapter foundation
- date picker plugin
- datetime time-select plugin
- keyboard plugin
- storage plugin foundation
- date and datetime parsing/formatting for token formats such as `YYYY-MM-DD` and `YYYY-MM-DD HH:mm`
- inline picker demo
- input popover demo
- datetime demo
- ModularGrid filter adapter demo
- node smoke test
- browser smoke test
- project documentation and working rules

## Project structure

- `src/` core source, adapters, plugins, utilities and styles
- `demos/` manual browser demos
- `tests/` smoke coverage
- `docs/` continuation and architecture documentation

## How to run

Use any static web server from the project root.

```bash
python3 -m http.server 8000
```

Then open for example:

- `http://localhost:8000/demos/inline-date/`
- `http://localhost:8000/demos/input-popover/`
- `http://localhost:8000/demos/datetime/`
- `http://localhost:8000/demos/modulargrid-filter/`
- `http://localhost:8000/tests/browser-smoke/`

## Node smoke test

```bash
npm run smoke
```

The node smoke test covers date math, parsing, formatting and adapter behavior. Browser rendering is covered by `tests/browser-smoke/`.

## Basic inline usage

```javascript
import { ChronoPicker } from './src/index.js';

const picker = new ChronoPicker('#picker', {
	mode: 'date',
	displayMode: 'inline',
	value: '2026-05-21',
	format: 'YYYY-MM-DD',
	onChange(value, context) {
		console.log(value, context.date);
	}
});

picker.init();
```

## Input popover usage

```javascript
import { ChronoPicker } from './src/index.js';

const picker = new ChronoPicker('#createdFrom', {
	mode: 'datetime',
	displayMode: 'popover',
	format: 'YYYY-MM-DD HH:mm',
	placeholder: 'YYYY-MM-DD HH:mm'
});

picker.init();
```

## ModularGrid filter adapter note

This package includes `ModularGridFilterAdapter`, but it does not assume private ModularGrid internals. The demo under `demos/modulargrid-filter/` simulates filter control creation. A real integration should be implemented after the exact FiltersPlugin custom-control contract is provided.

## Documentation

For continuation across chats, start with:

- `docs/README.md`
- `docs/CURRENT_STATUS.md`
- `docs/WORKING_RULES.md`
- `docs/NEW_CHAT_BRIEFING.md`
- `docs/architecture/CORE_CONTRACT.md`
- `docs/architecture/PLUGIN_API.md`
- `docs/architecture/ADAPTERS.md`
- `docs/todo/FEATURE_TODO.md`

## Important design rule

ChronoPicker must remain a standalone date/time interaction module.

ModularGrid may use ChronoPicker, but ChronoPicker must not become hardwired to ModularGrid.
