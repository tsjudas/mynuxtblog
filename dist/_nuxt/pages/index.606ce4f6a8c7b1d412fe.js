webpackJsonp([2],{"+ptz":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",{staticClass:"title"},[e._v("My Blog App")]),e._l(e.posts,function(t){return a("div",{key:t.id},[a("router-link",{attrs:{to:"/post/"+t.path+"/"+t.url}},[e._v(e._s(t.title))]),a("p",[e._v(e._s(t.preview))])],1)}),e.canBack?a("button",{on:{click:e.prevpage}},[e._v("前へ")]):a("button",{attrs:{disabled:""}},[e._v("前へ")]),a("select",{domProps:{value:e.selectedPage},on:{change:e.jumppage}},e._l(e.jumppages,function(t){return a("option",{key:t.page,domProps:{value:t.page}},[e._v("\n      "+e._s(t.name)+"\n    ")])})),e.canForward?a("button",{on:{click:e.nextpage}},[e._v("次へ")]):a("button",{attrs:{disabled:""}},[e._v("次へ")]),a("router-link",{attrs:{to:"/post/game"}},[e._v("テスト")])],2)};n._withStripped=!0;var s={render:n,staticRenderFns:[]};t.a=s},"/TYz":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("5k48"),s=a("+ptz"),p=a("VU/8")(n.a,s.a,!1,null,null,null);p.options.__file="pages/index.vue",t.default=p.exports},"5k48":function(e,t,a){"use strict";var n=a("Dd8w"),s=a.n(n),p=a("NYxO");t.a={data:function(){return{}},computed:s()({},Object(p.mapGetters)({posts:"getFilteredPosts",canBack:"canBack",canForward:"canForward",pagenum:"pagenum",jumppages:"jumppages",selectedPage:"selectedPage"})),methods:s()({linkUrl:function(){},jumppage:function(e){this.$store.dispatch("jump",e.target.options[e.target.selectedIndex].value)}},Object(p.mapMutations)({nextpage:"nextpage",prevpage:"prevpage"})),mounted:function(){this.$store.dispatch("load")}}}});