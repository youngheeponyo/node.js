<template>
  <div class="about">
    <h1>안녕 여기는 새로운 페이지야</h1>
    <input type="button" value="좋아요♡" @mousedown="down" @mouseup="up" :style="{ color : pluscolor }">
    <p>좋아요 {{ count }}</p>
  </div>
</template>

<script>
export default {
        data(){
            return {
                count: 0,
                pluscolor : 'black'
            }
        },
        methods : {
          down(){
            this.count++;
            this.pluscolor = 'red';
          },
          up(){
            this.pluscolor = 'black';
          }
        }
    }
</script>