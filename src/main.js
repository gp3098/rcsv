import { createApp } from "vue";
// import "normalize.css/normalize.css"; // a modern alternative to CSS resets
import "@/styles/index.less"; // global css
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
