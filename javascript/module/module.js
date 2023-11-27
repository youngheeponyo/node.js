const {add,minus} = require('./calculator'); //같은 폴더 안에 있는 파일을 찾을 때는 ./이며 다른 파일은 ../로 경로 구분
console.log(add(10,25));
console.log(minus(25,3));