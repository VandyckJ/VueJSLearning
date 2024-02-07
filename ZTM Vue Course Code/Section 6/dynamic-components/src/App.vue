<template>
  <select v-model="componentName">
    <option value="home">Home</option>
    <option value="about">About</option>
  </select>
  <keep-alive>
    <component :is="componentName"></component>
  </keep-alive>
</template>
<script>
import home from "./components/home.vue"
import about from "./components/about.vue"
export default{
  name:'App',
  components:{
    home,
    about,
  },
  data() {
    return {
      componentName: "home",
    }
  }
}
</script>