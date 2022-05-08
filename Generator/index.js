/**
 * 生成器
 * 最初调用时，生成器函数不执行任何代码，而是返回一个Generator对象（可迭代）。
 * 通过调用生成器的下一个方法消耗值时，Generator函数将执行，直到遇到yield关键字暂停。
 */
function* generator(i) {
    yield i;
    yield i + 10;
}

// 手动执行
const gen = generator(10);

console.log(gen.next().value); // expected output: 10
console.log(gen.next().value); // expected output: 20

// 迭代执行（迭代生成器）
for (const value of generator(10)) {
    console.log(value);
}

// ---------------- 生成器对象到底是一个迭代器，还是一个可迭代对象？ ----------------
// 生成器对象既是迭代器，也是可迭代对象:
let aGeneratorObject = (function* () {
    yield 1;
    yield 2;
    yield 3;
})();

typeof aGeneratorObject.next;
// 返回"function", 因为有一个next方法，所以这是一个迭代器

typeof aGeneratorObject[Symbol.iterator];
// 返回"function", 因为有一个@@iterator方法，所以这是一个可迭代对象

aGeneratorObject[Symbol.iterator]() === aGeneratorObject;
// 返回true, 因为@@iterator方法返回自身（即迭代器），所以这是一个格式良好的可迭代对象

[...aGeneratorObject];
// 返回[1, 2, 3]

console.log(Symbol.iterator in aGeneratorObject);
// 返回true, 因为@@iterator方法是aGeneratorObject的一个属性
