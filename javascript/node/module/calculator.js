const defaultNum = 1;

function add(num1,num2){
    return num1+num2;
}

function minus(num1, num2){
    return num1-num2
}

function multi(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    return num1/num2;
}

module.exports={
    defaultNum,
    add,
    minus,
    multi,
    divide
}   //중괄호 안에서 적힌 값은 객체이기 때문에 키와 값 모두 필요한데 이름이 동일하면 하나면 써서 중복을 제거
//이렇게 받으면 require로 받고 그냥 export를 하면 import로 받음

