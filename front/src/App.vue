<template>
  <div id="app">
    <header id="masthead">
      <h1><router-link :to="{ name: 'Home', params: {} }">gtsz.rcp</router-link></h1>
      <nav>
        <ul>
          <li><router-link :to="{name: 'PageView', params: {slug: 'about'}}">About</router-link></li>
          <li><router-link :to="{name: 'PostList'}">Posts</router-link></li>
          <li><router-link :to="{name: 'BibList'}">Bibliography</router-link></li>
          <li><router-link :to="{name: 'DistList'}">Distributor</router-link></li>
        </ul>
      </nav>
    </header>
    <router-view/>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
</style>
