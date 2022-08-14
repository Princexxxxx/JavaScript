var entryObj = {
    a: {
        b: {
            c: {
                dd: 'abcdd',
            },
        },
        d: {
            xx: 'adxx',
        },
        e: 'ae',
    },
};

// 要求转换成如下对象
var outputObj = {
    'a.b.c.dd': 'abcdd',
    'a.d.xx': 'adxx',
    'a.e': 'ae',
};

const isObject = (obj) => Object.prototype.toString.call(obj) === '[object Object]';

/**
 * JS 实现对象的扁平化
 * https://juejin.cn/post/6894577333630418958
 *
 * @param {*} obj
 */
const flatObject = (obj) => {
    const ret = {};

    const dfs = (obj, paths) => {
        for (let key of Object.keys(obj)) {
            if (isObject(obj[key])) {
                dfs(obj[key], [...paths, key]);
            } else {
                ret[[...paths, key].join('.')] = obj[key];
            }
        }
    };

    dfs(obj, []);

    return ret;
};

console.log(flatObject(entryObj));
