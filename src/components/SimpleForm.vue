<template>
  <div>
    <input v-model="fomValue.uName" type="text" placeholder="Enter Name" />
    <br /><br />
    <input v-model="fomValue.uEmail" type="text" placeholder="Enter Email" />
    <br /><br />
    <input v-model="fomValue.uPass" type="text" placeholder="Enter Password" />
    <br /><br />
    <p>Technology</p>
    <label for="java">java</label>
    <input
      v-model="fomValue.technoloy"
      type="checkbox"
      value="java"
      id="java"
    />
    <label for="python">python</label>
    <input
      v-model="fomValue.technoloy"
      type="checkbox"
      value="python"
      id="python"
    />
    <br /><br />
    <p>Select Country</p>
    <select v-model="fomValue.country">
      <option value="India">India</option>
      <option value="China">China</option>
      <option value="Nepal">Nepal</option>
    </select>

    <br />
    <br />
    <p>Select gender</p>
    <label>Male</label>
    <input v-model="fomValue.gender"  type="radio" name="gender" value="male" />
    <label>Female</label>
    <input  v-model="fomValue.gender" type="radio" name="gender" value="female" />

    <button v-on:click="formSubmitBtn" type="button">form submit</button>
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
        technoloy: [],
        country: "",
        gender: "",
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
