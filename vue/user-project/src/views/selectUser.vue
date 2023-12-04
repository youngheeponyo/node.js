<template>
    <div class="container">
        <div class="row">
            <table class="table">
                <tr>
                    <th class="text-right table-primary">NO.</th>
                    <td class="text-center">{{ selectUser.user_no }}</td>
                </tr>
                <tr>
                    <th class="text-right table-primary">Id</th>
                    <td class="text-center">{{ selectUser.user_id }}</td>
                </tr>
                <tr>
                    <th class="text-right table-primary">Password</th>
                    <td class="text-center">{{ selectUser.user_pwd }}</td>
                </tr>
                <tr>
                    <th class="text-right table-primary">Name</th>
                    <td class="text-center">{{ selectUser.user_name }}</td>
                </tr>
                <tr>
                    <th class="text-right table-primary">Gender</th>
                    <td class="text-center">{{ userGender }}</td>
                </tr>
                <tr>
                    <th class="text-right table-primary">Age</th>
                    <td class="text-center">{{ selectUser.user_age }}</td>
                </tr>
                <tr>
                    <th class="text-right table-primary">joinDate</th>
                    <td class="text-center">{{ JoinDate }}</td>
                </tr>
            </table>
        </div>
        <div class="row">
            <button class="btn btn-info" @click="updateUser">수정</button>
            <router-link to="/" class="btn btn-success">목록</router-link>      <!--router-link는 기본이 a태그인데 바꾸려면 tag에 설정-->
            <button class="btn btn-warning" @click="deleteInfo(selectUser.user_id,selectUser.user_pwd)">삭제</button>
        </div>
    </div>
</template>
<script>
import router from '@/router';
import axios from 'axios';

    export default{
        data(){
            return{
                searchNo : '',
                selectUser : {}
            }
        },
        computed : {
            userGender(){
                return this.selectUser.user_gender == 'M' ? '남자' : '여자';
            },
            JoinDate(){
                let date = new Date(this.selectUser.join_date);
                let year = date.getFullYear();
                let month = ('0'+(date.getMonth()+1)).slice(-2);
                let day = ('0'+date.getDate()).slice(-2);
                return `${year}-${month}-${day}`
            }
        },
        created(){
            this.searchId = this.$route.query.userId;
            this.select();
        },
        methods : {
            async select(){
                let result = await axios.get(`/api/tusers/${this.searchId}`).catch(err=>console.log(err));
                console.log(result.data)
                this.selectUser = (result.data)[0];
            },
            async deleteInfo(id,pwd){
                var ok = confirm('정말 삭제하시겠습니까?')
                if(ok){
                    let result = await axios.delete(`/api/tusers/${id}/${pwd}`).catch(err=>console.log(err));
                    console.log(result.data);
                    let count = result.data.affectedRows;
                    if(count == 0){
                        alert('정상적으로 삭제되지 않았습니다.');
                    }else{
                        alert('정상적으로 삭제되었습니다!');
                        router.push({name : 'UserList'});  //다시 목록으로 넘어가기
                    }
                }
            },
            updateUser(){
                this.$router.push({path : '/UserUpdate',query : {userId : this.searchId}})
            }
        }
    }
</script>