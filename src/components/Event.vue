<!-- All in one import and export -->
<template>
  <div>Event or button</div>
  <!-- <p v-on:mousemove="getMouseHover()">Console col</p> -->
  <!-- <button>counted values {{ countedValue }}</button> -->
  <button v-on:click="clickme('btn-1')">Single Click</button>
  <button v-on:dblclick="clickme('btn-2ble clcik')">dubble clcik</button>
  <input
    type="text"
    placeholder="Two way binding"
    v-model="countbindignValue"
  />
  <p>See binding res{{ countbindignValue }}</p>
</template>
<script>
export default {
  name: "Event",
  data() {
    return {
      //   countedValue: 0,  //increment
      countbindignValue:10, //binding 2 way
    };
  },
  methods: {
    // getMouseHover() {
    //   alert("console");
    // },
    // clickme() {
    //   this.countedValue = this.countedValue + 2;
    // },
    //two way binding
  },
};
</script>

<style scoped>
p {
  font-size: 24px;
  color: #f47a7a;
}
</style>
