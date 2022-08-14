/**
 * 迭代协议
 *
 * 参照可迭代协议，要成为可迭代对象首先要有一个 **@@iterator **即（Symbol.iterator）属性，该属性为一个【无参数的函数】，返回一个符合迭代器协议的对象。
 * 根据迭代器协议定义这个迭代器对象要返回一个 next() 方法，这个 next() 方法返回一个包含 value、done 属性的对象。
 */
class MyObject {
    #i = 0;

    constructor(items) {
        this.items = items;
    }

    get length() {
        return Object.keys(this.items).length;
    }

    // for...of 循环会用到
    [Symbol.iterator]() {
        return this;
    }

    // 迭代器接口方法
    next() {
        let done = this.#i >= this.length;
        let value = !done ? Object.values(this.items)[this.#i++] : undefined;

        return {
            done: done,
            value: value,
        };
    }
}

const obj = new MyObject({
    a: 1,
    b: 2,
    c: 3,
});

//
// --------------------------------------------
//

/**
 * [Best] 基于生成器函数的迭代器实现
 * 使用生成器函数（Generator）实现是最简单的，只要使用 yield 语句返回每一次的值即可。
 */
const myIterable = {
    items: Array.of(1, 2, 3, 4),

    // 调用可迭代对象的 Symbol.iterator 方法会返回一个迭代器对象，它的接口中有一个 next 方法
    // 了解生成器函数（Generator）的可能不会陌生，同样的当你执行一个生成器函数也会得到一个迭代器对象，但是要区分 生成器和迭代器不是一个概念。
    *[Symbol.iterator]() {
        yield* this.items;
    },
};

for (let value of myIterable) {
    console.log('[ value ]', value);
}

// 或者
console.log('[ [...myIterable] ]', [...myIterable]);
