let array = [1,2,3];
let String = "Hello";
//[1,2,3,"H","e","l","l","o"] 이렇게 만들고 싶을 때
//이렇게 사용해도 되지만 좀 더 편하게 사용하기 위해 펼침연산자를 사용
// let newArray = [];
// for(let value of array){
//     newArray.push(value);
// }
// for(let value of String){
//     newArray.push(value);
// }
// console.log(newArray);

//펼침연산자
let newArray = [...array,...String];
console.log(newArray);