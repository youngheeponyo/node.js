<template>
    <div>

    </div>
</template>
<script>
    export default{
        components : [],
        data(){
            return{
                today : new Date()
            }
        },
        computed : {        //읽는 것만 가능(수정 불가능,수정을 하려면 data에 있는 속성을 변경해야함). 연산이 필요할 때 사용
            AfterYear(){
                return this.today.setFullYear(this.today.getFullYear()+1);
            }
        },
        methods : {},    //methods에 등록된 함수만 컴포넌트 안에서 사용 가능
        watch : {},       //computed랑 비슷하게 동작(변화를 감시함), 성격은 다름(computed는 값을 저장하는 용도 watch는 동작해야하는 행동을 저장하는 곳)
        created(){},
        mounted(){}
    }
</script>
<style>

</style>