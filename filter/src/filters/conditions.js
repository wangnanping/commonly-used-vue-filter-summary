//过滤数据筛选 自定义过滤器
module.exports = (items) => {
    console.log(items);
//   let searchRegex = new RegExp(searchValue, 'i');
//   let arr = [];
//   for (let i = 0, j = items.length; i < j; i++) {
//     arr[i] = {};
//     arr[i].contacters = [];
//     for (let item = 0, len = items[i].contacters.length; item < len; item++) {
//       if (searchRegex.test(items[i].contacters[item].name) || searchRegex.test(items[i].contacters[item].enterpriseName) || searchRegex.test(items[i].contacters[item].phoneNumber) || searchRegex.test(items[i].contacters[item].uniqueID)) {
//         arr[i].firstLetter = items[i].firstLetter;
//         arr[i].contacters.push(items[i].contacters[item]);
//       }
//     }
//   }
  return items;
}
