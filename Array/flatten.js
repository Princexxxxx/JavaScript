// 数组扁平化

/**
 * 递归
 */
Array.prototype.flatten = function () {
    const ret = [];

    const traverse = (arr) => {
        for (let item of arr) {
            if (Array.isArray(item)) {
                traverse(item);
            } else {
                ret.push(item);
            }
        }
    };

    traverse(this);

    return ret;
};
const matrix = [1, [2, [3, 4, 5, [3, 3, 4, 5], 6]]];
matrix.flatten();

//
// --------------------------------------------
//

/**
 * ES6展开运算符
 *
 * @param {*} arr
 */
const flatten = (arr) => {
    while (arr.some((item) => Array.isArray(item))) {
        arr = [].concat(...arr); // ...只能展开一层
    }

    return arr;
};
flatten(matrix);
