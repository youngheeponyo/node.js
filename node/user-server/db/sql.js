module.exports={
    userList:`select * from t_users`,
    selectUser:`select * from t_users where user_id = ?`,
    insertUser:`insert into t_users set ?`,
    updateUser:`update t_users set ? where user_id = ?`,
    deleteUser:`delete from t_users where user_id = ? and user_pwd = ?`
}