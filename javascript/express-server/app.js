const express = require('express');
const app = express();

const getData = async()=>{
    return await fetch('./db.json')
    .then(res => res.json())
};

let db = getData();

app.get('/',(req,res)=>{    //핸들러를 여러개 선언하고 싶으면 핸들러 안에 다시 핸들러 선언
    res.send('Server Connect');
});

app.get('/posts',(req,res)=>{
    res.send(db['posts']);
});

app.listen(3000,()=>{
    console.log('서버가 실행됩니다.');
    console.log('http://localhost:3000');   //실제 서버에 접근 가능한 주소
});