var fs = require('fs');
fs.readFile('list.json', 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
    var json = JSON.parse(data);
    var deps = {};
    var isBower = !!json.pkgMeta;
    for(var index in json.dependencies) {
        if (json.dependencies.hasOwnProperty(index)) {
            var attr = isBower ? json.dependencies[index].pkgMeta : json.dependencies[index];
            deps[index] = attr.version;
        }
    }

    fs.writeFile('deps.json', JSON.stringify(deps))
});