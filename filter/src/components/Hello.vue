<template>
  <div class="hello">
      <p>1.时间过滤器-->{{3456789 | timeYYMMDDhhmmss('YYYY/MM/DD hh:mm:ss')}}</p>
      <P>2.换算单位 B K M G T-->{{1000000 | byteFormatter}}</P>
      <p>3.判断返回值 yes or no-->{{true |  booleanFormatter("YES","NO")}}</p>
      <p>4.总100所占得比列，取值为保留小数点位数，四舍五入-->{{0.1423 | percentageFormatter(2)}}</p>
  </div>
</template>

<script>
import timeYYMMDDhhmmss from '../filters/timestampFormatter' //时间戳转换过滤器
import byteFormatter from '../filters/byteFormatter'  //换算单位 B K M G T
import booleanFormatter from '../filters/booleanFormatter' //判断true=>渲染yes or false=>渲染no 
import percentageFormatter from '../filters/percentageFormatter' //参数为保留小数点位数 四舍五入 总1 占得比重 
export default {
  name: 'hello',
  data () {
    return {
     
    }
  },
  filters:{
     timeYYMMDDhhmmss,
     byteFormatter,
     booleanFormatter,
     percentageFormatter
  }
}
</script>

<style scoped>

</style>
