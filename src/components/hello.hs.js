//import timeYYMMDDhhmmss from '../filters/timestampFormatter' //时间戳转换过滤器
//import byteFormatter from '../filters/byteFormatter'  //换算单位 B K M G T
//import booleanFormatter from '../filters/booleanFormatter' //判断true=>渲染yes or false=>渲染no
//import percentageFormatter from '../filters/percentageFormatter' //参数为保留小数点位数 四舍五入 总1 占得比重
//import digitalInterval from '../filters/digitalInterval' //数字添加逗号
//import decimalRetention from '../filters/decimalRetention' //自动添加小数点0.00 两位 不做向上向下取整
// import conditions from '../filters/conditions'
//import * as  vueFilters from "../../upload_npm/dist/vue-filters_wang";
export default {
  data() {
    return {
      dataList: [
        {
          name: "王先生",
          Birthday: "1994/9/7",
          address: "成都天府二街",
          Fruits: "苹果",
          Star: "杰森斯坦森"
        },
        {
          name: "张晓明",
          Birthday: "2000/4/2",
          address: "宜宾大观楼",
          Fruits: "香蕉",
          Star: "霍建华"
        },
        {
          name: "猪小明",
          Birthday: "1959/4/2",
          address: "成都天府一街",
          Fruits: "菠萝",
          Star: "周星驰"
        },
        {
          name: "佟大为",
          Birthday: "2049/4/2",
          address: "成都天府二街",
          Fruits: "苹果",
          Star: "甑子丹"
        },
        {
          name: "贺小书",
          Birthday: "1959/12/1",
          address: "成都天府三街",
          Fruits: "尿",
          Star: "周星驰"
        },
        {
          name: "猪小明",
          Birthday: "2012/4/2",
          address: "成都天府四街1",
          Fruits: "菠萝",
          Star: "周星驰"
        }
      ],
      searchValue: "",
      searchStatus: false
    };
  },
  created() {
    // console.log(vueFilters);
  },
  computed: {
    newUsers: function() {
      let self = this;
      return self.dataList.filter(function(data) {
        if (data.Star.includes(self.searchValue)) {
          self.searchStatus = false;
          return data;
        } else if (data.name.includes(self.searchValue)) {
          self.searchStatus = false;
          return data;
        } else if (data.Birthday.includes(self.searchValue)) {
          self.searchStatus = false;
          return data;
        } else if (data.address.includes(self.searchValue)) {
          self.searchStatus = false;
          return data;
        } else if (data.Fruits.includes(self.searchValue)) {
          self.searchStatus = false;
          return data;
        } else {
          self.searchStatus = true;
        }
      });
    }
  },
  filters: {
    //    "timeYYMMDDhhmmss": vueFilters.timestampFormatter
    //    timeYYMMDDhhmmss,
    //    byteFormatter,
    //    booleanFormatter,
    //    percentageFormatter,
    //    digitalInterval,
    //    decimalRetention,
    // conditions
  }
};
