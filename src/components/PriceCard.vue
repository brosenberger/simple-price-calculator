<template>
  <md-card>
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">{{ price.title }}</div>
        <div class="md-subhead">{{ price.price | currency('€ ') }} + {{price.stake | currency('€ ')}}</div>
      </md-card-header-text>
      <md-card-media></md-card-media>
    </md-card-header>
    <md-card-actions>
      <md-button v-on:click.native="callAdd(price.id)">Hinzufügen</md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
  export default {
    name: 'priceCard',
    props: {
      price: {
        type: Object
      }
    },
    data () {
      return {
      }
    },
    methods: {
      callAdd: function (event) {
        this.$emit('addprice', event)
      }
    }
  }
</script>

<style scoped>
</style>
