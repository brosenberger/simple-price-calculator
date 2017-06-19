<template>
  <md-toolbar>
    <md-layout md-gutter>
      <md-layout md-flex="50" md-flex-small="100"><h1 class="md-title">{{eventTitle}}</h1></md-layout>
      <md-layout md-flex="50" md-flex-small="100" md-align="end" md-align-small="start"><h2>
        <md-layout>
          <md-layout md-flex="30" md-align="center">Preis</md-layout>
          <md-layout md-flex="30" md-align="center">Einsatz</md-layout>
          <md-layout md-flex="30" md-align="center">Gesamt</md-layout>
          <md-layout md-flex="30" md-align="center">{{prices.price | currency('€ ')}}</md-layout>
          <md-layout md-flex="30" md-align="center">{{prices.stake | currency('€ ')}}</md-layout>
          <md-layout md-flex="30" md-align="center">{{prices.total | currency('€ ')}}</md-layout>
        </md-layout>
      </h2></md-layout>
    </md-layout>
  </md-toolbar>
</template>

<script>
  export default {
    name: 'headerSummary',
    props: {
      eventTitle: {
        type: String,
        default () {
          return 'Mein Preis'
        }
      },
      prices: {
        type: Object
      }
    },
    data () {
      return {}
    }
  }
</script>

<style scoped>
</style>
