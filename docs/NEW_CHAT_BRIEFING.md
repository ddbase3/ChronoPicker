# ChronoPicker New Chat Briefing

Use the text below to brief a new chat.

---

You are working on the `ChronoPicker` project.

Please read these files first:

1. `docs/README.md`
2. `docs/CURRENT_STATUS.md`
3. `docs/WORKING_RULES.md`
4. `docs/architecture/CORE_CONTRACT.md`
5. `docs/architecture/PLUGIN_API.md`
6. `docs/architecture/ADAPTERS.md`
7. `docs/todo/FEATURE_TODO.md`

## Important project context

ChronoPicker is a standalone Vanilla JavaScript module for date and datetime interaction.

It should be usable as a permanently visible inline picker and as an input-bound popover picker. ModularGrid may use it later for date/datetime filters, but ChronoPicker must not become hardwired to ModularGrid.

## Current technical status

The project already has:

- `ChronoPicker` core instance
- `ChronoDatePicker` convenience class
- `ChronoDateTimePicker` convenience class
- event bus
- state store
- command registry
- plugin manager
- native input adapter
- simulated ModularGrid filter adapter
- date picker plugin
- datetime plugin
- keyboard plugin
- storage plugin foundation
- placeholder foundation plugins for range, presets and marked days
- browser demos
- node and browser smoke tests

## Important current design rules

- Keep the core small.
- Prefer plugins and adapters for feature growth.
- Keep parsing and formatting explicit.
- Use tab indentation.
- Use English code comments.
- Keep opening braces on the same line.
- Provide complete files.
- Do not guess missing ModularGrid APIs.

## Current task

[Replace this line with the specific next feature or goal.]

---
