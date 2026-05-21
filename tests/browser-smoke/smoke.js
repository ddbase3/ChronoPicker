import { ChronoPicker, ChronoDateTimePicker, ModularGridFilterAdapter } from '../../src/index.js';

const results = document.querySelector('#results');
const inlineFixture = document.querySelector('#inlineFixture');
const inputFixture = document.querySelector('#inputFixture');
const filterFixture = document.querySelector('#filterFixture');

function assert(condition, message) {
	if (!condition) {
		throw new Error(message);
	}
}

function report(message, passed = true) {
	const line = document.createElement('div');
	line.className = passed ? 'cp-smoke-pass' : 'cp-smoke-fail';
	line.textContent = `${passed ? 'PASS' : 'FAIL'}: ${message}`;
	results.appendChild(line);
}

try {
	let inlineValue = '';
	const inlinePicker = new ChronoPicker(inlineFixture, {
		mode: 'date',
		displayMode: 'inline',
		value: '2026-05-21',
		onChange(value) {
			inlineValue = value;
		}
	});

	inlinePicker.init();
	assert(inlineFixture.querySelector('.cp-root'), 'Inline root should render inside fixture.');
	assert(inlineFixture.querySelector('.cp-day-selected'), 'Initial date should render as selected.');
	report('inline picker renders selected date');

	inlineFixture.querySelector('[data-date="2026-05-22"]').click();
	assert(inlinePicker.getValue() === '2026-05-22', 'Date click should update picker value.');
	assert(inlineValue === '2026-05-22', 'Date click should trigger onChange.');
	report('inline day selection updates value');

	const inputPicker = new ChronoDateTimePicker(inputFixture, {
		displayMode: 'popover',
		value: '2026-05-21 09:15',
		minuteStep: 15
	});

	inputPicker.init();
	assert(inputFixture.value === '2026-05-21 09:15', 'Input should receive initial formatted value.');
	inputFixture.dispatchEvent(new Event('focus'));
	assert(document.querySelector('.cp-display-popover:not([hidden])'), 'Popover should open on focus.');
	report('input popover opens on focus');

	inputPicker.execute('setTime', {
		hour: 10,
		minute: 30
	});
	assert(inputFixture.value === '2026-05-21 10:30', 'Time change should update input value.');
	report('datetime time change updates input');

	const adapter = new ModularGridFilterAdapter();
	let filterChange = null;
	const control = adapter.createControl({
		key: 'created_from',
		label: 'Created from',
		mode: 'datetime',
		format: 'YYYY-MM-DD HH:mm'
	}, {
		onChange(payload) {
			filterChange = payload;
		}
	});

	filterFixture.appendChild(control.element);
	control.picker.execute('setValue', '2026-05-22 11:00');
	assert(filterChange && filterChange.key === 'created_from', 'Filter adapter should forward key on change.');
	assert(filterChange.value === '2026-05-22 11:00', 'Filter adapter should forward value on change.');
	report('filter adapter forwards changes');
} catch (error) {
	report(error.message, false);
	throw error;
}
