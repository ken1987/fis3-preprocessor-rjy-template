# fis3-preprocessor-rjy-template

纯前端的模版动态加载方案。

>标准化前对模版进行预处理。
>与fis3-postprocessor-rjy-template配合使用。

```script
npm install fis3-preprocessor-rjy-template -g
````

## fis-conf.js中使用

```javascript
fis.match('**.html', {
    preprocessor: fis.plugin('rjy-template')
});
```

##模板页中

**`tmpl-id`表示解析模版时对应的配置中的数据的字段名**
**`tmpl-config`表示配置文件路径，可以是相对路径或者绝对路径**

```html
<!--tmpl-config="/path/config.json"-->
<link rel="import" href="/path/template1.tpl?__inline" tmpl-id='t1'>
<link rel="import" href="/path/template2.tpl?__inline" tmpl-id='t2'>
```
