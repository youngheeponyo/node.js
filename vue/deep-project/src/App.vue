<template>
  <div>
    <input type="text" v-model.lazy="selected" />
    <component v-bind:is="selected"></component>
  </div>
</template>
<script>
import PropsComponent from './components/PropsComponent.vue';
import SlotCom from './components/TextModal.vue';
import Composition from './components/CompositionInterface.vue'

export default{
  name : 'app',
  data(){
    return {
      selected : 'PropsComponent'
    }
  },
  components : {
    PropsComponent, //'PropsComponent' : {}를 줄여서 쓴 거
    SlotCom,
    Composition
  }
}
</script>