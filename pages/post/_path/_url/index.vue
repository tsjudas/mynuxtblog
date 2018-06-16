<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--12-col">
      <h1>{{title}}</h1>
    </div>
    <div class="mdl-cell mdl-cell--12-col" v-html="bodyHtml"></div>
    <div class="mdl-cell mdl-cell--12-col">
      <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" @click="goback">戻る</button>
    </div>
  </div>
</template>

<script >
import {sourceFileArray} from '~/content/json/summary.json';
export default {
  validate({params}){
    return sourceFileArray.filter(item => {
      return item.includes(params.url);
    }).length > 0;
  },
  asyncData({params}){
    const moduleUrl = params.path.replace(/_/g, '/') + '/' + params.url;
    return Object.assign({}, require(`~/${moduleUrl}.json`), moduleUrl);
  },
  head() {
    const title = `${this.title}`;
    return {
      title: title,
    };
  },
  methods: {
    goback() {
      this.$router.back();
    }
  }
}
</script>
