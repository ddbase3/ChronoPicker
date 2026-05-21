import { ChronoDatePicker } from '../../src/index.js';

const output = document.querySelector('#output');

const picker = new ChronoDatePicker('#picker', {
	displayMode: 'inline',
	value: '2026-05-21',
	onChange(value, context) {
		output.textContent = JSON.stringify({
			value,
			iso: context.date ? context.date.toISOString() : null
		}, null, 2);
	}
});

picker.init();
output.textContent = JSON.stringify({ value: picker.getValue() }, null, 2);
