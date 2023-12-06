<template>
    <div>
        <table border="1">
            <caption>Total : {{ count }}</caption>
            <thead>
                <tr>
                    <th>No</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Gender</th>
                    <th>HireDate</th>
                    <th>Salary</th>
                    <th>DeptNo</th>
                    <th>DeptName</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="idx" v-for="(emp,idx) in empList">
                    <td>{{ emp.emp_no }}</td>
                    <td>{{ emp.first_name }}</td>
                    <td>{{ emp.last_name }}</td>
                    <td>{{ emp.gender }}</td>
                    <td>{{ dateFormat(emp.hire_date) }}</td>
                    <td>{{ emp.salary }}</td>
                    <td>{{ emp.dept_no }}</td>
                    <td>{{ emp.dept_name }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return {
            empList : []
        }
    },
    computed : {
        count(){
            return this.empList.length;
        }
    },
    created() {
        this.userList();
    },
    methods : {
        async userList(){
            let result = await axios.get('/api/emp').catch(err=>console.log(err));
            console.log(result);
            let list = result.data;
            this.empList = list;
        },
        dateFormat(value){
            //yyyy년 MM월 dd일
            let date = new Date(value);
            let year = date.getFullYear();
            let month = ('0'+(date.getMonth()+1)).slice(-2);
            let day = ('0'+date.getDate()).slice(-2);
            return `${year}년 ${month}월 ${day}일`
        }
    }
}

</script>