module.exports = (val) => { //保留两位小数 不做向上向下取 自动添加小数0.00
    let ArrayVal = Number(val).toString().split('.');
    let Decimalpoint = '';
    if (ArrayVal[1]) {
        if (ArrayVal[1].length == 1) {
            Decimalpoint = `${ArrayVal[1]}0`;
        } else if (ArrayVal[1].length == 2) {
            Decimalpoint = ArrayVal[1];
        } else if (ArrayVal[1].length >= 3) {
            Decimalpoint = ArrayVal[1].substring(0, 2);
        }
    } else {
        Decimalpoint = '00'
    };
    return `${ArrayVal[0]}.${Decimalpoint}`;
}