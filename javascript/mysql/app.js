//server역할
require('dotenv').config({path:'./db/mysql.env'});
const express = require('express');
const app = express();
const mysql = require('./db.js');

app.use(express.json({
    limit : '50mb'
}));

app.listen(3000,()=>{
    console.log('server start~!!!');
});

//전체조회
app.get('/customers',async(req,res)=>{
    let list = await mysql.query('customerList');
    res.send(list);
});

//회원추가
app.post('/customers',async(req,res)=>{
    let data = req.body.param;
    let result = await mysql.query('customerInsert',data);
    res.send(result);
});

//단건조회
app.get('/customers/:id',async(req,res)=>{
    let data = req.params.id;
    let list = await mysql.query('customerInfo',data);
    res.send(list[0]);      //select은 배열로 돌아오는데 이를 단건으로 조회하기 위해서는 인덱스[0]을 설정해서 제한을 두는 것이 좋음
});

//회원수정
app.put('/customers/:id',async(req,res)=>{
    let datas = [req.body.param,req.params.id];     //물음표가 2개 이상 사용되었기때문에 배열로 나열해서 넣어줌(물음표 순서대로 넣어주면 됨)
    let result = await mysql.query('customerUpdate',datas);
    res.send(result);
});

//회원삭제
app.delete('/customers/:id/:name',async(req,res)=>{
    let datas = [req.params.id,req.params.name];
    let result = await mysql.query('customerDelete',datas);
    res.send(result);
});