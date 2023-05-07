<template>
  <div>
    <input v-model="fomValue.uName" type="text" placeholder="Enter Name" />
    <br /><br />
    <input v-model="fomValue.uEmail" type="text" placeholder="Enter Email" />
    <br /><br />
    <input v-model="fomValue.uPass" type="text" placeholder="Enter Password" />
    <br /><br />
    <button v-on:click="formSubmitBtn" type="button">form submit</button>
    <br /><br />
  </div>
</template>

<script>
export default {
  name: "SimpleForm",
  data() {
    return {
      fomValue: {
        uName: "",
        uEmail: "",
        uPass: "",
      },
    };
  },
  //definig  method or functions
  methods: {
    formSubmitBtn() {
      console.log("Form SUbmitted", this.fomValue);
    },
  },
};
</script>
