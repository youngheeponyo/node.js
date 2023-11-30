<template>
  <VueComponent/>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import VueComponent from './components/VueComponent.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld,
    VueComponent    //하위 컴포넌트(여기에 등록하고 템플릿에 태그 형태로 등록 가능)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
