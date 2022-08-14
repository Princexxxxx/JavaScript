var values = ['hello', 'world'];
let str = '处{0}位置{1}';

while (/{\d+}/.test(str)) {
    str = str.replace(/({[\d]*})/, (match, p1, p2, p3, offset, string) => {
        const index = parseInt(match.replace(/{(\d+)}/, '$1'));

        return values[index];
    });
}

console.log(str); // abc - 12345 - #$*%

if (key.includes('{0}')) {
    console.log('[ key ]', this, values);

    return key.replace(/^(.*?\.)(.*)$/, '$2').replace('{0}', values.toString());
}
