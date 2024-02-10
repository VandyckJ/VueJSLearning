import './assets/base.css'
import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { auth } from './includes/firebase'
import App from './App.vue'
import router from './router'
import VeeValidatePlugin from './includes/validation'
import Icon from './directives/icon'
import i18n from './includes/i18n'
import { registerSW } from 'virtual:pwa-register'
import GlobalComponents from './includes/_globals'
import progressBar from './includes/progress-bar'
import 'nprogress/nprogress.css'
let app

registerSW({ immediate: true })
progressBar(router)
auth.onAuthStateChanged(() => {
  if (!app) {
    const app = createApp(App)

    app.use(createPinia())
    app.use(router)
    app.use(VeeValidatePlugin)
    app.use(GlobalComponents)
    app.directive('icon', Icon)
    app.use(i18n)

    app.mount('#app')
  }
})
