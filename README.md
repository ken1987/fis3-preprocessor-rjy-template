# fis3-preprocessor-rjy-template

模版状态及数据渲染解决方案。

>
标准化前，对模板打标记并可以包装html。
与fis3-postprocessor-rjy-template配合使用。

```script
npm install fis3-preprocessor-rjy-template -g
````

## fis-conf.js中使用

```javascript
fis.match('**.html', {
    preprocessor: fis.plugin('rjy-template',{
    	wrapHtml:true,
		headTemplate:"/components/head/head.tpl"
    })
});
```

##模板页中

`tmpl-data`可以通过以下方式传递数据：
1. 可以作为简单的状态值使用
2. 当数据较为复杂是，可以通过`url(path/to/your.json)`的方式引用json格式的文件，支持相对路径和绝对路径

```html
<!-- 简单状态 -->
<link rel="import" href="bd.tpl?__inline" tmpl-data="succuss">
<!-- 复杂数据结构 -->
<link rel="import" href="bd.tpl?__inline" tmpl-data="url(path/to/your.json)">
```

##配置

* `wrapHtml` 是否开启包装html的功能（目前只支持html5的声明），默认false
* `headTemplate` 模板`<head>`的路径，暂时不支持数据渲染功能

##待开发

* 需要支持默认数据引用规则
* 增加包装html相关配置
