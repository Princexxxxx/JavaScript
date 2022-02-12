// 遍历器接口 Iterable
interface MyIterable {
    [Symbol.iterator](): MyIterator;
}

// 迭代器对象
interface MyIterator {
    next(value?: any): MyIterationResult;
}

// next 方法返回值定义
interface MyIterationResult {
    value: any;
    done: boolean;
}
