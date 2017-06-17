<template>
  <div id="app">
    <header-summary></header-summary>
    <price-cards :price-list="priceList"></price-cards>
    <speed-dial></speed-dial>
  </div>
</template>

<script>
  import SpeedDial from './components/SpeedDial'
  import HeaderSummary from './components/HeaderSummary'
  import PriceCards from './components/PriceCards'

  export default {
    name: 'app',
    components: {
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
        ]
      }
    }
  }
</script>

<style>
</style>
