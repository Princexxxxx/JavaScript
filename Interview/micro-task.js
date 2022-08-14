(async () => {
    setTimeout(() => {
        console.log(1); // 宏任务
    });

    const foo = () =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(2); // 下一轮，微任务
                reject(3);

                console.log(4);
            });

            console.log(0); // 微任务
        });

    const result = await foo();
    console.log('[ result ]', result);
})();

// 0 -> 1 -> 4
// 0 -> 1 -> 4 -> 2
