module.exports = (boolean, trueText, falseText) => {  //判断返回yes or no
    let result;

    trueText = trueText || 'Yes';
    falseText = falseText || 'No';

    if (boolean === null || boolean === undefined || boolean === '') {
      result = '-';
    } else {
      result = boolean ? trueText : falseText;
    }

    return result;
  };
