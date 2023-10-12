import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import { createApp } from "vue";
import App from "./LoginForm.vue";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import createStore from "./store";

createApp(App).use(createStore).use(Quasar, quasarUserOptions).mount("#app");
