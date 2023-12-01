<template>
    <div class="container">
        <table class="table">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>JoinDate</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="idx" v-for="(user,idx) in userList">
                    <td>{{ user.user_no }}</td>
                    <td>{{ user.user_id }}</td>
                    <td>{{ user.user_name }}</td>
                    <td>{{ user.user_gender }}</td>
                    <td>{{ user.join_date }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return{
            userList : []
        }
    },
    computed : {
        count(){
            return this.userList.length;
        }
    },
    created(){
        //해당 컴포넌트가 처음부터 데이터를 들고 있어야 할 때 사용(초기화할 데이터 관련 진행)
        this.getUserList();
    },
    methods : {
        async getUserList(){
            let result = await axios.get('/tusers').catch(err=>{console.log(err)});    //axios 홈페이지 들어가보기
            let list = result.data;   //값만 필요하기 때문에 .data로 가져옴(원래는 데이터 속성, status등이 있음)
            this.userList = list;
        }
    }
}
</script>
