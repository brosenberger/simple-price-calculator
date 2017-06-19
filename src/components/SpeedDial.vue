<template>
  <md-button @click.native="removeAll" class="md-fab md-fab-bottom-left md-raised md-accent">
    <md-icon>delete</md-icon>
  </md-button>
</template>

<script>
  export default {
    name: 'speedDial',
    data () {
      return { }
    },
    methods: {
      removeAll () {
        this.$emit('removeallprices')
      }
    }
  }
</script>

<style scoped>
</style>
