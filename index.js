module.exports = function(content, file, settings) {
    return content.replace(/<link[\s\S]*?tmpl-id=('|")([\s\S]*?)\1[\s\S]*?>/g, function(str, _1, _2) {
        return '<!--@@tmpl_start:' + _2 + '-->' + str + '<!--@@tmpl_end-->';
    });
};
