const onePageNum = 4;

export const state = () => ({
  posts: [],
  pagenum: 1,
});

export const mutations = {
  set: (state, items) => {
    state.posts = items;
  },
  nextpage: state => {
    state.pagenum = state.pagenum + onePageNum;
  },
  prevpage: state => {
    state.pagenum = state.pagenum - onePageNum;
  },
  jumppage: (state, jumpcnt) => {
    state.pagenum = (jumpcnt - 1) * onePageNum + 1;
  },
};

export const getters = {
  pagenum: state => {
    return state.pagenum;
  },
  jumppages: state => {
    let arr = new Array();
    for (let i = 1; i <= Math.ceil(state.posts.length / onePageNum); i++) {
      arr.push({
        page: i,
        name: "" + i,
      });
    }
    return arr;
  },
  getFilteredPosts: state => {
    return state.posts.filter(item => {
      return state.pagenum <= item.id && item.id < state.pagenum + onePageNum;
    });
  },
  canForward: state => {
    return state.posts.length >= state.pagenum + onePageNum;
  },
  canBack: state => {
    return 1 <= state.pagenum - onePageNum;
  },
  selectedPage: state => {
    return Math.ceil(state.pagenum/onePageNum);
  },
};

export const actions = {
  load: ctx => {
    const summary = require('~/content/json/summary.json');
    let pageCnt = 1;
    const items = Object.values(summary.fileMap).map(item => {
      item.id = pageCnt++;
      item.path = item.dir.replace(new RegExp("/", "g"), "_");
      item.url = item.base.replace(item.ext, "");
      return item;
    }).sort((a, b) => {
      return a.created < b.created;
    });
    ctx.commit("set", items);
  },
  jump: (ctx, page) => {
    ctx.commit("jumppage", page);
  }
};
