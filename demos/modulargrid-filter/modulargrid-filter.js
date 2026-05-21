import { ModularGridFilterAdapter } from '../../src/index.js';

const target = document.querySelector('#filters');
const output = document.querySelector('#output');
const values = {};
const adapter = new ModularGridFilterAdapter();

const fields = [
	{
		key: 'created_from',
		label: 'Created from',
		type: 'chronopicker',
		mode: 'datetime',
		format: 'YYYY-MM-DD HH:mm'
	},
	{
		key: 'created_to',
		label: 'Created to',
		type: 'chronopicker',
		mode: 'datetime',
		format: 'YYYY-MM-DD HH:mm'
	}
];

for (const field of fields) {
	const control = adapter.createControl(field, {
		onChange({ key, value }) {
			values[key] = value;
			output.textContent = JSON.stringify(values, null, 2);
		}
	});

	target.appendChild(control.element);
}

output.textContent = JSON.stringify(values, null, 2);
