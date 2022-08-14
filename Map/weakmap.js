let ele = document.getElementById('title');

// map 强引用集合，weakmap 保存对象的弱引用
const map = new Map();

map.set(ele, 'h1 val');

// 清楚 DOM 元素
document.querySelector('body').removeChild(ele);
ele = null;

console.log('[ ele ]', [...map.keys()][0]); // DOM 元素被移除之后，依然可以从 Map 中取回（引用依然存在）
console.log('[ map size ]', map.size); // 1

