/**
 * @param {string} s
 * @return {number}
 */
export const lengthOfLongestSubstring = function (s) {
    let maxLength = 0;
    let i = 0;
    let j = 1;
    let substring = s[0];
  
    if (!s) {
      return 0;
    }
  
    while (j !== s.length) {
      const char = s[j];
  
      if (!substring.includes(char)) {
        substring += char;
        j++;
        continue;
      }
  
      maxLength = Math.max(maxLength, substring.length);
      i++;
      substring = s.substring(i, j);
    }
  
    // additional check if j went up to the end of the string
    maxLength = Math.max(maxLength, substring.length);
  
    return maxLength;
  };  
  