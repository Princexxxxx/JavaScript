/**
 * ES5 寄生组合继承
 *
 * !开发人员普遍认为「寄生组合式继承」是引用类型最理想的继承范式。
 *
 * @param {*} subType
 * @param {*} superType
 */
function inheritPrototype(subType, superType) {
    const prototype = Object.create(superType.prototype); //创建对象，创建父类原型的一个副本
    prototype.constructor = subType; // 增强对象，弥补因重写原型而失去的默认的constructor属性
    subType.prototype = prototype; // 指定对象，将新创建的对象赋值给子类的原型
}

// 父类
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.muscle = false;

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

const man = new Man('lqx', 23);
console.log('[ man ]', man);
console.log('[ man.__proto__ ]', man.__proto__);
console.log('[ Man.prototype.constructor ]', man.constructor === Man);
man.say();
man.run();
