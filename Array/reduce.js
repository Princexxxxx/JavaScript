const arr = [
    {
        key: 'a',
        value: 'aaa',
    },
    {
        key: 'b',
        value: 'bbb',
    },
    {
        key: 'c',
        value: 'ccc',
    },
];

const processFn = (arr) =>
    arr.reduce((acc, { key, value }) => ({ ...acc, [key]: value }), {}); // 箭头函数返回一个对象添加一个括号即可

processFn(arr);

/**
 * output:
    {
        "a": "aaa",
        "b": "bbb",
        "c": "ccc"
    }
*/
