import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

import 'common/stylus/reset.css'
import 'common/stylus/media.css'

Vue.config.productionTip = false

router.afterEach((to,from,next) => {
    window.scrollTo(0,0);
})

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
