<template>
  <!-- Sometimes, it's useful to dynamically switch between components,
     like in a tabbed interface: -->
  <!-- 
        1=>make new component and use it as a tab called as dynamic component
         we have to use component it is compulasry   -->
  <!-- Component changes when currentTab changes -->
  <!-- 2. <component :is="tabs[currentTab]"></component> -->

  <!-- btn tab ke inside jo var hai wo name smae hona chahiye component ka -->
  <div>DynamicComponent using Three tab</div>
  <button v-on:click="tab='DynamicC1'">component One</button>
  <button v-on:click="tab='DynamicC2'">component Two</button>
  <button v-on:click="tab='DynamicC3'">component Three</button>

  <component :is="tab" />
</template>
<script>
import DynamicC1 from "./DynamicC1.vue";
import DynamicC2 from "./DynamicC2.vue";
import DynamicC3 from "./DynamicC3.vue";
export default {
  name: "DynamicComp",
  components: {
    DynamicC1,
    DynamicC2,
    DynamicC3,
  },
  data() {
    return {
      tab: "tabChange",
    };
  },
};
</script>
