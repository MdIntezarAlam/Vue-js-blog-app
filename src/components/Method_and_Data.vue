<template>
  <div>
    <div>Defining Method in vue js it is also called as geter function</div>
    <!-- calling data -->
    <p>userName is {{ userName }}</p>
    <!-- calling methods or function -->

    <div>
      <p>Calling entire function{{ funcOne() }}</p>
      User Name is {{ funcOne().userName }} email is {{ funcOne().userEmail }}
    </div>
    <!-- calling func two -->
    <div>
      <p>Calling entire function{{ funTwo() }}</p>
      User Name is {{ funTwo().userClas }} email is {{ funTwo().userContact }}
    </div>
  </div>
</template>

<script>
export default {
  //deifining data
  data() {
    return {
      userName: "Rakes Kumar",
    };
  },

  ///defining function or methods
    //method contain all function it is the place where it use only function which
  // is also called as geter function
  methods: {
    funcOne() {
      return {
        userId: 1,
        userName: "Rakesh Kumar",
        userEmail: "user@gmail.com",
      };
    },
    funTwo() {
      return {
        userClas: "BCA",
        userContact: 2345678903456,
      };
    },
  },
};
</script>
