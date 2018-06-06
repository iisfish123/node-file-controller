var fs = require('fs');
var pathTest = require('path');

var filename = 'image';

/***
 * .join()是单纯把两个路径拼合在一起，没有逻辑(参数多个)
 *
 */
// console.info(path.join('../../',filename));//    ..\..\image
// console.info(path.join(filename));//    image
// console.info(path.join(__dirname,'dest',filename));//    D:\vhost\node-file-controller\dest\image

/**
 * .resolve()总是返回一个以相对于当前的工作目录（working directory）的绝对路径。
 *
 */
// console.info(path.resolve('a', filename));//   D:\vhost\node-file-controller\a\image
// console.info(path.resolve(__dirname, 'dest' ,filename));//    D:\vhost\node-file-controller\dest\image
// console.info(path.resolve('../../',filename));//   D:\image
// console.info(path.resolve(filename));//    D:\vhost\node-file-controller\image
// console.info(path.resolve('/',filename));//    D:\vhost\node-file-controller\image

