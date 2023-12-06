require('dotenv').config({path:'./db/usersql.env'});
const express = require('express');
const app = express();
const mysql = require('./db.js');

app.use(express.json({
    limit : '50mb'
}));

app.use(express.static('dist'));

app.listen(5000,()=>{
    console.log('서버가 돌아가는 중입니다~');
});

app.get('/',(req,res)=>{
    res.sendFile('dist/index.html');
});

//전체 조회
app.get('/api/tusers',async(req,res)=>{
    let list = await mysql.query('userList');
    res.send(list);
});
//단건 조회
app.get('/api/tusers/:uno',async(req,res)=>{
    let data = req.params.uno;
    let list = await mysql.query('selectUser',data);
    res.send(list);
});
//회원 추가
app.post('/api/tusers',async(req,res)=>{
    let data = req.body.param;
    let result = await mysql.query('insertUser',data);
    res.send(result);
});
//회원 수정
app.put('/api/tusers/:uno',async(req,res)=>{
    let datas = [req.body.param,req.params.uno];
    let result = await mysql.query('updateUser',datas);
    res.send(result);
});
//회원 삭제
app.delete('/api/tusers/:uid/:upw',async(req,res)=>{
    let datas = [req.params.uid,req.params.upw];
    let result = await mysql.query('deleteUser',datas);
    res.send(result);
});