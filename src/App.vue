<template>
  <div>
    <h1>Hello World !</h1>
    <h2>Server Status : {{ status }}</h2>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      status: "Critical"
    }
  }
}
</script>


<style lang="scss">
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
