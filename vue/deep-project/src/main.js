import { createApp } from 'vue'
import App from './App.vue'
import mixin from './mixin.js'
createApp(App).mixin(mixin).mount('#app')       //전역에서 사용하려면 mount 전에 mixin을 등록해준다
