<template>
  <div id="app">
    <header-summary :event-title="eventTitle" :prices="currentList | calculate"></header-summary>
    <price-cards :price-list="priceList" @addprice="addPrice"></price-cards>
    <md-divider class="md-inset"></md-divider>
    <summary-list :price-list="currentList | summarize" @removeprice="removePrice"></summary-list>
    <speed-dial @removeallprices="removeAllPrices"></speed-dial>
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
        eventTitle: 'Sommerfest 2017',
        priceList: [
          {title: 'Großes Essen', stake: 0, price: 4, id: 1},
          {title: 'Kleines Essen', stake: 0, price: 3.5, id: 2},
          {title: 'Kaffee || Kuchen', stake: 1, price: 3.5, id: 3}
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
        console.log('remove price with id' + id)
        let firstIndex = this.currentList.findIndex(function (element) {
          return element.id === id
        })
        if (firstIndex !== -1) {
          this.currentList.splice(firstIndex, 1)
        }
      },
      removeAllPrices () {
        this.currentList.splice(0, this.currentList.length)
      }
    }
  }
</script>

<style>
</style>
