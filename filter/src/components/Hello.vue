<template>
  <div class="hello">
    <p>1.时间过滤器-->{{3456789 | timeYYMMDDhhmmss('YYYY/MM/DD hh:mm:ss')}}</p>
    <P>2.换算单位 B K M G T-->{{1000000 | byteFormatter}}</P>
    <p>3.判断返回值 yes or no-->{{true | booleanFormatter("YES","NO")}}</p>
    <p>4.总100所占得比列，取值为保留小数点位数，四舍五入-->{{0.1423 | percentageFormatter(2)}}</p>
    <p>5.数字添加逗号-->{{12345678.124 | digitalInterval}}</p>
    <p>6.没有自动添加小数点0.00 有一位小数添加 0.X0 两位 不做向上向下取整-->{{1 | decimalRetention}}</p>
    <p>7.组合 5 6 -->{{123123.1231 | decimalRetention | digitalInterval}}</p>
  </div>
</template>

<script>
import timeYYMMDDhhmmss from '../filters/timestampFormatter' //时间戳转换过滤器
import byteFormatter from '../filters/byteFormatter'  //换算单位 B K M G T
import booleanFormatter from '../filters/booleanFormatter' //判断true=>渲染yes or false=>渲染no 
import percentageFormatter from '../filters/percentageFormatter' //参数为保留小数点位数 四舍五入 总1 占得比重 
import digitalInterval from '../filters/digitalInterval' //数字添加逗号
import decimalRetention from '../filters/decimalRetention' //自动添加小数点0.00 两位 不做向上向下取整

export default {
  name: 'hello',
  data() {
    return {

    }
  },
  filters: {
    timeYYMMDDhhmmss,
    byteFormatter,
    booleanFormatter,
    percentageFormatter,
    digitalInterval,
    decimalRetention
  }
}
</script>

<style scoped>
p {
  text-align: left;
}
</style>
