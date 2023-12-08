<template>
    <div class="container">
        <div class="row">
            <table class="table">
                <tr>
                    <th class="text-right table-primary">사원번호</th>
                    <td class="text-center">
                        <input type="text" v-model="emp.emp_no" readonly>
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
                    <th class="text-right table-primary">생년월일</th>
                    <td class="text-center">
                        <input type="date" v-model="birth_date">
                    </td>
                </tr>
            </table>
        </div>
            <button class="btn btn-info" @click="EmpUpdate">수정완료</button>
            <router-link to="/" class="btn btn-success">목록으로</router-link>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return{
            emp : {},
            birth_date : null
        }
    },
    created(){
        this.eno = this.$route.query.emp_no;
        this.EmpInfo();
    }, 
    methods : {
        async EmpInfo(){
            let result = await axios.get(`/api/emp/${this.eno}`).catch(err=>console.log(err));
            this.emp = (result.data)[0]
        },
        async EmpUpdate(){
            let data = {
                "param" : {
                    "emp_no" :this.emp.emp_no,
                    "first_name" : this.emp.first_name,
                    "last_name" : this.emp.last_name,
                    "birth_date" : this.birth_date
                }
            }
            let result = await axios.patch(`/api/emp/${this.eno}`,data).catch(err=>console.log(err));
            if(result.data.affectedRows==0){
                alert('수정 실패');
            }else{
                alert('수정 성공');
                this.$router.push({path : '/EmpList'})
            }
        }
    }
}
</script>