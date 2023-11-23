import { deepStrictEqual } from 'node:assert/strict';
import { ListNode, addTwoNumbers } from './solution.mjs';

const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
const l3 = new ListNode(7, new ListNode(0, new ListNode(8)));

deepStrictEqual(addTwoNumbers(l1, l2), l3);