<template>
  <md-list>
    <template v-for="price in priceList">
      <md-list-item>
        <span>{{price.title}}</span><md-icon @click.native="remove(price.id)">delete</md-icon>
      </md-list-item>
    </template>
  </md-list>
</template>

<script>
  export default {
    name: 'summaryList',
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
      remove (id) {
        this.$emit('removeprice', id)
      }
    }
  }
</script>

<style scoped>
</style>
