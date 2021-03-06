const _items = Symbol('item'); // 使用Symbol作为对象属性，不可变

// 基于数组的栈
class Stack {
    constructor() {
        this[_items] = [];
    }

    get size() {
        return this[_items].length;
    }

    push(element) {
        this[_items].push(element);
    }
}

const stack = new Stack();

stack.push('a');
stack.push('b');
stack.push('c');

console.table(stack);

// getOwnPropertySymbols能够取到类里面声明的所有Symbol属性
const objectSymbols = Object.getOwnPropertySymbols(stack);
console.log('objectSymbols: ', objectSymbols);

stack[objectSymbols[0]].push('非法访问私有属性_items'); // 依然可以访问_items属性，进行栈操作

console.table(stack);
