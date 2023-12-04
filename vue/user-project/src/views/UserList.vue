<template>
    <div class="container">
        <table class="table">
            <caption>Total : {{ count }}</caption>
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
                <tr :key="idx" v-for="(user,idx) in userList" @click="goToUserInfo(user.user_id)">
                    <td>{{ user.user_no }}</td>
                    <td>{{ user.user_id }}</td>
                    <td>{{ user.user_name }}</td>
                    <td>{{ user.user_gender }}</td>
                    <td>{{ dateFormat(user.join_date) }}</td>
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
            let result = await axios.get('/api/tusers').catch(err=>{console.log(err)});    //axios 홈페이지 들어가보기
            let list = result.data;   //값만 필요하기 때문에 .data로 가져옴(원래는 데이터 속성, status등이 있음)
            this.userList = list;
        },
        goToUserInfo(id){
            this.$router.push({path : '/selectUser', query : { userId : id }});        //등록된 router중에 push를 통해 어떤 걸 호출할지 결정(route)
            //name : 컴포넌트 등록할 때 사용한 name 속성 , params : path 속성이 '/target/:id'과 같은 경우일 때 {'id' : 100} 과 같은 형태로 값을 넘김
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
