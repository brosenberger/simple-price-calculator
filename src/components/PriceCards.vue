<template>
  <md-layout>
    <price-card
      v-for="price in priceList"
      :key="price.id"
      :price="price"
    ></price-card>
  </md-layout>
</template>

<script>
  import PriceCard from './PriceCard'
  export default {
    components: {PriceCard},
    name: 'priceCards',
    props: {
      priceList: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data () {
      return {}
    },
    callAdd (id) {
      window.alert(id + ' clicked')
    }
  }
</script>

<style scoped>
</style>
