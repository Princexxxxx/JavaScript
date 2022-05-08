/**
 * sort() 方法用原地算法对数组的元素进行排序，并返回数组。
 * 默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的
 *
 * arr.sort([compareFunction])
 *
 * compareFunction 可选
 * 用来指定按某种顺序进行排列的函数。如果省略，元素按照转换为的字符串的各个字符的Unicode位点进行排序。
 *
 * firstEl 第一个用于比较的元素。
 * secondEl 第二个用于比较的元素。
 *
 * 如果没有指明 compareFunction ，那么元素会按照转换为的字符串的诸个字符的Unicode位点进行排序。例如 "Banana" 会被排列到 "cherry" 之前。
 * 当数字按由小到大排序时，9 出现在 80 之前，但因为（没有指明 compareFunction），比较的数字会先被转换为字符串，所以在Unicode顺序上 "80" 要比 "9" 要靠前。
 * 如果指明了 compareFunction ，那么数组会按照调用该函数的返回值排序。即 a 和 b 是两个将要被比较的元素：
 *
 * 如果 compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 之前；
 * 如果 compareFunction(a, b) 等于 0 ， a 和 b 的相对位置不变。备注： ECMAScript 标准并不保证这一行为，而且也不是所有浏览器都会遵守（例如 Mozilla 在 2003 年之前的版本）；
 * 如果 compareFunction(a, b) 大于 0 ， b 会被排列到 a 之前。
 * compareFunction(a, b) 必须总是对相同的输入返回相同的比较结果，否则排序的结果将是不确定的。
 */

const arr_1 = ['a', 'b', 'c'];
const arr_2 = [1, 2, 3];

// console.log(
//     '[ [1, 2, 3].sort((a, b) => a - b) ]',
//     [1, 2, 3].sort((a, b) => a - b)
// );
// console.log(
//     '[ [1, 2, 3].sort((a, b) => b - a) ]',
//     [1, 2, 3].sort((a, b) => b - a)
// );

const branches = [
    'hotfix/4.2.5',
    'hotfix/4.2.x',
    'hotfix/4.2.6',
    'hotfix/4.2.7',
];

/**
 * 根据版本号排序hotfix分支
 *
 * hotfix/4.2.x > hotfix/4.2.9;
 * hotfix/3.12.x > hotfix/3.10.x;
 * hotfix/4.0.x > hotfix/3.10.x;
 *
 * @param branch1
 * @param branch2
 */
const compareVersion = (branch1, branch2) => {
    console.log('[ branch1 ]', branch1);
    console.log('[ branch2 ]', branch2);

    const branchToVersions = (branch) =>
        branch.replace('hotfix/', '').split('.');

    const v1 = branchToVersions(branch1),
        v2 = branchToVersions(branch2);

    for (let i = 0; i < 3; i++) {
        const x = v1[i] === 'x' ? v1[i] : parseInt(v1[i]);
        const y = v2[i] === 'x' ? v2[i] : parseInt(v2[i]);

        if (i === 2 && x === 'x') {
            console.log('[ x & y]', x, y);

            return -1;
        }

        if (x > y) return -1; // 小于 0，那么 a 会被排列到 b 之前
        if (x < y) return 1; // 大于 0， b 会被排列到 a 之前
    }

    return 0;
};

branches.sort(compareVersion);

console.log('[ branches ]', branches);
