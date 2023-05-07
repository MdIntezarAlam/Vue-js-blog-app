import { createApp } from "vue";
import App from "./App.vue";

// 7th  import router file in main file.
import router from "./routerscomponent/router";
// 8th Next we’ll need to edit our main.js file to use our router in our application.
createApp(App).use(router).mount("#app");
