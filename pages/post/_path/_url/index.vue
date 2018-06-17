<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--12-col">
      <h3>{{title}}</h3>
    </div>
    <div class="mdl-cell mdl-cell--12-col" v-html="parseHtml"></div>
    <PageNavButtons />
  </div>
</template>

<style>
table {
  background-color: #F4FFFF;
  border-spacing: 0;
  border-top: 1px solid #000000;
  border-right: 1px solid #000000;
}
th {
  background-color: #EAFFEA;
  border-bottom: 1px solid #000000;
  border-left: 1px solid #000000;
}
td {
  border-bottom: 1px solid #000000;
  border-left: 1px solid #000000;
}
tr:nth-child(2n+1) {
  background-color: #FFFFFF;
}
</style>

<script >
import {sourceFileArray} from '~/content/json/summary.json';
import PageNavButtons from '~/components/PageNavButtons';
const { markdownItTable } = require('markdown-it-table');
const md = require('markdown-it')({linkify: true})
  .use(require('markdown-it-highlightjs'))
  .use(require('markdown-it-emoji'))
  .use(markdownItTable);

export default {
  validate({params}){
    return sourceFileArray.filter(item => {
      return item.includes(params.url);
    }).length > 0;
  },
  asyncData({params}){
    const moduleUrl = params.path.replace(/_/g, '/') + '/' + params.url;
    const post = Object.assign({}, require(`~/${moduleUrl}.json`), moduleUrl);
    post.parseHtml = md.render(post.bodyContent);
    return post;
  },
  head() {
    const title = `${this.title}`;
    return {
      title: title,
    };
  },
  components: {
    PageNavButtons
  }
}
</script>
