import { strictEqual } from 'node:assert/strict';
import { lengthOfLongestSubstring } from './solution.mjs';

strictEqual(lengthOfLongestSubstring("abcabcbb"), 3);
strictEqual(lengthOfLongestSubstring("bbbbb"), 1);
strictEqual(lengthOfLongestSubstring("pwwkew"), 3);
strictEqual(lengthOfLongestSubstring("dvdf"), 3);
