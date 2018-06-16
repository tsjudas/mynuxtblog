<template>
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header has-drawer">
  <header class="mdl-layout__header mdl-layout--small-screen-only mdl-layout__header--transparent">
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title mdl-color-text--black">ポンコツの雑記帳</span>
    </div>
  </header>
  <div class="mdl-layout__drawer mdl-color-text--black">
    <span class="mdl-layout-title">ポンコツの雑記帳</span>
    <nav class="mdl-navigation">
      <router-link class="mdl-navigation__link" to="/">Home</router-link>
      <router-link class="mdl-navigation__link" to="/">About me</router-link>
      <router-link class="mdl-navigation__link" to="/">Contact</router-link>
    </nav>
  </div>
  <main class="mdl-layout__content">
    <div class="page-content">
      <nuxt/>
    </div>
  </main>
</div>
</template>

<style>
.mdl-layout__header .mdl-layout__drawer-button i {
  color: #000;
}
</style>
