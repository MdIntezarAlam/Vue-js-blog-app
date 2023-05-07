<!-- 1st use templete where we write html code -->
<template>
  <div>
    <!-- <p>File One</p>
    <FileTwo />
    <p>Method and data?</p>
    <Method_and_Data />
    <p>Event Handling</p>
    <Event /> -->
    <!-- <p>Form Input</p>
    <Input /> -->
    <!-- <p>if else</p>
    <IfElse /> -->
    <!-- <p>For Loop</p>
    <ForLoop /> -->
    <!-- <p>IncreDescre in vue js</p>
    <IncreDescre /> -->
    <!-- <p>props in vue js</p>
    <ParentProps /> -->
    <!-- How to reuse component -->
    <Reusable2 />
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
import Input from "./Input.vue";
import Event from "./Event.vue";
import IfElse from "./IfElse.vue";
import ForLoop from "./ForLoop.vue";
import ParentProps from './ParentProps.vue'
import IncreDescre from './IncreDescre.vue'
import Reusable2 from './Reusable2.vue'
export default {
  components: {
    FileTwo,
    Method_and_Data,
    Event,
    Input,
    IfElse,
    ForLoop,
    IncreDescre,
    ParentProps,
    Reusable2
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
