<template>
    <div class="container">
        <table border="1" class="table">
            <caption>Total : {{ count }}</caption>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>HireDate</th>
                    <th>Salary</th>
                    <th>DeptNo</th>
                    <th>DeptName</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="idx" v-for="(emp,idx) in empList" @click="empInfo(emp.emp_no)">
                    <td>{{ emp.emp_no }}</td>
                    <td>{{ emp.first_name + ' ' + emp.last_name }}</td>
                    <td>{{ emp.gender }}</td>
                    <td>{{ $dateFormat(emp.hire_date,'yyyy-MM-dd') }}</td>
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
        empInfo(eno){
            this.$router.push({path : '/EmpInfo', query : {emp_no : eno}})
        }
    }
}

</script>