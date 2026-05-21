import { ChronoDateTimePicker } from '../../src/index.js';

const output = document.querySelector('#output');

const picker = new ChronoDateTimePicker('#createdAt', {
	displayMode: 'popover',
	value: '2026-05-21 14:30',
	minuteStep: 5,
	onChange(value, context) {
		output.textContent = JSON.stringify({
			value,
			iso: context.date ? context.date.toISOString() : null
		}, null, 2);
	}
});

picker.init();
output.textContent = JSON.stringify({ value: picker.getValue() }, null, 2);
