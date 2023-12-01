<template>
    <div>
        <button type="button" v-on:click="increaseCounter">Add 1</button>
        <button type="button" @click="setCount($event,7)">Add 7</button>
        <p>The Counter is : {{ counter }}</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            counter : 0
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
        }
    }
}
</script>
