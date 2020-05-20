<template>
  <div id="app">
    <div id="nav" style="display: flex;justify-content: center;align-content: center;cursor: pointer;">
      <div @click="toHome" class="mr10">Home</div>
      <div @click="toAbout" class="mr10">About</div>
      <div @click="toFunction" class="mr10">Function</div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    toHome () {
      this.$router.push({
        name: 'Home'
      })
    },
    toAbout () {
      this.$router.push({
        name: 'About'
      })
    },
    toFunction () {
      this.$router.push({
        name: 'Function'
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
