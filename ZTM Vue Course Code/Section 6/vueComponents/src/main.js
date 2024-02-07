import { createApp } from 'vue'
import App from './App.vue'
// import Greeting from "@/components/greeting.vue"
let vm =createApp(App).mount('#app')
// vm.component("Greeting", Greeting)
vm.mount('#app')