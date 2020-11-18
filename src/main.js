import { createApp } from "vue";
// import "normalize.css/normalize.css"; // a modern alternative to CSS resets
import "@/styles/index.less"; // global css
import App from "./App.vue";
// import Antd from "ant-design-vue";
import router from "./router";
import store from "./store";
// import { Button } from "ant-design-vue";
const app = createApp(App);
// app.use(Button);
// app.config.productionTip = false;
app
  .use(store)
  .use(router)
  // .use(Antd)
  .mount("#app");
