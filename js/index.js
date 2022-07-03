'use strict'

const cache = new Map();
const mathPow = num => num**2;
const cacheKeysArray = [];

const foo = (a, callBack) => {
    let result = null;
    if(!cache.has(a)) {
        result = callBack(a);
        cache.set(a, callBack(a));
        cacheKeysArray.push(a)
        if(cacheKeysArray.length > 10) {
            cache.delete(cacheKeysArray[0]);
            cacheKeysArray.shift();
        }
    } else {
        result = cache.get(a);
    }
    return result;
}

foo(1,mathPow);
foo(1,mathPow);
foo(1,mathPow);
foo(1,mathPow);
foo(2,mathPow);
foo(3,mathPow);
foo(4,mathPow);
foo(5,mathPow);
foo(6,mathPow);
foo(7,mathPow);
foo(8,mathPow);
foo(8,mathPow);
foo(8,mathPow);
foo(9,mathPow);
foo(10,mathPow);
foo(10,mathPow);
foo(11,mathPow);
foo(12,mathPow);

console.log(cache);