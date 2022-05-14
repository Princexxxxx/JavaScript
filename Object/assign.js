/**
 * Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。
 *
 * 如果目标对象中的属性具有相同的键，则属性将被源对象中的属性覆盖。后面的源对象的属性将类似地覆盖前面的源对象的属性。
 * !Object.assign 方法只会拷贝源对象自身的并且可枚举的属性到目标对象。
 *
 * ⚠️⚠️ 该方法使用源对象的[[Get]]和目标对象的[[Set]]，所以它会调用相关 getter 和 setter。
 * 因此，它分配属性，而不仅仅是复制或定义新的属性。如果合并源包含getter，这可能使其不适合将新属性合并到原型中。
 * 为了将属性定义（包括其可枚举性）复制到原型，应使用Object.getOwnPropertyDescriptor()和Object.defineProperty() 。
 *
 * String类型和 Symbol 类型的属性都会被拷贝。
 *
 * 在出现错误的情况下，例如，如果属性不可写，会引发TypeError，如果在引发错误之前添加了任何属性，则可以更改target对象。
 *
 * 注意，Object.assign 不会在那些source对象值为 null 或 undefined 的时候抛出错误。
 */
// Object.assign(target, ...sources);

// 目标对象
const target = {
    name: 23,
};

// 源对象
const source = {
    get name() {
        return 'abc';
    },
    set name(val) {
        console.log('[ val ]', val);
    },
};

Object.assign(target, source); // 源对象中的[[Get]]会转变为接收对象中的一个属性
console.log('[ target ]', target);

const descripter = Object.getOwnPropertyDescriptor(target, 'name');
console.log('[ descripter ]', descripter);
