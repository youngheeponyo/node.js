//전체조회
fetch('http://localhost:3000/posts')
.then(res => res.json())
.then(data => console.log('list',data))
.catch(err => console.log(err));

//단건조회
fetch('http://localhost:3000/posts/1')
.then(res => res.json())
.then(data => console.log('info',data))
.catch(err => console.log(err));

//등록
// fetch('http://localhost:3000/posts',{
//     method:'post',
//     headers : {
//         'content-type':'application/json'
//     },
//     body : JSON.stringify({userId : 2, id : 4,title : 'Have A Nice Day!', body : 'dsfsaujdhbf;ngv;jsfhbkfnsxlcmakfna'})
// })
// .then(res => res.json())
// .then(result => console.log('insert',result));

//수정(어떤 대상을 수정할건지 경로에 지정을 해줘야함)
fetch('http://localhost:3000/posts/4',{
    method:'put',
    headers : {
        'content-type':'application/json'
    },
    body : JSON.stringify({userId : 3, title : 'Hello, World!', body : 'dsfsaujdhbf;ngv;jsfhbkfnsxlcmakfna'})   //바디에는 수정할 내용을 집어넣는 공간
})
.then(res => res.json())
.then(result => console.log('update',result));

//삭제
fetch('http://localhost:3000/posts/4',{     //삭제할 데이터를 지정 후 메소드에 delete를 함
    method : 'delete'
})
.then(res => res.json())
.then(result => console.log('delete',result));