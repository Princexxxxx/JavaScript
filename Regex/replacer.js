function replacer(match, p1, p2, offset, string) {
    console.log('[ match ]', match);
    console.log('[ p1 ]', p1);
    console.log('[ p2 ]', p2);

    // p1 is nondigits, p2 digits, and p3 non-alphanumerics
    return [p1, p2].join(' - ');
}

console.log('[ 4.1 ]', '4.0.52'.replace(/(\d+.\d+)(.\d+)/, replacer));
// console.log('[ 4.1 ]', '4.1'.replace(/(\d+.\d+)(.\d+)/, replacer));
