const url = require('url');
let legercy = url.parse('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');    //권장되지 않는 방법
console.log(legercy);

let whatwg = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');   //CORS
console.log(whatwg);
console.log(whatwg.searchParams.get('query'));