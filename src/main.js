import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./i18n";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";

createApp(App).use(i18n).mount("#app");
