# ChronoPicker Feature Todo

This file is the main feature checklist for the project.

## Legend

- `[ ]` not started
- `[~]` in progress / partially available
- `[x]` available in some usable form

---

# 1. Foundation

- [x] Create repository structure
- [x] Add `package.json`
- [x] Add central `src/index.js`
- [x] Add `ChronoPicker` instance class
- [x] Add date picker convenience class
- [x] Add datetime picker convenience class
- [x] Add event bus
- [x] Add state store
- [x] Add command registry
- [x] Add plugin manager
- [x] Add CSS baseline
- [x] Add docs baseline
- [x] Add working rules

# 2. Input and display modes

- [x] Inline standalone display
- [x] Input-bound popover display
- [x] Auto target detection for input targets
- [x] Native input adapter
- [ ] Better popover viewport collision handling
- [ ] Optional append target for popovers
- [ ] Optional readonly input mode

# 3. Date and datetime behavior

- [x] Date mode
- [x] DateTime mode
- [x] Month navigation
- [x] Today action
- [x] Clear action
- [x] Hour select
- [x] Minute select
- [x] Configurable minute step
- [ ] Month/year select controls
- [ ] Calendar week display
- [ ] Week number calculation

# 4. Parsing and formatting

- [x] Parse `YYYY-MM-DD`
- [x] Parse `YYYY-MM-DD HH:mm`
- [x] Format `YYYY-MM-DD`
- [x] Format `YYYY-MM-DD HH:mm`
- [x] Generic token-based parser for supported tokens
- [x] Strict invalid date detection
- [ ] Additional server/display format separation
- [ ] Locale-aware display formatting
- [ ] Timezone strategy

# 5. Plugins

- [x] DatePickerPlugin
- [x] DateTimePlugin
- [x] KeyboardPlugin foundation
- [~] StoragePlugin foundation
- [~] RangePlugin placeholder foundation
- [~] PresetsPlugin placeholder foundation
- [~] MarkedDaysPlugin placeholder foundation
- [ ] Real RangePlugin UI
- [ ] Real PresetsPlugin UI
- [ ] Real MarkedDaysPlugin UI
- [ ] Disabled day rule plugin
- [ ] Localization plugin

# 6. ModularGrid / BASE3 integration

- [~] Safe ModularGrid filter adapter demo
- [ ] Real ModularGrid FiltersPlugin custom-control integration
- [ ] created_from / created_to demo fixture
- [ ] Range filter adapter for from/to fields
- [ ] BASE3 asset path documentation
- [ ] ILIAS public asset path documentation

# 7. Accessibility and keyboard

- [~] Escape closes popover
- [ ] Arrow-key day navigation
- [ ] Enter selects focused day
- [ ] Roving tabindex
- [ ] ARIA refinement
- [ ] Focus trap option for popover mode

# 8. Testing and demos

- [x] Inline date demo
- [x] Input popover demo
- [x] Datetime demo
- [x] ModularGrid filter adapter demo
- [x] Node smoke test
- [x] Browser smoke test
- [ ] Browser smoke automation with Playwright or equivalent
- [ ] Storage plugin demo
- [ ] Range demo
- [ ] Presets demo

---

# Recommended next implementation order

1. Add better popover positioning and viewport collision handling.
2. Add active/focused day keyboard navigation.
3. Add month/year select controls.
4. Add real range picker support for `created_from` / `created_to` filters.
5. Add real ModularGrid FiltersPlugin integration after the required contract files are provided.
