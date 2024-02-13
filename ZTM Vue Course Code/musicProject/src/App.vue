<template>
  <!-- Header -->
  <AppHeader></AppHeader>
  <!-- Nav -->
  <router-view></router-view>
  <!-- Player -->
  <AppPlayer></AppPlayer>
  <!-- Auth Modal -->
  <AppAuth></AppAuth>
</template>
<script>
// Imports
import AppHeader from '@/components/Header.vue'
import AppAuth from '@/components/Auth.vue'
import { mapWritableState } from 'pinia'
import useUserStore from '@/stores/user'
import { auth } from '@/includes/firebase'
import AppPlayer from '@/components/Player.vue'

// Export statement
export default {
  name: 'App',
  components: {
    AppHeader,
    AppAuth,
    AppPlayer
  },
  computed: {
    ...mapWritableState(useUserStore, ['userLoggedIn'])
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true
    }
  }
}
</script>
