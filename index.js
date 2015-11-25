//模版
var tmplStart1 = '<!DOCTYPE html>\n<html>\n<head>'; //模板头1
var tmplStart2 = '\n</head>\n<body>'; //模板头2
var tmplEnd = "\n</body>\n</html>"; //模板尾部

//获取模版
var getTemplate = function(tUrl, dUrl, id) {
    if (tUrl) {
        return '<link rel="import" href="' + tUrl + '?__inline" tmpl-data="url=' + dUrl + '&id=' + id + '">';
    } else {
        return "";
    }
};

var reg = /<link\s.*?tmpl-data=('|")(.*?)\1.*?>/g;

module.exports = function(content, file, settings) {
    var s = settings || {};

    //模板包装过程
    if (s.wrapHtml) {
        var dataUrl = s.dataUrl || "";
        var path = file.subpathNoExt;

        content = tmplStart1 +
            getTemplate(s.headTemplate, dataUrl, path + ".head") +
            tmplStart2 +
            getTemplate(s.headerTemplate, dataUrl, path + ".header") +
            content +
            getTemplate(s.footerTemplate, dataUrl, path + ".footer") +
            tmplEnd;
    }

    //模板标记过程
    return content.replace(reg, function(str, _1, _2) {
        return '<!--rjy_template_start:' + _2 + '-->' + str + '<!--rjy_template_end-->';
    });
};
