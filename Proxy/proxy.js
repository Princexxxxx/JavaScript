// Proxy 能够创建具有宿主对象全部可用功能的对象。 可用于拦截、对象虚拟化 日志/分析等。

// 为普通对象创建 Proxy
var target = {};
var handler = {
    get: function (receiver, name) {
        return `Hello, ${name}!`;
    },
};

var p = new Proxy(target, handler);
p.world === 'Hello, world!';
