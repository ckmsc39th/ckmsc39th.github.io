import {createApp} from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import navbar from "./shared/Navbar.vue";
import VueFeather from "vue-feather";

createApp(App)
    .use(router, VueFeather)
    .component("navbar", navbar)
    .component(VueFeather.name, VueFeather)
    .mount("#app");
