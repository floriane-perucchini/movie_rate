<template>
  <div class="profile">
    <h1>Profile</h1>
    <p>{{ currentUser.email }}</p>
    <button @click="handleLogout">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'ProfileComponent',
  computed: {
    currentUser() {
      return this.$store.state.auth.user
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login')
    }
  },
  methods: {
    handleLogout() {
      this.$store.dispatch('auth/logout')
    }
  }
}
</script>
