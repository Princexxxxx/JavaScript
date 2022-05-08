// this关键字总是指向函数所在的当前对象，ES6 又新增了另一个类似的关键字super，指向当前对象的原型对象。
const proto = {
    foo: 'hello',
};

const obj = {
    foo: 'world',
    find() {
        return super.foo;
    },
};

Object.setPrototypeOf(obj, proto);
console.log('obj.find: ', obj.find()); // "hello"

// 注意，super关键字表示原型对象时，只能用在[[对象的方法之中]]，用在其他地方都会报错。(其实就是看this嘛)

/**
 * 上面三种super的用法都会报错，因为对于 JavaScript 引擎来说，这里的super都没有用在对象的方法之中。
 * 第一种写法是super用在属性里面
 * 第二种和第三种写法是super用在一个函数里面，然后赋值给foo属性。
 * 目前，只有对象方法的简写法可以让 JavaScript 引擎确认，定义的是对象的方法。
 */
// 报错
// const obj1 = {
//     foo: super.foo, // Uncaught SyntaxError: 'super' keyword unexpected here
// };

// 报错
// const obj2 = {
//     foo: () => super.foo,
// };

// 报错
const obj3 = {
    foo: function () {
        return super.foo;
    },
};
