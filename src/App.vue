<template>
  <div id="app">

    <Login msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Login from './components/Login.vue';
export default {
  name: 'App',
  components: {
    Login
}
}
</script>

<style>
@import "~bulma/css/bulma.css";
</style>
