import Vue from 'vue'
import App from './App.vue'
import createRouter from './router'
import createStore from './store'
import createElement from './element'
import { sync } from 'vuex-router-sync'
import VueJsonp from 'vue-jsonp'
import LoadManager from './utils/LoadManager'
import 'babel-polyfill'

export default () => {
  const router = createRouter()
  const store = createStore()

  // Sync vue-router's current $route as part of vuex store's state.
  sync(store, router)

  // element-ui init
  createElement()

  // vue-jsonp init
  Vue.use(VueJsonp)

  const app = new Vue({
    router,
    store,
    render: h => h(App),
  })

  Vue.prototype.$jsonpHelper = LoadManager(app)
  return { app, router, store }
}
