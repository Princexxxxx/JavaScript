/**
 *
 * 函数式编程FP —— 柯里化
 *
 * 什么叫函数柯里化？其实就是将使用多个参数的函数转换成一系列使用一个参数的函数的技术。
 *
 * 现在就是要实现 curry 这个函数，使函数从一次调用传入多个参数变成多次调用每次传一个参数。
 *
 * @param {*} fn
 */
const curry = (fn, ...args) =>
    args.length >= fn.length
        ? fn(...args) // 传入的参数大于等于原始函数fn的参数个数，则直接执行该函数
        : (...rest) => {
              console.log('[ args ]', args);

              return curry(fn, ...args, ...rest); // 传入的参数小于原始函数fn的参数个数时，继续对当前函数进行柯里化，返回一个接受所有参数（当前参数和剩余参数）的函数
          };

function add(a, b, c) {
    return a + b + c;
}

const _curry = (fn, ...args) => {
    return args.length >= fn.length
        ? fn(...args)
        : (...rest) => _curry(fn, ...args, ...rest);
};

const addCurry = curry(add);

console.log('[ ans ]', [
    addCurry(1)(2)(3),
    addCurry(1, 2)(4),
    addCurry(1, 3, 5),
]);
