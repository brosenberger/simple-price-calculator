<template>
  <div id="app">
    <header-summary></header-summary>
    <price-cards :price-list="priceList" @addprice="addPrice"></price-cards>
    <md-divider class="md-inset"></md-divider>
    <summary-list :price-list="currentList" @removeprice="removePrice"></summary-list>
    <speed-dial></speed-dial>
  </div>
</template>

<script>
  import SpeedDial from './components/SpeedDial'
  import HeaderSummary from './components/HeaderSummary'
  import PriceCards from './components/PriceCards'
  import SummaryList from './components/SummaryList'

  export default {
    name: 'app',
    components: {
      SummaryList,
      PriceCards,
      HeaderSummary,
      SpeedDial
    },
    data () {
      return {
        priceList: [
          {title: 'Großes Essen', stake: 0, price: 4, id: 1},
          {title: 'Kleines Essen', stake: 0, price: 3.5, id: 2},
          {title: 'Kaffee || Kuchen', stake: 0, price: 3.5, id: 3}
        ],
        currentList: []
      }
    },
    methods: {
      addPrice (id) {
        let addition = this.priceList.find(function (element) {
          return element.id === id
        })
        this.currentList.push(addition)
      },
      removePrice (id) {
        let firstIndex = this.currentList.findIndex(function (element) {
          return element.id === id
        })[0]
        this.currentList.splice(firstIndex, 1)
      }
    }
  }
</script>

<style>
</style>
