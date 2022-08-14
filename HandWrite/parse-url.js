// ------------- ❌ 如果提供initialValue，从索引0开始。 -------------
const url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC';
const search = url.split('?')[1];
const decodeSearchStr = decodeURIComponent(search);
const paris = decodeSearchStr.split('&');

paris
    .map((item) => {
        const [key, val] = item.split('=');

        return {
            [key]: val,
        };
    })
    .reduce((accumulator, currentValue, index) => {
        console.log(`accumulator-${index}:`, accumulator);

        return Object.assign(accumulator, currentValue);
    }),
    {};

// ------------- ✅ 如果没有提供initialValue，reduce 会从索引1的地方开始执行 callback 方法，跳过第一个索引。 -------------
paris
    .map((item) => {
        const [key, val] = item.split('=');

        return {
            [key]: val,
        };
    })
    .reduce((accumulator, currentValue, index) => {
        console.log(`accumulator-${index}:`, accumulator);

        return Object.assign(accumulator, currentValue);
    });

// .reduce((accumulator, currentValue, index) => Object.assign(accumulator, currentValue));

/**
 * 考察解析URL参数类型处理
 *
 * @param {*} url
 */
const parseUrl = (url) => {
    const [_, queryStr] = url.split('?');
    const pairs = queryStr.split('&');

    return pairs.reduce((obj, pair) => {
        let [k, v] = pair.split('=');

        // 坑1：解码URL
        v = decodeURIComponent(v);

        // 坑2：解析JSON
        try {
            v = JSON.parse(v);
        } catch (err) {
            v = v;
        }

        // 坑3：处理数组
        if (k.includes('[]')) {
            // debugger;
            k = k.slice(0, -2);

            if (obj[k]) {
                v = [...obj[k], v];
            } else {
                v = [v];
            }
        }

        return Object.assign(obj, {
            [k]: v,
        });
    }, {});
};

const parsedUrl = parseUrl(
    `https://www.youzan.com?name=coder&age=20&callback=https%3A%2F%2Fyouzan.com%3Fname%3Dtest&list[]=a&list[]=b&json=%7B%22str%22%3A%22abc%22,%22num%22%3A123%7D`
);
console.log('[ parsedUrl ]', parsedUrl);
