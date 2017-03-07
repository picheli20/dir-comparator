var fs = require('fs');

var projetoPrincipal = '<<PATH>>';
var projetoSec = '<<PATH>>';
var final = '<<PATH>>/text.txt';
var projetoPrincipalDir;

var projetoSecDir;

var obj = [];
var obj2 = [];
var diff = [];

fs.readdir(projetoPrincipal, (err, files) => {
  projetoPrincipalDir = files;
  files.map(function(item){
    obj.push(item);
  });

  fs.readdir(projetoSec, (err, filesSec) => {
    projetoPrincipalDir = filesSec;
    projetoPrincipalDir.map(function(item){
      obj2.push(item);
    });

    obj.map(function(item){
      if(obj2.indexOf(item) === -1){
        diff.push(item);
      }
    });

    var bigObj = {
      princial: obj,
      secundario: obj2,
      diff: diff
    }

    fs.writeFile(final, JSON.stringify(bigObj), function(err) {
        if(err) {
            return console.log(err);
        }

        console.log('The file was saved!');
    }); 


    console.log('  ' + diff.length + ' diffs found!');

    console.log(diff);

  });
});
