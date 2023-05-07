
* in vue js there is 4 lifecycle
**************1=> Create ***************************
   1=> it will call first, beforeCreate() {
    console.log("it will call first")
},
2=>then it will call in create=> created() {
    console.log("then it will call first")
   },
   
***************2=> Mount *******************
beforeMount() {
    console,=.log("it will call before mount")
},
mounted() {
    console.log("then will call after mount") 
},
********************3=> Update ********************* 3=>
beforeUpdate() {
    console,=.log("it will call before update")
},
updated() {
    console.log("then will call after update") 
},
**********************4. Unmount  ********************
beforeUnmount {
    console,=.log("it will call before unmounted")
},
unmounted() {
    console.log("then will call after unmounted") 
},