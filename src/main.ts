import { createApp } from "vue";
import { createPinia } from "pinia";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import Markdown from 'vue3-markdown-it';
import VueSmoothScroll from 'v-smooth-scroll';
import AOS from 'aos';
import { mainStore } from "./stores/store";

import App from "./App.vue";
import router from "./router";

import 'aos/dist/aos.css';

AOS.init({
    once: true,
    offset: 50,
    delay: 100,
    duration: 1000,
});


const app = createApp(App)
    .use(router)
    .use(createPinia())
    .use(Antd)
    .use(Markdown)
    .use(VueSmoothScroll)

const store = mainStore()
store.init()
router.beforeEach((to, from, next) => {
    document.title = store.title + (to.meta.title ? ' - ' + to.meta.title : '');
    next();
});

app.mount("#app");
