<template>
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header has-drawer">
  <header class="mdl-layout__header mdl-layout--small-screen-only mdl-color--grey-100">
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title mdl-color-text--black">雑記帳 Techもあるよ</span>
    </div>
  </header>
  <div class="mdl-layout__drawer mdl-color-text--black">
    <span class="mdl-layout-title">雑記帳 Techもあるよ</span>
    <nav class="mdl-navigation">
      <router-link class="mdl-navigation__link" to="/" @click.native="closeDrawer">Home</router-link>
      <router-link class="mdl-navigation__link" to="/about/" @click.native="closeDrawer">About me</router-link>
      <router-link class="mdl-navigation__link" to="/" @click.native="closeDrawer">Contact</router-link>
    </nav>
  </div>
  <main class="mdl-layout__content">
    <div class="page-content">
      <nuxt/>
    </div>
  </main>
</div>
</template>

<script>
export default {
  methods: {
    closeDrawer: () => {
      document.querySelector('.mdl-layout__obfuscator').classList.remove('is-visible')
      document.querySelector('.mdl-layout__drawer').classList.remove('is-visible')

      document.querySelector('.mdl-layout__drawer').setAttribute('aria-hidden', 'true')
      document.querySelector('.mdl-layout__drawer-button').setAttribute('aria-expanded', 'false')
    }
  }
}
</script>

<style>
.mdl-layout__header .mdl-layout__drawer-button i {
  color: #000;
}
.mdl-layout {
    overflow: visible;
}
.mdl-layout__drawer {
    position: fixed;
}
.mdl-layout__content {
    display: block;
    overflow: visible;
}
.is-small-screen .mdl-layout__content {
    margin-top: 56px;
}
.mdl-layout__header {
    position: fixed;
}
.mdl-layout__obfuscator {
    position: fixed;
}
html, body {
  overflow-y: auto;
  min-height: 100%;
}
mdl-layout {
  min-height: 100%;
}
</style>
