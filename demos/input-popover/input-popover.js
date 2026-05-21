import { ChronoPicker } from '../../src/index.js';

const output = document.querySelector('#output');

const picker = new ChronoPicker('#createdFrom', {
	mode: 'date',
	displayMode: 'popover',
	format: 'YYYY-MM-DD',
	onChange(value, context) {
		output.textContent = JSON.stringify({
			value,
			mode: context.mode
		}, null, 2);
	}
});

picker.init();
output.textContent = JSON.stringify({ value: picker.getValue() }, null, 2);
