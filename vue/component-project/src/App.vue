<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/dataBinding">dataBinding</router-link> |
    <router-link to="/ListBinding">ListBinding</router-link> |
    <router-link to="/IfBinding">IfBinding</router-link> |
    <router-link to="/OnEvent">OnEvent</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2b4358;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
