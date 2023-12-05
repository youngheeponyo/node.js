<template>
  <div>
    <input type="text" v-model.lazy="selected" v-focus="isFocused" />
    <component v-bind:is="selected"></component>
  </div>
</template>
<script>
import PropsComponent from './components/PropsComponent.vue';
import SlotCom from './components/TextModal.vue';
import Composition from './components/CompositionInterface.vue'
import Store from './components/StoreComponent.vue';

export default{
  name : 'app',
  data(){
    return {
      selected : 'PropsComponent',
      isFocused : false
    }
  },
  components : {
    PropsComponent, //'PropsComponent' : {}를 줄여서 쓴 거
    SlotCom,
    Composition,
    Store
  }
}
</script>