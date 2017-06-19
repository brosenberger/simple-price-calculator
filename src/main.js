// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMaterial from 'vue-material'
import Vue2Filters from 'vue2-filters'
import App from './App'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(Vue2Filters)
Vue.filter('summarize', function (list) {
  let summarized = []
  list.forEach(function (element) {
    let idIndex = summarized.findIndex(function (sElem) { return sElem.id === element.id })
    if (idIndex === -1) {
      element['quantity'] = 1
      summarized.push(element)
    } else {
      summarized[idIndex]['quantity']++
    }
  })
  return summarized.sort(function (a, b) {
    return a.id - b.id
  })
})
Vue.filter('calculate', function (list) {
  let prices = {
    stake: 0,
    price: 0,
    total: 0
  }

  list.forEach(function (element) {
    prices.stake += element.stake
    prices.price += element.price
    prices.total += element.stake + element.price
  })

  return prices
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
})
