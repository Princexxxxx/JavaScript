const myInstanceOf = (left, right) => {
    let rightProto = right.prototype; // 构造函数原型
    left = left.__proto__;

    while (true) {
        if (left === null) {
            return false;
        }

        if (left === rightProto) {
            return true;
        }

        left = left.__proto__; // 迭代__proto__指针
    }
};

const myInstanceof = (left, right) => {
    while (left) {
        if (left.__proto__ === right.prototype) return true;

        left = left.__proto__;
    }

    return false;
};
