<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <users></users>
      <h1>横联：大哥牛逼！！</h1>
    </div>
    <router-view/>  
  </div>
</template>

<script>
import UsersVue from './components/Users.vue';
export default {
  components:{
    "users":UsersVue, //组件名不可以和自带标签名冲突 如p div...
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
