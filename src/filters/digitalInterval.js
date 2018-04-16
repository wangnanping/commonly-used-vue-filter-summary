module.exports = (value) => {  //数字添加逗号
    let result;
    if (!/^(\+|-)?(\d+)(\.\d+)?$/.test(value)) {
        return value;
    }
    let a = RegExp.$1, b = RegExp.$2, c = RegExp.$3;
    let re = new RegExp("(\\d)(\\d{3})(,|$)");
    while (re.test(b)) b = b.replace(re, "$1,$2$3");
    result = a + "" + b + "" + c;
    return result
}