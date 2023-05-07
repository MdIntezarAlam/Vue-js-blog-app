<template>
  <div>Reusable2 Parent component</div>

  <!-- 1st way display all the datad with in the conmponent-->
  <!-- <ul v-for="item in listOfData">
    <li>
      Name is:{{ item.name }} Email is:{{ item.email }} And Passwor is:
      {{ item.pass }}
    </li>
  </ul> -->

  <!-- 2nd way -->
  <!-- insted of displaying aal the data in same component use another componnets -->
  <div v-for="item in listOfData">
    <Reusable1
      :item="item"
      :infoAlertForDifferenBtn="infoAlertForDifferenBtn"
    />
    <!-- use colon is compulsary  -->
  </div>
</template>
<script>
import Reusable1 from "./Reusable1.vue";
export default {
  name: "Reusable2",
  components: {
    Reusable1,
  },
  methods: {
    infoAlertForDifferenBtn(name) {
      // alert("Information alter");
      alert(name);
    },
  },
  data() {
    return {
      listOfData: [
        { name: "Anil", email: "Siddu", pass: 12345678 },
        { name: "Siddu", email: "Siddu", pass: 12345678 },
        { name: "Anil", email: "Siddu", pass: 12345678 },
        { name: "Anil", email: "Siddu", pass: 12345678 },
        { name: "Anil", email: "Siddu", pass: 12345678 },
        { name: "Anil", email: "Siddu", pass: 12345678 },
        { name: "Anil", email: "Siddu", pass: 12345678 },
        { name: "Anil", email: "Siddu", pass: 12345678 },
        { name: "Anil", email: "Siddu", pass: 12345678 },
        { name: "Anil", email: "Siddu", pass: 12345678 },
        { name: "Anil", email: "Siddu", pass: 12345678 },
      ],
    };
  },
};
</script>
