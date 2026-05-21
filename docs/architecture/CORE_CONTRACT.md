# ChronoPicker Core Contract

This file defines what the core is responsible for and what should stay outside the core.

## Core mission

The core coordinates the ChronoPicker instance. It should remain small, stable and predictable.

## Core responsibilities

### 1. Instance lifecycle

The core owns:

- construction
- initialization
- rendering coordination
- value replacement
- destroy

### 2. Target handling

The core owns the decision whether the target is:

- inline container
- native input popover target

Native input details should stay in `NativeInputAdapter` where possible.

### 3. State coordination

The core owns:

- central instance-local state
- selected date
- formatted value
- current calendar month
- open/closed state for popovers
- parser error state

### 4. Events

The core owns:

- instance-local event bus
- lifecycle and change events
- plugin-consumable events

### 5. Commands

The core owns:

- command registry
- essential built-in commands
- command dispatching

Current built-in commands:

- `open`
- `close`
- `toggle`
- `previousMonth`
- `nextMonth`
- `setValue`
- `selectDate`
- `setTime`
- `today`
- `clear`

### 6. Parsing coordination

The core calls explicit parser and formatter utilities.

Parser and formatter rules should stay in `src/utils/parse.js` and `src/utils/format.js`.

### 7. Rendering coordination

The core renders:

- root container
- header shell
- main plugin zone
- footer plugin zone
- common actions
- parser error message

Concrete feature rendering should stay in plugins or focused components.

### 8. Plugin installation

The core owns:

- plugin installation
- plugin command registration
- plugin layout contributions
- plugin teardown

## What should not go into the core if avoidable

The core should not directly implement:

- range picker UI
- presets UI
- marked days UI
- localization registry
- calendar-week display
- timezone handling
- ModularGrid-specific filter behavior
- BASE3-specific asset handling
- custom business formats

These belong in plugins, adapters or external integration code.

## Allowed core changes

Core changes are allowed when a new stable extension point is missing.

Good examples:

- a missing lifecycle hook
- a missing plugin zone
- a missing command/event needed by multiple plugins
- a missing render context field that avoids unsafe DOM coupling

Bad examples:

- hardcoding a ModularGrid field name in the core
- adding one-off filter UI to `ChronoPicker.js`
- guessing date formats from random input

## Long-term goal

Most future growth should happen through:

- plugins
- adapters
- utilities
- focused view components
