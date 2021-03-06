// ------------- ❌ 如果提供initialValue，从索引0开始。 -------------
const url =
    'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC';
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
