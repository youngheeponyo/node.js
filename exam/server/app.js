require('dotenv').config({path:'./db/mysql.env'});
const express = require('express');
const app = express();
const mysql = require('./db.js');

app.use(express.json({
    limit : '50mb'
}));

app.listen(4000,()=>{
    console.log('Server Start~!');
});

app.get('/board',async(req,res)=>{
    let list = await mysql.query('boardList');
    res.send(list);
});

app.get('/board/:no',async(req,res)=>{
    let data = req.params.no;
    let result = await mysql.query('commentCount',data);
    res.send(result);
});

app.get('/comment/:no',async(req,res)=>{
    let data = req.params.no;
    let list = await mysql.query('commentList',data);
    res.send(list);
});

app.get('/board/:no',async(req,res)=>{
    let data = req.params.no;
    let list = await mysql.query('boardInfo',data);
    res.send(list);
});

app.put('/board/:no',async(req,res)=>{
    let datas = [req.body.param,req.params.no];
    let result = await mysql.query('updateBoard',datas);
    res.send(result);
});

app.post('/board',async(req,res)=>{
    let data = req.body.param;
    let result = await mysql.query('insertBoard',data);
    res.send(result);
});

