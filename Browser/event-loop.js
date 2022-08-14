setTimeout(() => {
    console.log('3 宏任务');
});

new Promise((resolve) => {
    console.log('1');
    resolve(2);
}).then((res) => {
    console.log(`${res} 微任务`);
});

console.log('0 同步');
