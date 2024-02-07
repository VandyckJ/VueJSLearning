
<template>
  <div>
  <h3>Hey</h3>
  <greeting :age="age"></greeting>
  <user :age="age"  @ageChange="updateAge" :ageChangeFn="updateAgeCB"></user>
</div>
</template>
<script>
import Greeting from "@/components/greeting.vue"
import User from "@/components/user.vue"
  export default{
    name: 'App',
    components: {
      Greeting,
      User,
    },
    methods: {
      updateAge(num){
        this.age += num
      },
      updateAgeCB(num){
        this.age += num
      },
    },
    data(){
      return{
        age: 20
      }
    }
  }
</script>