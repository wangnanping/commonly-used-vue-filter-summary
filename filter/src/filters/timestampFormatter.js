var moment = require('moment');    //npm install moment -s  插件
module.exports = function (timestamp, format) {//秒数转时间<span>{{ 时间秒数 | timestampFormat('YYYY/MM/DD') }}</span>
  var result;

  timestamp = parseInt(timestamp);

  if (!timestamp) {
    result = '-';
  } else if (format) {
    result = moment(timestamp).format(format);
  } else {
    result = moment(timestamp).format('YYYY-MM-DD HH:mm:ss');
  }
  return result;
};
