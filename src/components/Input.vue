<template>
  <div>
    <input v-model="uName" type="text" placeholder="Enter Name" /> <br /><br />
    <input v-model="uEmail" type="text" placeholder="Enter Email" />
    <br /><br />
    <input v-model="uPass" type="text" placeholder="Enter Passwor" /><br />
    <br /><br />
    <p> for checkbox values=> Select Language</p>
    <label for="java">Java</label>
    <input v-model="checkBoxValue" id="java" type="checkbox" value="java" />
    <label for="python">python</label>
    <input v-model="checkBoxValue" id="python" type="checkbox" value="python" />
    <label for="html">html</label>
    <input v-model="checkBoxValue" id="html" type="checkbox" value="html" />
    <label for="css">css</label>
    <input v-model="checkBoxValue" type="checkbox" value="css" />
    <label id="css" for="">js</label>
    <input v-model="checkBoxValue" type="checkbox" value="js" />
    <label for="native">native js</label>
    <input v-model="checkBoxValue" id="native" type="checkbox" value="native" />
    <p>{{ checkBoxValue }}</p>
    <br />
    <br />
    <button v-on:click="formSubmitBtn" type="button">form submit</button>
  </div>
</template>

<script>
export default {
  name: "Input",
  data() {
    return {
      uName: null,
      uEmail: null,
      uPass: null,
      checkBoxValue: [], //store chcekbox value as a array
    };
  },
  //definig  method or functions
  methods: {
    formSubmitBtn() {
      console.log("form Submited", this.uName, this.uEmail, this.uPass, this.checkBoxValue);
    },
  },
};
</script>
