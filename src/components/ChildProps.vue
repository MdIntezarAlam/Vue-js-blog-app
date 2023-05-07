<template>
  <div>Child Props Components data is: {{ childuserData }}</div>
  <div>Child Props Components ArryOf Data is: {{ user}}</div>
</template>

<script>
// How to get props data from parent to child
// using props
export default {
  name: "ChildProps",
  props:{
    childuserData:String,
    user:{}
  }
};
</script>

<style></style>
