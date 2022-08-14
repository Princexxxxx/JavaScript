class Person {
    private first;
    private last;

    constructor(first, last) {
        this.first = first;
        this.last = last;
    }

    @readonly
    name() {
        return `${this.first} ${this.last}`;
    }
}

function readonly(target, name, descriptor) {
    // descriptor对象原来的值如下
    // {
    //   value: specifiedFunction,
    //   enumerable: false,
    //   configurable: true,
    //   writable: true
    // };
    descriptor.writable = false;

    return descriptor;
}

// readonly(Person.prototype, 'name', descriptor);

// 类似于
// Object.defineProperty(Person.prototype, 'name', descriptor);

const person = new Person('Li', 'qixiong');
console.log('[ person ]', person);
