<template>
  <!-- <div>Reusable Child component :{{ item }}</div> -->
  <span>Name is: {{ item.name }}</span>&nbsp;
  <span>Email is :{{ item.email }}</span>&nbsp;
  <span>Pass is: {{ item.pass }}</span>&nbsp;
  <button v-on:click="infoAlertForDifferenBtn(item.name)">Info</button>
</template>
<script>
  // to accept the data from reusable1 component use props
export default {
  name: "Reusable1",
  props: {
    item: Object,
    infoAlertForDifferenBtn:Function,
    /// i have paased as afunction so it will recive as afunctions only,
  },

};
</script>
