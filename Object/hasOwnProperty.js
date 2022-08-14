const triangle = { a: 1, b: 2, c: 3 };

function ColoredTriangle() {
    this.color = 'red';
}

ColoredTriangle.prototype = Object.create(triangle);

const obj = new ColoredTriangle();

for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
        console.log(`自身枚举属性 -> obj.${prop} = ${obj[prop]}`);
    } else {
        console.log(`继承枚举属性 -> obj.${prop} = ${obj[prop]}`);
    }
}

console.log(
    '[ Object.getOwnPropertyNames(obj) ]',
    Object.getOwnPropertyNames(obj)
);
