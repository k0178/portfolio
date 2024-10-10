import './assets/app.css'
import router from "./router";
import { createApp } from 'vue'
import App from "./App.vue";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import {MotionPlugin} from "@vueuse/motion";

library.add(far, fas, fab)

createApp(App)
    .use(router)
    .use(MotionPlugin)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
