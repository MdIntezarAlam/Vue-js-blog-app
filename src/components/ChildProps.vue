<template>
  <div>Child Props Components data userName is: {{ userName }}</div> <br>
  <div>Child Props Components ArryOf Data is: {{ childUserData}}</div>
</template>

<script>
// How to get props data from parent to child
// using props
export default {
  name: "ChildProps",
  props:{
    userName:String,
    childUserData:Object
    
  }
};
</script>

<style></style>
