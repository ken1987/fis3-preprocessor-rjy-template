var reg = /<link[\s\S]*?tmpl-data=('|")([\s\S]*?)\1[\s\S]*?>/g;
var tmplStart1 = '<!DOCTYPE html><html><head><link rel="import" href="';
var tmplStart2 = '?__inline"></head><body>'; //模板头
var tmplEnd = "</body></html>"; //模板尾部

module.exports = function(content, file, settings) {
    settings = settings || {};
    //模板包装过程
    content = tmplStart1 + (settings.headTemplate || '') + tmplStart2 + content + tmplEnd;

    //模板标记过程
    return content.replace(reg, function(str, _1, _2) {
        return '<!--rjy_template_start:' + _2 + '-->' + str + '<!--rjy_template_end-->';
    });
};
