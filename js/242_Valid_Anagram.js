/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const smap = chartMap(s);
    const tmap = chartMap(t);
    const skey = Object.keys(smap);
    const tkey = Object.keys(tmap);
    if (skey.length !== tkey.length) return false;
    for(let i=0; i<skey.length; i++) {
        if (smap[skey[i]] !== tmap[skey[i]]) return false;
    }
    return true;
};

function chartMap(string) {
    const map = {};
    for(let i=0; i<string.length; i++) {
        const w = string[i];
        if (map[w]) {
            map[w]++;
        } else {
            map[w] = 1;
        }
    }
    return map;
}

// TODO handle unicode characters
