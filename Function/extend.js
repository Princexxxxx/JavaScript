/**
 * ES5 寄生组合继承
 *
 * !利用babel工具进行转换，我们会发现 class extends 实际采用的也是「寄生组合继承」方式，因此也证明了这种方式是较优的解决继承的方式
 *
 * @param {*} subClass
 * @param {*} superClass
 */
function inheritPrototype(subClass, superClass) {
    // 创建对象，创建父类原型的一个副本；指定对象，将新创建的对象赋值给子类的原型
    subClass.prototype = Object.create(superClass.prototype);

    // 增强对象，弥补因「重写原型」而失去的默认的constructor属性
    subClass.prototype.constructor = subClass;
}

// 父类
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.say = function () {
        console.log('Person: say!');
    };
}

Person.prototype.run = function () {
    console.log('Person: run!');
};

// 子类
function Man() {
    Person.apply(this, arguments);

    this.muscle = true;

    this.say = function () {
        console.log('Man: say!');
    };
}

// 继承
inheritPrototype(Man, Person);

// 由于现代 JavaScript 引擎优化属性访问所带来的特性的关系，更改对象的 [[Prototype]]在各个浏览器和 JavaScript 引擎上都是一个很慢的操作。
// Object.setPrototypeOf(Man.prototype, Person.prototype);

const man = new Man('Peter', 23);
console.log('[ man ]', man);
console.log('[ man.__proto__ ]', man.__proto__);
console.log('[ Man.prototype.constructor ]', man.constructor === Man);
man.run(); // 原型方法
man.say(); // 子类方法
