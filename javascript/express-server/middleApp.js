const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();

//application/www-form-urlenconded 가장 기본적으로 사용하는 content 타입
const defaultParser = express.urlencoded({extended:false});
//application/json
const jsonParse = express.json();

app.use(defaultParser);   //모든 라우팅에 대해서 전체 적용
app.post('/info',(req,res)=>{
    res.send('Welcome, ' + req.body.name);
});

app.post('/message',jsonParse,(req,res)=>{      //미들웨어를 중간에 적어주는데 여러개가 들어갈 수도 있음
    res.send('MSG : '+req.body.message);
});

//구글 확장 프로그램->부메랑/설치->포스트맨
app.listen(5000,()=>{
    console.log('server start!')
});

let sessionSetting = session({
    secret : 'secret key',
    resave : false,
    saveUninitialized : true,
    cookie : {
        httpOnly : true,
        secure : false,
        maxAge :60000
    }
});

app.use(sessionSetting);

const corsOptions = {
    origin : 'http://192.168.0.26:5500',    //라이브서버와 동일하게 현재 내 ip 주소를 통해 들어가기 위함
    optionSuccessStatus : 200      //이미 오래된 버전의 브라우저를 지원하기 위해(선택사항)
}

app.use(cors(corsOptions));

app.get('/',(req,res)=>{
     //res.send('user : '+req.session.user);
    res.send(req.session);
});

app.post('/login',(req,res)=>{
    const{id,pwd} = req.body;
    req.session.user = id;
    req.session.pwd = pwd;
    req.session.save(function(err){
        if(err) throw err;
        res.redirect('/')
    })
});

app.get('/logout',(req,res)=>{
    req.session.destroy();
    req.redirect('/');
});

