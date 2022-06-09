/**
 * 
 * @param {string} input 
 */
export const frequencySort = (input) => {
    const map = new Map();
    
    input.split("").forEach(char => {
        map.set(char, (map.get(char) ?? 0) + 1)
    });
    
    return Array.from(map.entries())
        .sort(([_char1, v1], [_char2, v2]) => v2 - v1)
        .reduce((acc, [char, repeat]) =>  acc + char.repeat(repeat), '');
};
