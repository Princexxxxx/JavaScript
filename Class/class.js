class Person {
    city = 'Shanghai'; // 公开属性
    country = `🇨🇳🇨🇳🇨🇳`;

    #mobile = 'xxx-xxxx-xxxx'; // 私有属性，实例无法访问

    constructor(name, age) {
        console.log(
            '通过 new.target 可确定构造函数是如何调用的，也可禁止实例化，仅用来继承（相当于abstract关键字）',
            new.target === Person
        );

        this.name = name;
        this.age = age;
    }

    get info() {
        return `个人信息：姓名-${this.name}，年龄-${this.age}`;
    }

    static say() {
        try {
            console.log('静态方法打印私有属性 ->', this.#mobile); // Uncaught TypeError: Cannot read private member #field from an object whose class did not declare it
        } catch (err) {
            console.log('[ err ]', err);
        }
    }

    say() {
        console.log('实例方法打印私有属性 ->', this.#mobile);
    }
}

var personA = new Person('Peter', 30);
console.log('[ personA ]', personA);

Person.say();
personA.say();
