<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--12-col">
      <h1 class="title">About Me</h1>
    </div>
    <div class="mdl-cell mdl-cell--12-col">
      <p>現在工事中。アニメーションを使った洒落たページにしてみたい</p>
    </div>
    <div class="mdl-cell mdl-cell--12-col">
      <router-link to="/post/content_posts_etc/2018-06-15-about-me">プロフィールはこちら</router-link>
    </div>
    <div class="mdl-cell mdl-cell--12-col">
      <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" @click="goback">戻る</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return { }
  },
  methods: {
    goback() {
      this.$router.back();
    },
  }
}
</script>
