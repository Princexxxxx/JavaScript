class MyPromise {
    #state = 'pending'; // fullfill rejected

    constructor(fn) {
        this.fn = fn; // 如何拿到resolve reject ???
    }

    then(fn) {}

    catch(fn) {}

    static resolve() {}
    static reject() {}
    static all() {}
    static allSettled() {}
    static race() {}
    static any() {}
}

// use
new Promise((resolve, reject) => fetch(`/`));
