module.exports = {
    customerList : `SELECT * FROM customers`,
    customerInfo : `SELECT * FROM customers WHERE id = ?`,
    customerInsert : `INSERT INTO customers SET ?`, //mysql이 지원하는 형태(insert into values를 기본으로 함)
    customerUpdate : `UPDATE customers SET ? WHERE id = ?`,     //values를 넘기는 형태가 객체인 경우 자동으로 변환해줌
    customerDelete : `DELETE FROM customers WHERE id = ? AND BINARY(name) = ?`
}