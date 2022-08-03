import { createApp } from "vue";
import App from "./App.vue";
import Paginate from "vuejs-paginate-next";
import router from "./router";

import "./assets/main.css";

const app = createApp(App).use(Paginate);

app.use(router);

app.mount("#app");