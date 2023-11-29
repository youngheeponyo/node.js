const mysql = require('mysql');
const sql = require('./db/sql.js');

//process.env 환경변수에 접근할 수 있는 코드
const pool = mysql.createPool({
    host : process.env.MYSQL_HOST,
    port : process.env.MYSQL_PORT,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PWD,
    database : process.env.MYSQL_DB,
    connectionLimit : process.env.MYSQL_LIMIT
})

//pool.query('sql문','조건이 있는 경우 가져야할 값',콜백함수(err,results)=>{})
const query = async(alias,values)=>{
    return new Promise((resolve,reject)=>{
        pool.query(sql[alias],values,(err,results)=>{
            if(err){
                console.log(err);
                reject({err});
            }else{
                resolve(results);
            }
        })
    })
}
//app.js로 따로 서버를 만들어서 연결
// const getData = async()=>{
//     console.log(await query('customerList'))
// };

// getData();

module.exports = {
    query
}