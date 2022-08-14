function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.say = function () {
    console.log(`${Date.now()}`);
};

/**
 * ✅
 * 如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，那么new表达式中的函数调用将返回该对象引用
 */
function objectFactory(Constructor, ...args) {
    const context = Object.create(Constructor.prototype); // 基于构造函数原型创建新对象。Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
    const result = Constructor.apply(context, args); // 添加属性到新创建的实例，并获取构造函数执行结果

    return typeof result === 'object' ? result : context;
}

const p1 = objectFactory(Person, 'Peter', 30);

console.log('[ p1 ]', p1);

// ------------- 阮一峰 -------------
/**
 * new操作符做了这几件事
 * 1、创建一个空对象，作为将要返回的对象实例
 * 2、将这个空对象的原型，指向构造函数的prototype
 * 3、将这个空对象赋值给函数内部的this
 * 4、开始执行构造函数内部代码
 *
 * 也就是说，构造函数内部，this指的是一个新生成的空对象，所有针对this的操作，都会发生在这个空对象上。
 * 构造函数之所以叫“构造函数”，就是说这个函数的目的，就是操作一个空对象（即this对象），将其“构造”为需要的样子。
 * 如果构造函数内部有return语句，而且return后面跟着一个对象，new命令会返回return语句指定的对象；否则，就会不管return语句，返回this对象。
 */
function _new(/* 构造函数 */ Constructor, /* 构造函数参数 */ params) {
    // 将 arguments 对象转为数组
    var args = [].slice.call(arguments);

    // 取出构造函数
    var Constructor = args.shift(); // 剩余参数传给构造函数

    // 创建一个空对象，继承构造函数的 prototype 属性
    var context = Object.create(Constructor.prototype);

    // 执行构造函数
    var result = Constructor.apply(context, args);

    // 如果返回结果是对象，就直接返回，否则返回 context 对象
    return typeof result === 'object' && result != null ? result : context;
}
