let date = new Date();
let year = date.getFullYear();
let month = date.getMonth()+1;
let day = date.getDay();

let msg = `${year}년
${month}월
${day}일`;  //엔터도 인식을 함

console.log(msg);