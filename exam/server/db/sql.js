module.exports = {
    boardList : `select no, title, writer, content, created_date,(select count(*) from T_comment_BOARD where t_board_board.no = bno) as count
    from t_board_board`,
    commentList : `SELECT C.NO,C.WRITER,C.CONTENT,C.CREATED_DATE,C.UPDATED_DATE 
    FROM T_COMMENT_BOARD  C, t_board_board B
    WHERE B.NO = C.BNO AND B.NO = ?`,
    insertBoard : `insert into t_board_board set ?`,
    updateBoard : `update t_board_board set ? where NO = ?`,
    boardInfo : `select * from t_board_board where NO = ?`,
    commentCount : `select count(*) as count from T_comment_BOARD where bno = ?;`
}