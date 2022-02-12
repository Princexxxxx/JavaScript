/**
 * __proto__属性（前后各两个下划线），用来读取或设置当前对象的原型对象（prototype）。目前，所有浏览器（包括 IE11）都部署了这个属性。
 *
 * 该属性没有写入 ES6 的正文，而是写入了附录，原因是__proto__前后的双下划线，说明它本质上是一个内部属性，而不是一个正式的对外的 API，只是由于浏览器广泛支持，才被加入了 ES6。
 * 标准明确规定，只有浏览器必须部署这个属性，其他运行环境不一定需要部署，而且新的代码最好认为这个属性是不存在的。
 * 因此，无论从语义的角度，还是从兼容性的角度，都不要使用这个属性，而是使用下面的Object.setPrototypeOf()（写操作）、Object.getPrototypeOf()（读操作）、Object.create()（生成操作）代替。
 *
 * 实现上，__proto__调用的是Object.prototype.__proto__，具体实现如下:
 */
Object.defineProperty(Object.prototype, '__proto__', {
    get() {
        let _thisObj = Object(this);

        return Object.getPrototypeOf(_thisObj);
    },
    set(proto) {
        if (this === undefined || this === null) {
            throw new TypeError();
        }

        if (!isObject(this)) {
            return undefined;
        }

        if (!isObject(proto)) {
            return undefined;
        }

        let status = Reflect.setPrototypeOf(this, proto);
        if (!status) {
            throw new TypeError();
        }
    },
});

function isObject(value) {
    return Object(value) === value;
}
