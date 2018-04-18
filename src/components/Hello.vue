<script src="../../node_modules/_code-point-at@1.1.0@code-point-at/index.js"></script>
<template>
  <div class="hello">
    <!--<p>1.时间过滤器&ndash;&gt;{{3456789 | timeYYMMDDhhmmss('YYYY/MM/DD hh:mm:ss')}}</p>-->
    <!--<P>2.换算单位 B K M G T&ndash;&gt;{{1000000 | byteFormatter}}</P>-->
    <!--<p>3.判断返回值 yes or no&ndash;&gt;{{true | booleanFormatter("YES","NO")}}</p>-->
    <!--<p>4.总100所占得比列，取值为保留小数点位数，四舍五入&ndash;&gt;{{0.1423 | percentageFormatter(2)}}</p>-->
    <!--<p>5.数字添加逗号&ndash;&gt;{{12345678.124 | digitalInterval}}</p>-->
    <!--<p>6.没有自动添加小数点0.00 有一位小数添加 0.X0 两位 不做向上向下取整&ndash;&gt;{{1 | decimalRetention}}</p>-->
    <!--<p>7.组合 5 6 &ndash;&gt;{{123123.1231 | decimalRetention | digitalInterval}}</p>-->
    <p>{{true | booleanFormatter("YES","NO")}}</p>
    <p>{{123123123123 | byteFormatter}}</p>
    <p>{{123123123123 | decimalRetention}}</p>
    <p>{{123123123123 | digitalInterval}}</p>
    <p>{{1 | percentageFormatter}}</p>
    <p>{{5467567567 | timestampFormatter('YYYY/MM/DD HH:mm:ss')}}</p>
    <p>{{123123123123 | generateTime}}</p>
    <p> {{123123.1231 | decimalRetention | digitalInterval}}</p>
    <div>
      8.输入搜索值，过滤参数值，如果是配合后台就应该传参在后台做数据处理返回显示，这里做的是本地的
      <input type="text" v-model="searchValue">
      <table class="table">
        <thead>
          <tr>
            <td>名字</td>
            <td>生日</td>
            <td>地址</td>
            <td>喜欢的水果</td>
            <td>喜欢的电影明星</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in newUsers" :key="index">
            <td>{{item.name}}</td>
            <td>{{item.Birthday}}</td>
            <td>{{item.address}}</td>
            <td>{{item.Fruits}}</td>
            <td>{{item.Star}}</td>
          </tr>
        </tbody>
      </table>
      <div class="search_no" v-if="searchStatus">未搜索到内容</div>
    </div>
  </div>
</template>

<script>
//import timeYYMMDDhhmmss from '../filters/timestampFormatter' //时间戳转换过滤器
//import byteFormatter from '../filters/byteFormatter'  //换算单位 B K M G T
//import booleanFormatter from '../filters/booleanFormatter' //判断true=>渲染yes or false=>渲染no
//import percentageFormatter from '../filters/percentageFormatter' //参数为保留小数点位数 四舍五入 总1 占得比重
//import digitalInterval from '../filters/digitalInterval' //数字添加逗号
//import decimalRetention from '../filters/decimalRetention' //自动添加小数点0.00 两位 不做向上向下取整
// import conditions from '../filters/conditions'
//import * as  vueFilters from "../../upload_npm/dist/vue-filters_wang";
export default {
  name: 'hello',
  data() {
    return {
      dataList: [
        {
          name: '王先生',
          Birthday: '1994/9/7',
          address: '成都天府二街',
          Fruits: '苹果',
          Star: '杰森斯坦森'
        },
        {
          name: '张晓明',
          Birthday: '2000/4/2',
          address: '宜宾大观楼',
          Fruits: '香蕉',
          Star: '霍建华'
        },
        {
          name: '猪小明',
          Birthday: '1959/4/2',
          address: '成都天府一街',
          Fruits: '菠萝',
          Star: '周星驰'
        },
        {
          name: '佟大为',
          Birthday: '2049/4/2',
          address: '成都天府二街',
          Fruits: '苹果',
          Star: '甑子丹'
        },
        {
          name: '贺小书',
          Birthday: '1959/12/1',
          address: '成都天府三街',
          Fruits: '尿',
          Star: '周星驰'
        },
        {
          name: '猪小明',
          Birthday: '2012/4/2',
          address: '成都天府四街1',
          Fruits: '菠萝',
          Star: '周星驰'
        }
      ],
      searchValue: '',
      searchStatus: false
    }
  },
  created(){
     console.log(vueFilters);
  },
  computed: {
   newUsers: function() {
      let self = this;
      return self.dataList.filter(function(data) {
        if (data.Star.includes(self.searchValue)) {
          self.searchStatus = false;
          return data;
          return false;
        } else if (data.name.includes(self.searchValue)) {
          self.searchStatus = false;
          return data;
          return false;
        } else if (data.Birthday.includes(self.searchValue)) {
          self.searchStatus = false;
          return data;
          return false;
        } else if (data.address.includes(self.searchValue)) {
          self.searchStatus = false;
          return data;
          return false;
        } else if (data.Fruits.includes(self.searchValue)) {
          self.searchStatus = false;
          return data;
          return false;
        }else {
          self.searchStatus = true;
        }

      })
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
}
</script>

<style scoped>
p {
  text-align: left;
}

div {
  text-align: left;
}

table {
  border: 1px solid #EEE;
  width:500px;
}

table thead tr td {
  border: 1px solid #EEE;
}

table tbody tr td {
  border: 1px solid #EEE;
}
  .search_no{
    width:500px;
    text-align: center;
    height:100px;
    line-height: 100px;
    font-size:16px;
  }
</style>
