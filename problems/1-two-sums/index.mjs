import { strict as assert } from "node:assert/strict";
import { twoSum } from "./solution.mjs";

assert.deepStrictEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
assert.deepStrictEqual(twoSum([3, 2, 4], 6), [1, 2]);
assert.deepStrictEqual(twoSum([3, 3], 6), [0, 1]);
