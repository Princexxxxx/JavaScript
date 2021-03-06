/**
 * 迭代协议
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols
 *
 * 可迭代协议允许 JavaScript 对象定义或定制它们的迭代行为，例如，在一个 for..of 结构中，哪些值可以被遍历到。
 * 一些内置类型同时是内置可迭代对象，并且有默认的迭代行为，比如 Array 或者 Map，而其他内置类型则不是（比如 Object)）。
 * 要成为可迭代对象， 一个对象必须实现 @@iterator 方法。这意味着对象（或者它原型链上的某个对象）必须有一个键为 @@iterator 的属性，可通过常量 Symbol.iterator 访问该属性：
 *
 * [Symbol.iterator]: 一个无参数的函数，其返回值为一个符合迭代器协议的对象。
 *
 * ⚠️⚠️ 当一个对象需要被迭代的时候（比如被置入一个 for...of 循环时），首先，会不带参数调用它的 @@iterator 方法，然后使用此方法返回的迭代器获得要迭代的值。
 *
 * 值得注意的是调用此零个参数函数时，它将作为对可迭代对象的方法进行调用。 因此，在函数内部，this关键字可用于访问可迭代对象的属性，以决定在迭代过程中提供什么。
 *
 * 此函数可以是普通函数，也可以是生成器函数，以便在调用时返回迭代器对象。 在此生成器函数的内部，可以使用yield提供每个条目。
 */
const myIterator = {
    next: function () {
        // ...
    },
    [Symbol.iterator]: function () {
        return this;
    },
};

new Set([1, 2, 3])[Symbol.iterator]();
[1, 2, 3][Symbol.iterator]();

// ------------- 使用[@@iterator]() -------------
const string = 'A\uD835\uDC68';
const strIter = string[Symbol.iterator]();

console.log(strIter.next().value); // "A"
console.log(strIter.next().value); // "\uD835\uDC68"

// ------------- 自定义迭代器 -------------
const myIterable = {};

myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};

[...myIterable]; // [1, 2, 3]

// ------------- 实现可迭代协议，使迭代器可迭代：Symbol.iterator -------------
function createIterator(items) {
    let i = 0;

    return {
        next: function () {
            let done = i >= items.length;
            let value = !done ? items[i++] : undefined;

            return {
                done: done,
                value: value,
            };
        },
        [Symbol.iterator]: function () {
            return this;
        },
    };
}

const iterator = createIterator([1, 2, 3]);

[...iterator]; // [1, 2, 3]
