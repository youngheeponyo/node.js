//filter(원본 데이터에서 필터링을 하여 길이가 줄어들 수 있음)
let words = ["spray","limit","elite","exuberant","paresent"];

let result = words.filter(function(a,b,c,d){
    //console.log(a,b,c,d);   //변수가 없더라도 오류가 안나고 실제 있는 값은 보여주고 나머지는 undefined로 처리
});

result = words.filter(function(word,idx,arry){
    return word.length > 6;
});

console.log(result,words);
//map(길이가 줄어들지 않고 안에 들어가있는 데이터의 변경, 수정, 삭제)
let users = [
    {
        id:100,
        name:'Hong'
    },
    {
        id:200,
        name:'Kang'
    },
    {
        id:300,
        name:'Lee'
    }
]

result = users.map(function(user){
    // user.grade = user.id == 200 ? 'VIP' :'일반';
    // return user;     이렇게 하면 users 자체의 값도 변경이 됨
    return{
        id:user.id,
        name:user.name,
        grade:user.id == 200 ? 'VIP' :'일반'
    }
});

console.log(users, result);

