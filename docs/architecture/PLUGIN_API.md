# ChronoPicker Plugin API

This file defines the plugin model.

## Plugin purpose

A plugin adds optional behavior without forcing feature logic into the core.

## Plugin shape

A plugin is an object with a unique `name`.

```javascript
export const ExamplePlugin = {
	name: 'example',

	install(context) {},

	destroy(context) {},

	commands: {
		exampleCommand(context, payload) {}
	},

	layoutContributions(context) {
		return [
			{
				zone: 'main',
				order: 100,
				render(renderContext) {
					return document.createTextNode('Example');
				}
			}
		];
	}
};
```

## Plugin fields

### `name`

Required. Must be unique per ChronoPicker instance.

### `install(context)`

Optional. Called when the plugin is installed.

### `destroy(context)`

Optional. Called when the ChronoPicker instance is destroyed.

### `commands`

Optional object of command handlers.

Handlers receive `(context, payload)`.

### `layoutContributions(context)`

Optional. Returns layout contributions for known zones.

Current supported zones:

- `main`
- `footer`

## Plugin context

The context exposes:

- `picker`
- `store`
- `events`
- `commands`
- `getState()`
- `setState(patch)`
- `execute(commandName, payload)`
- `requestRender()`
- `getOptions()`
- `getPluginOptions(pluginName)`

Plugins should use this context instead of reaching into unrelated internals.

## Current plugins

### DatePickerPlugin

Renders the month grid and selectable day buttons.

### DateTimePlugin

Renders hour and minute selects for datetime mode.

### KeyboardPlugin

Currently closes open popovers with Escape.

### StoragePlugin

Persists selected state sections to localStorage.

### RangePlugin

Reserved foundation for a later patch. No UI in this baseline.

### PresetsPlugin

Reserved foundation for a later patch. No UI in this baseline.

### MarkedDaysPlugin

Reserved foundation for a later patch. No UI in this baseline.

## Recommended plugin boundaries

A plugin should own one coherent feature area.

Good future plugin candidates:

- range selection
- quick presets
- marked days
- disabled day rules
- calendar weeks
- localization
- timezone display
- keyboard navigation
- accessible roving focus
