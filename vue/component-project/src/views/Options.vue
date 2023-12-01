<template>
    <div>
        <input type="number" v-model="price" step="100" min="0"> 원
        <br>
        <input type="number" v-model="count"> 개
        <p>과세 금액 : {{ amount }}</p>
        <p>부가세 10% : {{ tax }}</p>
        <p>결제 금액 : {{ total }}</p>
    </div>
</template>
<script>
const computed = {
    data(){
        return{
            price : 0,
            count : 0
        }
    },
    computed : {        //원데이터가 바뀌는 경우 자동으로 바껴야하는 경우에 computed 사용, 여기 있는 값은 직접 바꿔주는 것이 아니라 다른 요인에 의해 변한 값을 자동으로 넣어주게 한다
        amount(){
            return this.price * this.count;
        },
        tax(){
            return this.amount * 0.1;
        },
        total(){
            return this.amount + this.tax;
        }
    }
}
const watch = {
    data(){
        return{
            price : 0,
            count : 0,
            amount : '',
            tax : '',          //computed는 초기값을 지정해주지 않아도 자동으로 0으로 인식을 함
            total : ''
        }
    },
    watch : {
        price(){
            this.amount = this.price * this.count;
        },
        count(){
            this.amount = this.price * this.count;
        },
        amount(){
            this.tax = this.amount * 0.1;
            this.total = this.amount + this.tax;
        },
        tax(){

        },
        total(){

        }
    }
}
export default watch
</script>