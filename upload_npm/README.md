# filter 部分使用的过滤

> 时间过滤器 timeYYMMDDhhmmss

> 换算单位   byteFormatter

> 判断返回值   booleanFormatter

> 取值为保留小数点位数，四舍五入   percentageFormatter

> 数字添加逗号   digitalInterval

> 没有自动添加小数点0.00 不做向上向下取整   decimalRetention

> 组合 5 6   {{123123.1231 | decimalRetention | digitalInterval}}

>年月日 generateTime

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
