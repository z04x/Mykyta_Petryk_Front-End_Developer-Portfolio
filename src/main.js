//Vue
import { createApp } from 'vue'

//App
import App from './App.vue'

//Styles
import '@/assets/styles/reset.scss'
import '@/assets/styles/global.scss'

//I18n
import i18n from './i18n'


//App
const app = createApp(App)
app.use(i18n)
app.mount('#app')
