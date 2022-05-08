class Person {
    field = 'abc'; // 公开属性
    #field = '_abc'; // 私有属性，实例无法访问

    constructor(name, age) {
        console.log(
            '通过 new.target 可确定构造函数是如何调用的，也可禁止实例化，仅用来继承（相当于abstract关键字）',
            new.target === Person
        );

        this.name = name;
        this.age = age;
    }

    // 计算属性
    get info() {
        return `个人信息：姓名-${this.name}，年龄-${this.age}`;
    }

    // 静态成员、方法
    static country = `🇨🇳🇨🇳🇨🇳`;
    static say() {
        try {
            console.log('静态方法打印私有属性 ->', this.#field); // Uncaught TypeError: Cannot read private member #field from an object whose class did not declare it
        } catch (err) {
            console.log('[ err ]', err);
        }
    }

    say() {
        console.log('实例方法打印私有属性 ->', this.#field);
    }
}

var personA = new Person('lqx', 29);
console.log('[ personA ]', personA);
console.log('[ personA ]', personA['field']);
console.log('[ personA ]', personA['#field']);

Person.say();
personA.say();

//
// --------------------------------------------
//

/**
 * ES6 允许继承原生构造函数定义子类，因为 ES6 是先新建父类的实例对象this，然后再用子类的构造函数修饰this，使得父类的所有行为都可以继承。
 * 下面是一个继承Array的例子。
 */
class MyArray extends Array {
    constructor(...args) {
        super(...args);
    }

    log() {
        console.log(JSON.stringify(this));
    }
}

let arr = new MyArray(1, 2, 3);
arr = arr.concat([4, 5, [6, 7]]);
arr.push(8);
arr.log();
