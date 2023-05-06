<template>
  <!-- we have to use item in listof data which means
item is fixed word but listofdata is userdefind word
we have to select data from listofdata
-->

  <div>display data as a For Loop Conditions</div>
  <li v-for="item in listOfData">
    {{ item.toUpperCase() }}
  </li>
  <br />
  <br />
  <ul>
    <p v-for="userData in users">
      userName is {{ userData.name }} userEmail is {{ userData.email }}
    </p>
  </ul>
</template>

<script>
export default {
  name: "ForLoop",
  data() {
    return {
      listOfData: ["chili", "mirchi", "roti"],
      users: [
        { name: "Rakesh Kumar", email: "rakeshemail" },
        { name: "Rakesh Kumar", email: "rakeshemail" },
        { name: "Rakesh Kumar", email: "rakeshemail" },
        { name: "Rakesh Kumar", email: "rakeshemail" },
      ],
    };
  },
};
</script>
