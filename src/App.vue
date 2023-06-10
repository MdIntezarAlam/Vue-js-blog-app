<template>
  <div class="center">
    <h2>Hii Md Intezar Alam</h2>
    <p>Welcome To Vue Js-3</p>
  </div>
  <FileOne />
  <div class="routers">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/cart">Cart</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/signup">Signup</router-link>
    <router-link to="/signup">DynamicRoutePage</router-link>
  </div>
  <router-view></router-view>
</template>

<script>
import FileOne from "./components/FileOne.vue";
import Home from "./routerscomponent/Home.vue";
export default {
  name: "App",
  components: {
    FileOne,
    Home,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  width: 100vw;
  height: 100%;
  color: #333;
  background-color: #c99f9f;
  text-align: center;
  font-size: 22px;
}
.center {
  color: #fff;
  font-size: 38px;
  background-color: #c99f9f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.routers {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 43px;
}
</style>
