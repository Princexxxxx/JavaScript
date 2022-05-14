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

// !注意，super关键字表示原型对象时，只能用在[[对象的方法之中]]，用在其他地方都会报错。(其实就是看this嘛)

/**
 * 上面三种super的用法都会报错，因为对于 JavaScript 引擎来说，这里的super都没有用在对象的方法之中。
 * 第一种写法是super用在属性里面
 * 第二种和第三种写法是super用在一个函数里面，然后赋值给foo属性。
 * !目前，只有对象方法的简写法可以让 JavaScript 引擎确认，定义的是对象的方法。
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
    foo() {
        return super.foo;
    },
};

//
// --------------------------------------------
//

/**
 * ES6 允许继承原生构造函数定义子类，因为 ES6 是先新建父类的实例对象this，然后再用子类的构造函数修饰this，使得父类的所有行为都可以继承。
 * 下面是一个继承Array的例子。
 */
class MyArray extends Array {
    // !如果子类没有定义constructor()方法，这个方法会默认添加，并且里面会调用super()。也就是说，不管有没有显式定义，任何一个子类都有constructor()方法。
    constructor(...args) {
        // ES6 规定，子类必须在constructor()方法中调用super()，否则就会报错。
        // 这是因为子类自己的this对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，添加子类自己的实例属性和方法。
        // 如果不调用super()方法，子类就得不到自己的this对象。

        // 注意，super虽然代表了父类A的构造函数，但是返回的是子类B的实例，即super内部的this指的是B的实例，

        // !因此super()在这里相当于A.prototype.constructor.call(this)。
        super(...args);
    }

    log() {
        console.log('log ->', JSON.stringify(this));
    }
}

let arr = new MyArray(1, 2, 3);
arr = arr.concat([4, 5, [6, 7]]);
arr.push(8);
arr.log();
