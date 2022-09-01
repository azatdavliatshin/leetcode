import {strict as assert} from 'node:assert/strict';
import {bulbSwitch} from './solution.mjs';

assert.equal(bulbSwitch(9), 3);
assert.equal(bulbSwitch(5), 2);
assert.equal(bulbSwitch(1), 1);
assert.equal(bulbSwitch(0), 0);