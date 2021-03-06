// Func.prototype用于建立由new Func创建的对象的原型
// Object.getPrototypeOf(obj)是ES5中用来获取obj对象的原型对象的`标准方法`
// obj.__proto__是获取obj对象的原型对象的`非标准方法`

// 构造函数
function Func() {}

const f = new Func();
Object.getPrototypeOf(f) === Func.prototype;

// 原型对象 Object.create(prototype)
// Object.create方法以 A 对象为原型，生成了B对象。B继承了A的所有属性和方法
const A = {
    say: () => {
        console.log('Hello');
    },
};

const B = Object.create(A);

B.say();
console.log('B.toString: ', B.toString());

// Object.getPrototypeOf() 方法返回指定对象的原型（内部[[Prototype]]属性的值）
console.log('getPrototypeOf(B)', Object.getPrototypeOf(B));

// ⚠️ 手写Object.create
// Object.create方法的实质是新建一个空的构造函数F，
// 然后让F.prototype属性指向参数对象obj，
// 最后返回一个F的实例，从而实现让该实例继承obj的属性。
if (typeof Object.create !== 'function') {
    Object.prototype.create = function (obj) {
        function F() {}

        F.prototype = Obj;

        return new F();
    };
}
