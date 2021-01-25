import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics';

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: 'UA-3450053-63',
  router
});

createApp(App).use(router).mount('#app')
