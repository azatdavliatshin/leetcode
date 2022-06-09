import {strict as assert} from 'node:assert/strict';
import { frequencySort } from './solution.mjs';

const testResult1 = frequencySort("tree");

assert.ok(testResult1 === "eert" || testResult1 === "eetr");

const testResult2 = frequencySort("cccaaa");
assert.ok(testResult2 === "aaaccc" || testResult2 === "cccaaa");

const testResult3 = frequencySort("Aabb");
assert.ok(testResult3 === "bbAa" || testResult3 === "bbaA");