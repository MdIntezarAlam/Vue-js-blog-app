<template>
  <div>
    <p>if else condition</p>
    <p v-if="truHai">if true then show it if cond</p>
    <p v-else>else then show it else cond</p>

    <p v-else>Show and Hide</p>
    <br> <br>
    <button v-on:click="truHai=!truHai">Show</button>
  </div>
</template>

<script>
export default {
  name: "IfElse",
  data() {
    return {
      truHai: false,
    };
  },
  //definig  method or functions
  methods: {},
};
</script>
