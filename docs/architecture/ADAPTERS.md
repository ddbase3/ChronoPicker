# ChronoPicker Adapters

Adapters normalize external integrations before ChronoPicker interacts with them.

## Current adapters

### NativeInputAdapter

Handles native text input and textarea targets.

Responsibilities:

- determine whether an element can be input-enhanced
- prepare placeholder and autocomplete behavior
- read the current value
- write the formatted value
- bind and unbind events

### ModularGridFilterAdapter

Creates filter-control-like DOM from a field definition and wires a ChronoPicker instance to it.

This adapter intentionally does not depend on private ModularGrid APIs. It should be wired to the real ModularGrid FiltersPlugin custom-control renderer only after the exact contract is available.

## Field example

```javascript
{
	key: 'created_from',
	label: 'Created from',
	type: 'chronopicker',
	mode: 'datetime',
	format: 'YYYY-MM-DD HH:mm'
}
```

## Future adapters

Potential future adapters:

- `FormFieldAdapter`
- `RangeFilterAdapter`
- `Base3AssetAdapter`
- `ServerFormatAdapter`
- `LocaleAdapter`
