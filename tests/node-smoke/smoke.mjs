import assert from 'node:assert/strict';
import { NativeInputAdapter } from '../../src/adapters/NativeInputAdapter.js';
import { addMonths, createLocalDate, getMonthMatrix, isSameDay, pad2 } from '../../src/utils/dateMath.js';
import { formatChronoValue } from '../../src/utils/format.js';
import { parseChronoValue } from '../../src/utils/parse.js';

const date = createLocalDate(2026, 5, 21, 14, 30);
assert.equal(formatChronoValue(date, 'YYYY-MM-DD'), '2026-05-21');
assert.equal(formatChronoValue(date, 'YYYY-MM-DD HH:mm'), '2026-05-21 14:30');
assert.equal(pad2(7), '07');

const parsedDate = parseChronoValue('2026-05-21', {
	mode: 'date',
	format: 'YYYY-MM-DD'
});
assert.equal(parsedDate.ok, true);
assert.equal(formatChronoValue(parsedDate.date, 'YYYY-MM-DD'), '2026-05-21');

const parsedDateTime = parseChronoValue('2026-05-21 09:15', {
	mode: 'datetime',
	format: 'YYYY-MM-DD HH:mm'
});
assert.equal(parsedDateTime.ok, true);
assert.equal(parsedDateTime.date.getHours(), 9);
assert.equal(parsedDateTime.date.getMinutes(), 15);

const invalidDate = parseChronoValue('2026-02-30', {
	mode: 'date',
	format: 'YYYY-MM-DD'
});
assert.equal(invalidDate.ok, false);

const nextMonth = addMonths(createLocalDate(2026, 5, 1), 1);
assert.equal(formatChronoValue(nextMonth, 'YYYY-MM-DD'), '2026-06-01');

const matrix = getMonthMatrix(2026, 5, 1);
assert.equal(matrix.length, 6);
assert.equal(matrix[0].length, 7);
assert.equal(matrix.flat().some((day) => day.iso === '2026-05-21'), true);
assert.equal(isSameDay(createLocalDate(2026, 5, 21), createLocalDate(2026, 5, 21, 23, 59)), true);

const inputAdapter = new NativeInputAdapter();
assert.equal(inputAdapter.canHandle({ tagName: 'INPUT' }), true);
assert.equal(inputAdapter.canHandle({ tagName: 'DIV' }), false);

console.log('ChronoPicker node smoke passed.');
