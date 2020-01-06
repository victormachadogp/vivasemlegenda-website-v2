<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
body {
}
.highlight {
  background-color: #fbb03b;
  color: white;
  padding: 2px 0.35rem;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
