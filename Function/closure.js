'use strict';

function createCounter() {
    // 无论何时声明新函数并将其赋值给变量，都要存储函数定义和闭包。
    // 闭包包含在函数创建时作用域中的所有变量，它类似于背包。
    // 函数定义附带一个小背包，它的包中存储了函数定义创建时作用域中的所有变量。
    let counter = 0;

    return function () {
        let random = 0;
        random++;
        counter++;
        console.log('[ random ]', random);

        return counter + random;
    };
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log('example increment', c1, c2, c3);

var x = 0;

function foo() {
    return function () {
        return ++x;
    };
}

// console.log(foo()());
// console.log(foo()());
// console.log(foo()());

// !JS函数执行过程
// 创建执行上下文，推入执行栈
// 返回函数执行结果
// 函数执行完将context弹出，并销毁
