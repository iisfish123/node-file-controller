# node-file-controller
控制文件

#### pathTest.js
path模块的path.join()和path.resolve()
node pathTest

#### stream.js
利用读写流，实现把common的文件拷贝到copyCommon，
注意：createWriteStream(path)是要指定具体文件，而非dir目录。
但是path+filename能直接创建filename的文件
node stream