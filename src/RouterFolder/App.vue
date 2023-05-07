<!--Note: use this file inside src folder -->

<template>
  <div>Router Ap Page</div>
  <router-link to="/">Home</router-link>
  <router-link to="/page1">Page1</router-link>
  <router-link to="/page2">Page2</router-link>
  <router-link to="/page3">Page3</router-link>
  <router-link to="/page4">Page3</router-link>
  <router-link to="/page5">Page4</router-link>
  <router-view></router-view>
</template>
<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  width: 100%;
  height: 100vh;
  background-color: #d4d4d4;
  color: #fff;
  text-align: center;
}
</style>
