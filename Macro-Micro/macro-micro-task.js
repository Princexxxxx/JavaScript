console.log('main1'); // 1

process.nextTick(() => {
    console.log('process.nextTick1'); // 4
});

setTimeout(() => {
    console.log('setTimeout'); // 6

    process.nextTick(() => {
        console.log('process.nextTick2'); // 7
    });
}, 0);

new Promise((resolve, reject) => {
    console.log('promise'); // 2

    resolve();
}).then(() => {
    console.log('promise then'); // 5
});

console.log('main2'); // 3 ⚠️⚠️⚠️ ??
