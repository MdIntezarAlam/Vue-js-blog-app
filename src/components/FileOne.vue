<!-- 1st use templete where we write html code -->
<template>
  <div>
    <p>File One</p>
    <FileTwo />
    <Method_and_Data />
  </div>
  <!--3=> and component will be use in templete (html) section as a component -->
</template>

<!--1=>if we want to use this file to another file we have to export -->
<!--2=>if we want to use another file in to this file we have to import -->
<!-- all export and import will be in only script section -->
<!--3=> after importing we will use components:{componetnName}  -->
<!--4=> and component will be use in templete (html) section as a component -->
<!-- 2nd use script where we write js code -->
<script>
import FileTwo from "./FileTwo.vue";
import Method_and_Data from "./Method_and_Data.vue";

export default {
  components: {
    FileTwo,
    Method_and_Data,
  },
};
</script>
<!--3=> for styling purpose we will use style tag after script -->
<!-- if we use scoped in one file it will be valid only one file -->
<style scoped>
p {
  font-size: 24px;
  color: #151515;
}
</style>
