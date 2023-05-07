<template>
  <div>Parent Props Componetns</div>
  <p>Get Child Props Data.</p>
  <!-- we can pass multiple data from parent to child components -->
  <ChildProps childuserData="Yahudi" user="userData" />
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
    };
  },
  methods: {},
};
</script>

<style></style>
