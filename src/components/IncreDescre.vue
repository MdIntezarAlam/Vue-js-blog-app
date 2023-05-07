<template>
  <div>Props</div>
  <br />
  <button v-on:click="incremenet()">Increment</button>&nbsp;
  <span>{{ count }}</span
  >&nbsp;
  <button v-on:click="decremenet()">Decrement</button>
</template>

<script>
export default {
  name: "IncreDescre",
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    incremenet() {
this.count++
    },
    decremenet(){
this.count--
    }
  },
};
</script>

<style></style>
