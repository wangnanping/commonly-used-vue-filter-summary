# filter 部分使用的过滤

> 时间过滤器 timestampFormatter("YYYY-MM-DD HH:mm:ss") or timestampFormatter("YYYY-MM-DD") or timestampFormatter("HH:mm:ss") or timestampFormatter("hh:mm:ss")
{{5467567567 | timestampFormatter('YYYY/MM/DD HH:mm:ss')}} // 1970/03/05 14:46:07

> 换算单位
{{123123123123 | byteFormatter}} // 114.67 G

> 判断返回值
{{true | booleanFormatter("YES","NO")}} // YES

>总100 ，改变总值 计算所占得比例
{{1 | percentageFormatter}} // 1%

> 数字添加逗号
{{123123123123 | digitalInterval}} // 123,123,123,123

> 没有自动添加小数点0.00 不做向上向下取整
{{123123123123 | decimalRetention}} //123123123123.00

> 组合
{{123123.1231 | decimalRetention | digitalInterval}} // 123,123.12

>年月日
{{123123123123 | generateTime}} //  1973年11月26日

> 搜索过滤表

# filters-wang  ->文件夹 upload_npm

#### 安装

```
npm install filters-wang -s-d
```

#### 使用

```
import * as  vueFilters from "filters-wang"; // 全局使用

Object.keys(vueFilters).forEach(key => {
  Vue.filter(key, vueFilters[key]);
});

直接使用过滤器
如：{{11111111 | digitalInterval}} // 11,111,111
```

```
import * as  vueFilters from "路径/vue-filters-wang.js"  // 局部使用

filters: {
    "digitalInterval": vueFilters.digitalInterval
}

直接使用过滤器
如：{{11111111 | digitalInterval}} // 11,111,111
```
