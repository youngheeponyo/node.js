<template>
  <div class="about">
    <h1>안녕 여기는 새로운 페이지야</h1>
    <input type="button" value="좋아요♡" v-on:click="count+=1">
    <p>좋아요 {{ count }}</p>
  </div>
</template>

<script>
export default {
        name : 'VueComponent',
        data(){
            return {
                count: 0
            }
        }
    }
</script>
