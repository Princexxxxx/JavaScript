// 迭代（Iteration）就是基于这些假想类型的接口（使用 TypeScript 类型的语法仅用于阐述）实现的：
interface _IteratorResult {
    done: boolean;
    value: any;
}
interface _Iterator {
    next(): _IteratorResult;
}
interface _Iterable {
    [Symbol.iterator](): _Iterator;
}

//
// --------------------------------------------
//

// Iterators + For..Of
// Iterator 对象支持自定义迭代，就像 CLR 的 IEnumerable 或 Java 的 Iterable。利用 for..of 将 for..in 归纳为基于自定义迭代器的迭代。
// 不需要实现为一个数组，并且支持像 LINQ 一样的懒设计模式（lazy design patterns）。
let fibonacci = {
    [Symbol.iterator]() {
        let pre = 0,
            cur = 1;
        return {
            next() {
                [pre, cur] = [cur, pre + cur];

                return { done: false, value: cur };
            },
        };
    },
};

for (var n of fibonacci) {
    // truncate the sequence at 1000
    if (n > 1000) break;
    console.log(n);
}

//
// --------------------------------------------
//

// Generators simplify iterator-authoring using function* and yield.
// A function declared as function* returns a Generator instance.
// Generators are subtypes of iterators which include additional next and throw.
// These enable values to flow back into the generator, so yield is an expression form which returns a value (or throws).
var fibonacci_generator = {
    [Symbol.iterator]: function* () {
        var pre = 0,
            cur = 1;
        for (;;) {
            var temp = pre;
            pre = cur;
            cur += temp;

            yield cur;
        }
    },
};

for (var n of fibonacci) {
    // truncate the sequence at 1000
    if (n > 1000) break;
    console.log(n);
}
