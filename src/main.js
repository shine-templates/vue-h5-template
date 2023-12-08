import { createApp } from 'vue'
import App from './App.vue'
import router from '@/route'
import { ConfigProvider } from 'vant'
import './styles/base.css'
import './style.css'
import 'amfe-flexible'

createApp(App).use(router).use(ConfigProvider).mount('#app')
