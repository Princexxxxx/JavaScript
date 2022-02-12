// 展开语法(Spread syntax), 可以在函数调用/数组构造时, 将数组表达式或者string在语法层面展开；
// 还可以在构造字面量对象时, 将对象表达式按key-value的方式展开。(译者注: 字面量一般指 [1, 2, 3] 或者 {name: "mdn"} 这种简洁的构造方式)

/**
 * 在数组或函数参数中使用展开语法时, 该语法只能用于 可迭代对象
 */
const obj = { a: '1' };
const array = [...obj]; // TypeError: obj is not iterable
