<template>
  <div>
    <h1 class="title">ポンコツの雑記帳</h1>
    <div v-for="post in posts" :key="post.id">
      <router-link :to="`/post/${post.path}/${post.url}`">{{post.title}}</router-link>
      <p>{{post.preview}}</p>
    </div>
    <button v-if="canBack" @click='prevpage'>前へ</button>
    <button v-else disabled>前へ</button>
    <select :value="selectedPage" @change="jumppage">
      <option v-for="item in jumppages" :key="item.page" :value="item.page">
        {{item.name}}
      </option>
    </select>
    <button v-if="canForward" @click='nextpage'>次へ</button>
    <button v-else disabled>次へ</button>
    <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
      <i class="material-icons">add</i>
    </button>

  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      posts: 'getFilteredPosts',
      canBack: 'canBack',
      canForward: 'canForward',
      pagenum: 'pagenum',
      jumppages: 'jumppages',
      selectedPage: 'selectedPage',
    }),
  },
  methods: {
    linkUrl() {
      
    },
    jumppage(e) {
      this.$store.dispatch("jump", e.target.options[e.target.selectedIndex].value);
    },
    ...mapMutations({
      nextpage: 'nextpage',
      prevpage: 'prevpage',
    })
  },
  mounted() {
    this.$store.dispatch("load");
  },
};
</script>
