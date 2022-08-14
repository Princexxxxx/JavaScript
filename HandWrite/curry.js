/**
 * 蚂蚁笔试题：curry
 *
 * @param {*} w
 * @param {*} h
 * @param {*} l
 */
function volume(w, h, l) {
    return w * h * l;
}

var curried = curry(volume);

console.log(curried(2)(3)(4)); // 24
console.log(curried(2, 3)(4)); // 24
console.log(curried(2)(3, 4)); // 24
console.log(curried(2, 3, 4)); // 24
console.log(curried()()(2, 3, 4)); // 24

var max10 = curry(Math.min)(10);

console.log(max10(12)); // 10
console.log(max10(6)); // 6

/**
 * 柯里化函数
 *
 * 一种函数转换：传参数量 小于 fn参数个数，返回一个接受所有参数（当前参数 + 剩余参数）的函数
 *
 * @param {*} fn
 * @param  {...any} args
 */
function curry(fn, ...args) {
    if (args.length >= fn.length) {
        return fn(...args);
    } else {
        function _curry(...rest) {
            return curry(fn, ...args, ...rest);
        }

        return _curry;
    }
}

// 自己练习
const validateStr = (regex, str) => regex.test(str);
const validate = curry(validateStr);

const validateMobile = validate(/^\d{11}$/);
console.log(validateMobile(111));
console.log(validateMobile(11122233344));
