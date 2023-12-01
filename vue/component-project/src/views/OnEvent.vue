<template>
    <div>
        <button type="button" v-on:click="increaseCounter">Add 1</button>
        <input type="number" v-model="num">
        <button type="button" @click="setCount($event,num),msg(num)">Add {{num}}</button>
        <p>The Counter is : {{ counter }}</p>
        <hr>
        <form @click="msg('form')">Form
            <div @click.self="msg('div')">Div<!--self는 나만 예외상황을 만들어줌 즉, 자식부터 부모요소까지 계속 진행은 되는데 나만 제외하고 지나가게됨, 대신 나 스스로는 실행됨-->
                <p @click.stop="msg('p')">p<!--stop,prevent등 함께 사용도 가능-->
                    <a @click.prevent="msg('a')" href="https://www.naver.com">네이버</a><!--click.stop을 하면 부모요소는 실행되지 않고 자신 요소까지만 실행됨,prevent는 기본이벤트 종료(페이지이동)-->
                </p>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data(){
        return{
            counter : 0,
            num : 0
        }
    },
    methods : {
        increaseCounter(e){
            console.log(e)
            this.counter++;
        },
        setCount(e,value){
            console.log(e)
            this.counter = this.counter + value
        },
        msg(msg){
            alert(`${msg} 선택!!`)
        }
    }
}
</script>
<style scoped>
    form, form * {
        margin : 10px;
        border:1px solid black;
    }
</style>
