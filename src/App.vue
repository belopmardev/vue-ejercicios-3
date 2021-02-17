<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/ejemplo3">Ejemplo 3</router-link> |
    <router-link to="/ejemplo4">Ejemplo 4</router-link> |
    <router-link to="/ejemplo6">Ejemplo 6</router-link> |
    <router-link to="/ejemplo7">Ejemplo 7</router-link> |
    <router-link to="/ejemplo8">Ejemplo 8</router-link> |
    <router-link to="/ejemplo9">Ejemplo 9</router-link> |
    <router-link to="/ejemplo10">Ejemplo 10</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
