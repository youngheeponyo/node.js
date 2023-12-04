<template>
    <div class="container">
        <div class="row">
            <table class="table">
                <tr>
                    <th class="text-right table-primary">Id</th>
                    <td class="text-center">
                        <input type="text" v-model="selectUser.user_id" value="selectUser.user_id">
                        <button @click="ckf(selectUser.user_id)">중복확인</button>
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">Password</th>
                    <td class="text-center">
                        <input type="password" v-model="selectUser.user_pwd">
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">Name</th>
                    <td class="text-center">
                        <input type="text" v-model="selectUser.user_name">
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">Gender</th>
                    <td class="text-center">
                        <input type="radio" value="M" v-model="selectUser.user_gender">남자
                        <input type="radio" value="F" v-model="selectUser.user_gender">여자
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">Age</th>
                    <td class="text-center">
                        <input type="number"  v-model="selectUser.user_age">
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">joinDate</th>
                    <td class="text-center">
                        <input type="date"  v-model="selectUser.join_date">
                    </td>
                </tr>
            </table>
        </div>
        <div class="row">
            <button class="btn btn-success" @click="insertUser">저장</button>
        </div>
    </div>
</template>
<script>
import router from '@/router';
import axios from 'axios';
    export default{
        data(){
            return{
               selectUser : {
                user_id : '',
                user_pwd : '',
                user_name : null,
                user_age : 0,
                user_gender : null,
                join_date : null
               } 
            }
        },
        created(){
            this.selectUser.join_date = this.getToday();
        },
        methods : {
            async insertUser(){
                if(!this.validation()) return;
                let data = {
                    "param" : this.selectUser
                };
                //await axios(`/api/tusers`,{
                //  method : 'post', header : {'content-Type' : 'application/json' },data : JSON.stringify(data)}) axios가 자동으로 json타입으로 변환을 해주지만 변환해주지 않으면 이런 방식으로 사용해야함
                let result = await axios.post(`/api/tusers`,data)
                .catch(err=>console.log(err))
                console.log(result.data);
                if(result.data.insertUser == 0){
                    alert(`등록되지 않았습니다.\n메세지를 확인해주세요.\n${result.data.message}`)
                }else{
                    alert('등록되었습니다!');
                    router.push({path : '/'});
                }
            },
            async ckf(id){
                let result = await axios.get(`/api/tusers/${id}`).catch(err=>console.log(err));
                console.log('result',result.data)
                let count = result.data.length;
                if(count==0){
                    alert('사용가능한 아이디입니다');
                }else{
                    alert('이미 존재하는 아이디입니다')
                }
            },
            getToday(){
                let today = new Date();
                let year = today.getFullYear();
                let month = ('0' + (today.getMonth()+1)).slice(-2);
                let day = ('0' + today.getDate()).slice(-2);
                return `${year}-${month}-${day}`;
            },
            validation(){
                if(this.selectUser.user_id == ''){
                    alert('아이디가 입력되지 않았습니다');
                    return;
                }
                if(this.selectUser.user_pwd == ''){
                    alert('비밀번호가 입력되지 않았습니다');
                    return;
                }
                return true;
            }
        }
    }
</script>