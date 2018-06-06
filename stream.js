const fs = require('fs');
const path = require('path');

var targetDir = path.resolve('common');

var destDir = path.resolve('copyCommon');
// fs.createWriteStream(destDir);
// console.info(destDir);
// return;
fs.readdir(destDir,function(err,files){
    if(err){
        process.exit();
    }
});

fs.readdir(targetDir, function(err,files){
    if(err){
        console.error(err);
    }
    files.forEach(function(file){
        var filePath = path.resolve(targetDir,`${file}`);

        var readStream = fs.createReadStream(filePath);

        var writeStream = fs.createWriteStream(path.resolve(destDir,file));

        readStream.pipe(writeStream);
    })

})