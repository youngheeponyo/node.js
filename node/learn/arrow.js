//함수선언식(선언만 되어있다면 어디서든 사용 가능) var과 비슷한 방식이라 덮어쓰기 가능
function hello(name){
    return "Hello, " + name;
}
//재선언
function hello(msg){
    return "msg, Hello : " + msg;
}
console.log(hello("world"));

//함수 표현식(해당 함수가 사용되기 전에 선언이 되어있어야 사용이 가능, 함수를 사용하기 전 위에 선언이 되어있어야함)
const message  = function(msg){
    return "msg : " + msg;
}

//화살표 함수(this를 가질 수 없어서 this를 사용하지 못함(window가 언급됨),this가 필요하다면 일반 함수를 사용해야함=>이벤트 함수(e))
let arrHello = (name)=>{return "Hello, " + name;}
//매개변수가 하나고 실행되는 코드가 한줄이라면 괄호도 다 생략이 가능함
arrHello = name => "Hello, " + name;

let arrMessage = (msg) => {return "msg : " + msg;}
arrMessage = msg => "msg : " + msg;

arrMessage = ()=>{ 
    let today = new Date().getDay();
    console.log("오늘 날짜 : " + today)
}
