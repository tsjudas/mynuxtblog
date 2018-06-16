<template>
  <div class="mdl-grid">
    <div v-for="post in posts" :key="post.id" class="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
      <div class="mdl-card__title">
        <router-link :to="`/post/${post.path}/${post.url}`" class="mdl-card__title-text">{{post.title}}</router-link>
      </div>
      <div class="mdl-card__supporting-text">
        {{post.preview}}
      </div>
    </div>
    <div class="mdl-layout mdl-grid">
      <div class="mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" v-if="canBack" @click='prevpage'>
          <i class="material-icons">arrow_back</i>
        </button>
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" v-else disabled>
          <i class="material-icons">arrow_back</i>
        </button>
      </div>
      <div class="mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
        <div class="mdl-textfield mdl-js-textfield">
          <select class="mdl-textfield__input" :value="selectedPage" @change="jumppage">
            <option v-for="item in jumppages" :key="item.page" :value="item.page">
              {{item.name}}
            </option>
          </select>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" v-if="canForward" @click='nextpage'>
          <i class="material-icons">arrow_forward</i>
        </button>
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" v-else disabled>
          <i class="material-icons">arrow_forward</i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      posts: "getFilteredPosts",
      canBack: "canBack",
      canForward: "canForward",
      pagenum: "pagenum",
      jumppages: "jumppages",
      selectedPage: "selectedPage"
    })
  },
  methods: {
    jumppage(e) {
      this.$store.dispatch(
        "jump",
        e.target.options[e.target.selectedIndex].value
      );
    },
    ...mapMutations({
      nextpage: "nextpage",
      prevpage: "prevpage"
    })
  },
  mounted() {
    this.$store.dispatch("load");
    componentHandler.upgradeDom();
  }
};
</script>
