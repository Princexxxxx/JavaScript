const items = new WeakMap();

// 基于数组的栈
class Stack {
    constructor() {
        items.set(this, []); // 以this（Stack类自己的引用）为键，把代表栈的数组存入items。items在Stack类中是 `真正的私有属性`
    }

    get size() {
        return items.get(this).length;
    }

    push(element) {
        items.get(this).push(element);
    }

    pop() {
        return items.get(this).pop();
    }
}

const stack = new Stack();

stack.push('a');
stack.push('b');
stack.pop();

console.log('items: ', items);
