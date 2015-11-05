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

**`tmpl-id`表示引入json配置文件后此模版解析时用到数据的字段名**

```html
<link rel="import" href="/path/template.tpl?__inline" tmpl-id='tmpl'>
```
