module.exports = {
    empList : `SELECT e.emp_no,e.first_name,e.last_name,e.gender,e.hire_date,s.salary, d.dept_no, d.dept_name
    from employees e
    join dept_emp h
    on(e.emp_no = h.emp_no)
    join departments d
    on(h.dept_no=d.dept_no)
    join salaries s
    on(e.emp_no = s.emp_no)
    where h.to_date = cast('9999-01-01' as date)
    and s.to_date = cast('9999-01-01' as date)
    order by e.emp_no desc
    limit 0,10`,

    empInfo : `SELECT e.emp_no,e.first_name,e.last_name,e.gender,e.hire_date,s.salary, d.dept_no, d.dept_name
    from employees e
    join dept_emp h
    on(e.emp_no = h.emp_no)
    join departments d
    on(h.dept_no=d.dept_no)
    join salaries s
    on(e.emp_no = s.emp_no)
    where h.to_date = cast('9999-01-01' as date)
    and s.to_date = cast('9999-01-01' as date)
    and e.emp_no = ?`,

    deptList : `select dept_no,dept_name from departments order by dept_no`,
    
    insertEmp:`INSERT INTO employees SET ?`,
    insertDept:`insert into dept_emp set ?`,
    insertSal:`insert into salaries set ?`,
    updateEmp:`update employees set ? where emp_no = ?`,
    // updateDept:`update dept_emp set ? where emp_no = ?`,
    // updateSal:`update salaries set ? where emp_no = ?`,
    deleteEmp:`update dept_emp set to_date = ? where emp_no = ?`,    //퇴사처리,

    updateAll : `update employees e, dept_emp d, salaries s set ?
    where e.emp_no = d.emp_no
    and d.emp_no = s.emp_no
    and e.emp_no = ?`
}