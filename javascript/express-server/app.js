const fs = require('fs');
const express = require('express');
const userRouter = require('./user.js');
const app = express();

app.use('/user',userRouter);
app.use('/public',express.static('image'));
app.use(function(err,req,res,next){
    res.status(500).json({statusCode:res.statusCode,errMessage:err.errMessage});
});

app.get('/error',(req,res,next)=>{
    next(new Error('Process Fail! Check Data!'));
});

const jsonFile = fs.readFileSync('db.json');
const jsonData = JSON.parse(jsonFile);
const getData = (target, where)=>{
    let data = jsonData[target];
    if(Array.isArray(data)){        //profile은 배열이 아니라서 for of가 반복될 수 없기때문에 코드상 오류가 날 수 있어서 해당 데이터를 배열인지 아닌지 체크하기 위해 밖에 if문을 써줌
        let list = data;
        for(let obj of list){
            if(obj.id==where){
                data = obj;
            }
        }      
    }
    return data;
}

app.get('/',(req,res)=>{    //핸들러를 여러개 선언하고 싶으면 핸들러 안에 다시 핸들러 선언
    res.send('Server Connect');
});

app.get('/posts',(req,res)=>{
    let data = getData('posts');
    res.send(data);
});

app.get('/posts/:id',(req,res)=>{
    let data = getData('posts',req.params.id);      //바디에서 값을 가져올때는 req.body를 쓰면 되고 경로나 다른 곳에서 가져오는 거면 params를 사용하면 됨
    res.send(data);
})

app.get('/comments',(req,res)=>{
    let data = getData('comments');
    res.send(data);
});

app.get('/comments/:id',(req,res)=>{
    let data = getData('comments',req.params.id);     
    res.send(data);
})

app.get('/profile',(req,res)=>{
    let data = getData('profile');
    res.send(data);
});

app.get('/profile/:name',(req,res)=>{
    let data = getData('profile',req.params.name);
    res.send(data);
})


//user.js에서 등록한 router를 지정
app.route('/emps')
.get((req,res)=>{   //방식을 지정하지 않으면 default가 get임
    res.send('사원 전체조회');
})
.post((req,res)=>{
    res.send('사원 등록');
})
.put((req,res)=>{
    res.send('사원 수정');
})
.delete((req,res)=>{
    res.send('사원 삭제');
})

app.listen(3000,()=>{
    console.log('서버가 실행됩니다.');
    console.log('http://localhost:3000');   //실제 서버에 접근 가능한 주소
});