<!-- All in one import and export -->
<template>
  <div>Event or button</div>
  <!-- <p v-on:mousemove="getMouseHover()">Console col</p> -->
  <button>counted values {{ countedValue }}</button>
  <button v-on:click="clickme('btn-1')">Single Click</button>
  <button v-on:dblclick="clickme('btn-2ble clcik')">dubble clcik</button>
</template>
<script>
export default {
  name: "Event",
  data() {
    return {
      countedValue: 0,
    };
  },
  methods: {
      // getMouseHover() {
      //   alert("console");
      // },
    clickme(clicked) {
      //   alert(clicked);
      this.countedValue = this.countedValue + 2;
    },
  },
};
</script>

<style scoped>
p {
  font-size: 24px;
  color: #f47a7a;
}
</style>
