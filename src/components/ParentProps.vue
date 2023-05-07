<template>
  <div>Parent Props Componetns</div>
  <p>Get Child Props Data.</p>
  <!-- we can pass multiple data from parent to child components sunf : -->
  <ChildProps userName="Yahudi" :childUserData="childUserData" />
  <br />
</template>

<script>
import ChildProps from "./ChildProps.vue";
export default {
  name: "ParentProps.vue",
  components: {
    ChildProps,
  },
  data() {
    return {
      childUserData: [
        { name: "Rakesh", email: "rakesh@gmail.com" },
        { name: "Rakesh", email: "rakesh@gmail.com" },
      ],
    };
  },
  methods: {},
};
</script>

<style></style>
