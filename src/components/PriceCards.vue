<template>
  <md-layout md-gutter>
    <price-card
      v-for="price in priceList"
      :key="price.id"
      :price="price"
      v-on:addprice="callAdd"
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
    methods: {
      callAdd (id) {
        this.$emit('addprice', id)
      }
    }
  }
</script>

<style scoped>
</style>
