/**
 * 抽象类
 */
abstract class Animal {
    public name;

    public constructor(name) {
        this.name = name;
    }

    public abstract sayHi();
}

class Cat extends Animal {
    // 继承抽象类，子类必须实现抽象方法
    public sayHi() {
        console.log(`Meow, My name is ${this.name}`);
    }
}

let cat = new Cat('Tom');
