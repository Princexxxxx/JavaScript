const downloadFile = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`file-${id} download succeed!`);
        }, 3000)
    })
}

// Generator函数g中有一个异步操作downloadFile，他返回一个Promise对象。
const g = function* () {
    try {
        const msg1 = yield downloadFile(Date.now());

        console.log('msg1: ', msg1);

        const msg2 = yield downloadFile(Date.now());

        console.log('msg2: ', msg2);
    } catch (e) {
        console.log('e: ', e);
    }
}

// 函数run用来处理这个Promise对象，并调用下一个next方法
const run = (generator) => {
    const gen = generator();

    function go(result) {
        if (result.done) return result.value;

        return result.value.then((value) => {
            return go(gen.next(value));
        }, (error) => {
            return go(gen.throw(error));
        })
    }

    go(gen.next());
}

run(g);