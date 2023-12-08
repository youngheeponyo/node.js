require('dotenv').config({path:'./db/empsql.env'});     //환경변수 : 프로젝트 전반적인 부분에서 사용하기 때문에 첫줄에 적어 먼저 읽어들일 수 있도록 해야함
const express = require('express');
const app = express();
const mysql = require('./db.js');

app.use(express.json({
    limit : '50mb'
}));

app.listen(3000,()=>{
    console.log('Server Start~!, http://localhost:3000/emp');
});

//전체조회
app.get('/emp',async(req,res)=>{
    let list = await mysql.query('empList');
    res.send(list);
});

app.get('/depts',async(req,res)=>{
    let list = await mysql.query('deptList');
    res.send(list);
})
//단건조회
app.get('/emp/:no',async(req,res)=>{
    let data = req.params.no;
    let emp = await mysql.query('empInfo',data);
    res.send(emp);
});
//등록(들어갈 값을 미리 정해놓고 for문을 돌려서 필요한 값만 가져오는 방법도 있음, 특정 column에 대해서는 값을 지정해줘야함(9999-01-01))
app.post('/emp',async(req,res)=>{
    let data = req.body.param;

    let emp = {'emp_no' : data.emp_no,'first_name':data.first_name,'last_name':data.last_name,'gender':data.gender,'hire_date':data.hire_date};
    let dept = {'emp_no' : data.emp_no,'dept_no':data.dept_no,'from_date':data.from_date,'to_date':data.to_date};
    let sal = {'emp_no' : data.emp_no,'salary':data.salary,'from_date':data.from_date,'to_date':data.to_date};

    let result = await mysql.query('insertEmp',emp);
    let result2 = await mysql.query('insertDept',dept);
    let result3 = await mysql.query('insertSal',sal);
    res.send([result,result2,result3]);
});
//수정
app.patch('/emp/:no',async(req,res)=>{
    let datas = [req.body.param,req.params.no];
    let result = await mysql.query('updateEmp',datas);
    res.send(result);
});

//퇴사
app.delete('/emp/:no',async(req,res)=>{
    let data = [req.body.param.to_date,req.params.no];
    let result = await mysql.query('deleteEmp',data);
    res.send(result);
});

//전체 수정
app.put('/emp/:no',async(req,res)=>{
    let datas = [req.body.param,req.params.no];
    let result = await mysql.query('updateAll',datas);
    res.send(result);
})