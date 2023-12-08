<template>
    <div class="container">
        <div class="row">
            <table class="table">
                <tr>
                    <th class="text-right table-primary">사원번호</th>
                    <td class="text-center">
                        <input type="text" v-model="emp.emp_no">
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">성</th>
                    <td class="text-center">
                        <input type="text" v-model="emp.first_name">
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">이름</th>
                    <td class="text-center">
                        <input type="text" v-model="emp.last_name">
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">성별</th>
                    <td class="text-center">
                        <input type="radio" value="M" v-model="emp.gender">남자
                        <input type="radio" value="F" v-model="emp.gender">여자
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">입사날짜</th>
                    <td class="text-center">
                        <input type="date"  v-model="emp.hire_date">
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">부서번호</th>
                    <td class="text-center">
                        <select  v-model="emp.dept_no">
                            <option>d001</option>
                            <option>d002</option>
                            <option>d003</option>
                            <option>d004</option>
                            <option>d005</option>
                            <option>d006</option>
                            <option>d007</option>
                            <option>d008</option>
                            <option>d009</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">급여</th>
                    <td class="text-center">
                        <input type="text" v-model.number="emp.salary">
                    </td>
                </tr>
            </table>
        </div>
        <div class="row">
            <button class="btn btn-success" @click="insertEmp">저장</button>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default{
    data(){
        return{
            emp : {
                emp_no : '',
                first_name : '',
                last_name : '',
                gender : null,
                hire_date : null,
                from_date : this.getToday(),
                to_date : '9999-01-01',
                dept_no : '',
                salary : 0
            }
        }
    },
    methods : {
        async insertEmp(){
            if(!this.validation()) return;
            let data = {
                "param" : this.emp
            };
            let result = await axios.post(`/api/emp`,data).catch(err=>{console.log(err)});
            if(result.data.insertEmp==0){
                alert('등록에 실패하였습니다')
            }else{
                alert('등록 성공!');
                this.$router.push({name : 'EmpList'})
            }
        },
        validation(){
            if(this.emp.emp_no == ''){
                alert('사원번호가 입력되지 않았습니다');
                return;
            }
            if(this.emp.hire_date == ''){
                alert('입사날짜가 입력되지 않았습니다');
                return;
            }
            return true;
        },
        getToday(){
            let today = new Date();
            let year = today.getFullYear();
            let month = ('0' + (today.getMonth()+1)).slice(-2);
            let day = ('0' + today.getDate()).slice(-2);
            return `${year}-${month}-${day}`;
        }
    }
}
</script>