module.exports = function (number, digits) { //取值为保留小数点得位数 共100  所占得百分比
  var result;

  if (digits === null || digits === undefined) {
    digits = 2;
  }

  digits = parseInt(digits);

  if (number === null || number === '' || isNaN(number)) {
    result = '-';
  } else {
    result = Math.round(number * Math.pow(10, digits) * 100) / Math.pow(100, digits) + '%'; //改变后面得100 ，改变总值 计算所占得比例
  };

  return result;
};
