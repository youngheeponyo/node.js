import { createApp } from 'vue'
import App from './App.vue'
import mixin from './mixin.js'
import store from './store.js';

createApp(App)
.use(store)
.mixin(mixin)
.directive('focus',{
    mounted(el,binding,vnode,prevVNode){
        console.log('mounted',el,binding,vnode,prevVNode);
        if(binding.value){
            el.style.color='red';
        }else{
            el.style.color='black';
        }
    },
    updated(el,binding,vnode,prevVNode){
        console.log('updated',el,binding,vnode,prevVNode);
        if(binding.value){
            el.style.color='red';
        }else{
            el.style.color='black';
        }
    }
})
.mount('#app')       //전역에서 사용하려면 mount 전에 mixin을 등록해준다(mount는 가장 마지막에)
