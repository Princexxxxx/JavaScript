function Foo(name) {
    this.name = name;
}

const foo = new Foo('Peter');

Object.defineProperty(foo, 'name', {
    writable: false, // 只读
    enumerable: false, // 可枚举
});
