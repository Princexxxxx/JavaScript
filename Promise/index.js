const async_reverse_str = (str) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const reverseStr = str.split('').reverse().join('');

            resolve(reverseStr);

            // Promise状态已凝固
            reject({
                code: 1,
                msg: 'a',
            });
        }, 1000);
    });

// Promise对象是一个构造函数，用来生成Promise实例。
const p = new Promise((resolve, reject) => resolve(Math.random()));
const p1 = () => Promise.resolve(Date.now());
const p2 = () => Promise.reject('p2 Error!');

// p.then((res) => {
//     console.log('[ p res ]', res);
// }).catch((err) => {
//     console.log('[ p err ]', err);
// });

try {
    const result = await async_reverse_str('abcde');
    console.log('[ reverse_str result ]', result);

    // catch error
    await p2();
} catch (err) {
    console.log('[ err ]', err);
}

const f1 = () => fetch('/debounce.html');

const f1_result = await f1();
console.log('[ f1_result ]', f1_result);
