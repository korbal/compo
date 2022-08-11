import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import VueAnalytics from 'vue-analytics';

//added on 2022-08-10 vue-gtag: https://matteo-gabriele.gitbook.io/vue-gtag/

//import VueGtag from "vue-gtag";

createApp(App).use(router).mount('#app')


// // Configuration VueAnalytics
// Vue.use(VueAnalytics, {
//   id: 'UA-3450053-63',
//   router
// });

