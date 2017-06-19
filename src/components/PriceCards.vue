<template>
  <md-layout :md-gutter="50" class="card-layout">
    <md-layout>
      <price-card
        v-for="price in priceList"
        :key="price.id"
        :price="price"
        v-on:addprice="callAdd"
      ></price-card>
    </md-layout>
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
  .card-layout {
    margin: 16px 5%;
    display: flex;
  }
  .card-layout .md-card {
    margin-top: 8px;
    margin-left: 16px;
  }
  .card-layout .md-card + .md-card {
    margin-left: 16px;
  }

</style>
