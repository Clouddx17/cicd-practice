import test from 'node:test';
import assert from 'node:assert';
import { sum } from './sum';

test('adds two numbers', () => {
  assert.strictEqual(sum(2, 3), 5);
});
