import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import navbar from './shared/Navbar.vue'

createApp(App).use(router).component('navbar', navbar).mount('#app');

