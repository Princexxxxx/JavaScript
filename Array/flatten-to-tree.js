/**
 * 优雅，但效率垃圾
 *
 * @param {*} pid
 * @param {*} list
 */
const flattenTreeDFS = (pid, list) => {
    return list
        .filter((item) => item.pid === pid)
        .map((item) => {
            return {
                ...item,
                children: flattenTreeDFS(item.id, list),
            };
        });
};

/**
 * 扁平数据结构转Tree
 *
 * 借助 Map, 存储节点对应关系，只遍历一次
 *
 * @param {*} list
 */
const arrayToTree = (items) => {
    const result = []; // 存放结果集
    const map = {};

    for (const item of items) {
        const { id, pid } = item;

        map[id] = {
            ...item,
            children: map[id]?.children || [],
        };

        const node = map[id];

        if (pid === 0) {
            result.push(node);
        } else {
            // !还没扫到父节点，先预留，将子节点收集
            if (!map[pid]) {
                map[pid] = {
                    children: [],
                };
            }
            map[pid].children.push(node);
        }
    }

    console.log('[ result ]', JSON.stringify(result, null, 4));
    return result;
};

const arr = [
    { id: 1, name: '部门1', pid: 0 },
    { id: 2, name: '部门2', pid: 1 },
    { id: 3, name: '部门3', pid: 1 },
    { id: 4, name: '部门4', pid: 3 },
    { id: 5, name: '部门5', pid: 4 },
    { id: 6, name: '部门5', pid: 7 },
    { id: 7, name: '部门5', pid: 5 },
];

arrayToTree(arr);
