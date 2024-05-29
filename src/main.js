import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./i18n";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

createApp(App).use(i18n).use(AOS).mount("#app");
