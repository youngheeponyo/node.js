<template>
    <div>
        <input type="text" v-model.number="content">
        <p>{{ content }}</p>
        <button ref="cBtn" @click="plusCount">더하기</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            content : ''
        }
    },
    methods : {
        plusCount(){
            if((typeof this.content)=='number'){
                let sum = Number(this.content) + 100;
                this.content = sum;
            }else{
                alert('데이터 타입이 숫자가 아닙니다!');
            }
        }
    }
}
</script>