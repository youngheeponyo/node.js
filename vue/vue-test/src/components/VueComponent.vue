<template>  
    <div>
        <label><input type="text" v-model="msg"></label>        <!--input에서 입력한 값을 p로 넘겨 바로 보여짐-->
        <p>{{msg}}</p>      <!--{{}}출력하는 것-->
    </div>
</template>
<script>
    export default {
        name : 'VueComponent',
        data(){
            return {
                msg : '안녕'
            }
        }
    }
</script>
<!--scoped를 설정하면 여기에있는 p에만 스타일 적용-->
<style scoped>
    p{
        color:white;
        background-color:black;
    }
</style>