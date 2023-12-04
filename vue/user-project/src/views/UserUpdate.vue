<template>
    <div class="container">
        <div class="row">
            <table class="table">
                <tr>
                    <th class="text-right table-primary">NO.</th>
                    <td class="text-center">
                        <input type="text" v-model="updateUser.user_no" readonly>
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">Id</th>
                    <td class="text-center">
                        <input type="text" v-model="updateUser.user_id" readonly>
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">Password</th>
                    <td class="text-center">
                        <input type="password" v-model="updateUser.user_pwd">
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">Name</th>
                    <td class="text-center">
                        <input type="text" v-model="updateUser.user_name">
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">Gender</th>
                    <td class="text-center">
                        <input type="radio" value="M" v-model="updateUser.user_gender">남자
                        <input type="radio" value="F" v-model="updateUser.user_gender">여자
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">Age</th>
                    <td class="text-center">
                        <input type="number" v-model="updateUser.user_age">
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">Age</th>
                    <td class="text-center">
                        <input type="date" v-model="updateUser.join_date">
                    </td>
                </tr>
            </table>
        </div>
        <div class="row">
            <button class="btn btn-info" @click="userUpdate">수정완료</button>
            <router-link to="/" class="btn btn-success">목록으로</router-link>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default{
    data(){
        return{
            searchId : '',
            updateUser : {} 
        }
    },
    created(){
        this.searchId = this.$route.query.userId;
        this.getSelectUser();
    },
    methods : {
        async getSelectUser(){
            let result = await axios.get(`/api/tusers/${this.searchId}`).catch(err=>console.log(err));
            this.updateUser = (result.data)[0];
            let newDate = this.dateFormat(this.updateUser.join_date);
            this.updateUser.join_date = newDate;
        },
        dateFormat(value){
            let date = new Date(value);
            let year = date.getFullYear();
            let month = ('0'+(date.getMonth()+1)).slice(-2);
            let day = ('0'+date.getDate()).slice(-2);
            return `${year}-${month}-${day}`
        },
        async userUpdate(){
            let data = {
                "param" : this.updateUser
            };
            let result = await axios.put(`/api/tusers/${this.searchId}`,data).catch(err=>console.log(err));
            let count = result.data.changedRows;
                if(count == 0){
                    alert(`정상적으로 수정되지 않았습니다.\n${result.data.err}`);
                }else{
                    alert('정상적으로 수정되었습니다!');
                    this.$router.push({name : 'UserList'});
                }
        }
    }
}
</script>