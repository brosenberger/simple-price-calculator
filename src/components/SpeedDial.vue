<template>
  <md-speed-dial md-open="hover" class="md-fab-bottom-left" md-theme="purple">
    <md-button class="md-fab" md-fab-trigger>
      <md-icon md-icon-morph>close</md-icon>
      <md-icon>share</md-icon>
    </md-button>

    <md-button class="md-fab md-primary md-mini md-clean">
      <md-icon>email</md-icon>
    </md-button>

    <md-button class="md-fab md-primary md-mini md-clean">
      <md-icon>content_copy</md-icon>
    </md-button>
  </md-speed-dial>
</template>

<script>
  export default {
    name: 'speedDial',
    data () {
      return { }
    }
  }
</script>

<style scoped>
</style>
