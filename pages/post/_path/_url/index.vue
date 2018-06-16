<template>
  <div>
    <h1>{{title}}</h1>
    <div v-html="bodyHtml"></div>
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
  }
}
</script>
