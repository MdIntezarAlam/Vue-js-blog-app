<template>
  <p>paragraph</p>
  <FileOne />
</template>

<script>
import FileOne from "./components/FileOne.vue";
export default {
  name: "App",
  components: {
    FileOne,
  },
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
