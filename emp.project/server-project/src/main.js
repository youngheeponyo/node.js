import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixin from './Mixin'

createApp(App).use(router).mixin(mixin).mount('#app')
