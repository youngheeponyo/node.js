let names = ["Hong","Kang","Adward","Lee"];
names.sort();
console.log(names);
names.reverse();
console.log(names);

let nums = [40,100,1,5,25,10];
//nums.sort();
nums.sort((a,b)=>{  //sort는 문자에 특화되어 있는 값이라 숫자의 경우에는 따로 설정을 해줘야 함
    return a-b; //결과가 양수인 경우 첫번째 매개변수가 더 크다고 인식
});
console.log(nums);

