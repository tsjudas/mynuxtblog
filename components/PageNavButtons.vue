<template>
  <div class="mdl-cell mdl-cell--12-col">
    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" @click="goback">戻る</button>
  </div>
</template>

<style>
</style>

<script>
export default {
  methods: {
    goback() {
      this.$router.back();
    },
  }
}
</script>
