<template>
    <div class="container">
        <table class="table">
                <tr>
                    <th>No</th>
                    <td>{{ emp.emp_no }}</td>
                </tr>
                <tr>
                    <th>Name</th>
                    <td>{{ emp.first_name + ' ' + emp.last_name }}</td>
                </tr>
                <tr>
                    <th>Gender</th>
                    <td>{{ Gender }}</td>
                </tr>
                <tr>
                    <th>HireDate</th>
                    <td>{{ $dateFormat(emp.hire_date,'yyyy-MM-dd') }}</td>
                </tr>
                <tr>
                    <th>Salary</th>
                    <td>{{ emp.salary }}</td>
                </tr>
                <tr>
                    <th>DeptName</th>
                    <td>{{ emp.dept_name }}</td>
                </tr>
        </table>
    </div>
    <router-link to="/EmpList" class="btn btn-success">목록</router-link>
    <button class="btn btn-info" @click="modifyEmp">수정</button>
    <button class="btn btn-warning" @click="deleteEmp">퇴사</button>
</template>
<script>
import axios from 'axios';

export default{
    data(){
        return{
            eno : '',
            emp : {},
            to_date : {}
        }
    },
    computed :{
        Gender(){
            return this.emp.gender == 'M' ? '남자' : '여자';
        }
    },
    created(){
        this.eno = this.$route.query.emp_no;
        this.getInfo();
    },
    methods : {
        async getInfo(){
            let result = await axios.get(`/api/emp/${this.eno}`).catch(err=>console.log(err));
            this.emp = (result.data)[0];
        },
        modifyEmp(){
            this.$router.push({path : '/EmpUpdate', query : {emp_no : this.eno}})
        },
        async deleteEmp(){
            var ok = confirm('정말 퇴사하시겠습니까?')
            if(ok){
                this.to_date = prompt('퇴사날짜를 적어주세요', Date());
                if(this.to_date==null){
                    alert('취소되었습니다')
                }else{
                    let data = {
                        "param" : {"to_date" : this.to_date}
                    }
                    let result = await axios.delete(`/api/emp/${this.eno}`,{ data : data }).catch(err=>console.log(err));
                    let count = result.data.affectedRows;
                    if(count == 0){
                        alert('정상적으로 삭제되지 않았습니다.');
                    }else{
                        alert('정상적으로 삭제되었습니다!');
                        this.$router.push({name : 'EmpList'});
                    }
                }
            }
        }
    }
}
</script>