const moment = require("moment");
const vueFilters = {
  booleanFormatter: (boolean, trueText, falseText) => {
    let result;
    trueText = trueText || "Yes";
    falseText = falseText || "No";
    if (boolean === null || boolean === undefined || boolean === "") {
      result = "-";
    } else {
      result = boolean ? trueText : falseText;
    }
    return result;
  },
  byteFormatter: (size) => {
    let result;
    switch (true) {
      case (size === null || size === "" || isNaN(size)):
        result = "-";
        break;
      case (size >= 0 && size < 1024):
        result = size + " B";
        break;
      case (size >= 1024 && size < Math.pow(1024, 2)):
        result = Math.round(size / 1024 * 100) / 100 + " K";
        break;
      case (size >= Math.pow(1024, 2) && size < Math.pow(1024, 3)):
        result = Math.round(size / Math.pow(1024, 2) * 100) / 100 + " M";
        break;
      case (size >= Math.pow(1024, 3) && size < Math.pow(1024, 4)):
        result = Math.round(size / Math.pow(1024, 3) * 100) / 100 + " G";
        break;
      default:
        result = Math.round(size / Math.pow(1024, 4) * 100) / 100 + " T";
    }
    return result;
  },
  decimalRetention: (val) => {
    let ArrayVal = Number(val).toString().split(".");
    let Decimalpoint = "";
    if (ArrayVal[1]) {
      if (ArrayVal[1].length == 1) {
        Decimalpoint = `${ArrayVal[1]}0`;
      } else if (ArrayVal[1].length == 2) {
        Decimalpoint = ArrayVal[1];
      } else if (ArrayVal[1].length >= 3) {
        Decimalpoint = ArrayVal[1].substring(0, 2);
      }
    } else {
      Decimalpoint = "00";
    }
    ;
    return `${ArrayVal[0]}.${Decimalpoint}`;
  },
  digitalInterval: (value) => {
    let result;
    if (!/^(\+|-)?(\d+)(\.\d+)?$/.test(value)) {
      return value;
    }
    let a = RegExp.$1, b = RegExp.$2, c = RegExp.$3;
    let re = new RegExp("(\\d)(\\d{3})(,|$)");
    while (re.test(b)) b = b.replace(re, "$1,$2$3");
    result = a + "" + b + "" + c;
    return result;
  },
  percentageFormatter: (number, digits) => {
    let result;
    if (digits === null || digits === undefined) {
      digits = 2;
    }
    digits = parseInt(digits);
    if (number === null || number === "" || isNaN(number)) {
      result = "-";
    } else {
      result = Math.round(number * Math.pow(10, digits) * 100) / Math.pow(100, digits) + "%"; //改变后面得100 ，改变总值 计算所占得比例
    }
    ;
    return result;
  },
  timestampFormatter: (timestamp, format) => {
    let result;
    timestamp = parseInt(timestamp);
    if (!timestamp) {
      result = "-";
    } else if (format) {
      result = moment(timestamp).format(format);
    } else {
      result = moment(timestamp).format("YYYY-MM-DD HH:mm:ss");
    }
    return result;
  },
  generateTime: (val) => {
    if (!val) {
      return val;
    }
    let d = new Date(val);
    return d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日";
  }
};
module.exports = vueFilters;

