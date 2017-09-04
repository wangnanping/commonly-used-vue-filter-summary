<template>
  <div class="hello">
    <p>1.时间过滤器-->{{3456789 | timeYYMMDDhhmmss('YYYY/MM/DD hh:mm:ss')}}</p>
    <P>2.换算单位 B K M G T-->{{1000000 | byteFormatter}}</P>
    <p>3.判断返回值 yes or no-->{{true | booleanFormatter("YES","NO")}}</p>
    <p>4.总100所占得比列，取值为保留小数点位数，四舍五入-->{{0.1423 | percentageFormatter(2)}}</p>
    <p>5.数字添加逗号-->{{12345678.124 | digitalInterval}}</p>
    <p>6.没有自动添加小数点0.00 有一位小数添加 0.X0 两位 不做向上向下取整-->{{1 | decimalRetention}}</p>
    <p>7.组合 5 6 -->{{123123.1231 | decimalRetention | digitalInterval}}</p>
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
    </div>
  </div>
</template>

<script>
import timeYYMMDDhhmmss from '../filters/timestampFormatter' //时间戳转换过滤器
import byteFormatter from '../filters/byteFormatter'  //换算单位 B K M G T
import booleanFormatter from '../filters/booleanFormatter' //判断true=>渲染yes or false=>渲染no 
import percentageFormatter from '../filters/percentageFormatter' //参数为保留小数点位数 四舍五入 总1 占得比重 
import digitalInterval from '../filters/digitalInterval' //数字添加逗号
import decimalRetention from '../filters/decimalRetention' //自动添加小数点0.00 两位 不做向上向下取整
// import conditions from '../filters/conditions'
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
          address: '成都天府四街',
          Fruits: '菠萝',
          Star: '周星驰'
        }
      ],
      searchValue: ''
    }
  },
  computed: {
    newUsers: function() {
      let self = this;
      // if (self.searchValue) {
        return self.dataList.filter(function(data) {
          return data.Star.indexOf(self.searchValue) !== -1;
          // switch (self.searchValue) {
          //   case (data.name.indexOf(self.searchValue) !== -1):
          //     return data
          //     break
          //   case (data.Birthday.indexOf(self.searchValue) !== -1):
          //     return data
          //     break
          //   case (data.address.indexOf(self.searchValue) !== -1):
          //     return data
          //     break
          //   case (data.Fruits.indexOf(self.searchValue) !== -1):
          //     return data
          //     break
          //   case (data.Star.indexOf(self.searchValue) !== -1):
          //     return data
          //     break
          // }
        })
      // } else {
      //   return self.dataList
      // }

    }
  },
  filters: {
    timeYYMMDDhhmmss,
    byteFormatter,
    booleanFormatter,
    percentageFormatter,
    digitalInterval,
    decimalRetention,
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
}

table thead tr td {
  border: 1px solid #EEE;
}

table tbody tr td {
  border: 1px solid #EEE;
}
</style>
