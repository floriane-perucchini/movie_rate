<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit="handleLogin">
      <p>{{ errorMessage }}</p>
      <input type="text" placeholder="Username" v-model="username" />
      <input type="password" placeholder="Password" v-model="password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginComponent',
  data() {
    return {
      password: '',
      errorMessage: ''
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/profile')
    }
  },
  methods: {
    handleLogin(user) {
      this.$store
        .dispatch('auth/login', user)
        .then(() => {
          this.$router.push('/profile')
        })
        .catch((error) => {
          this.errorMessage =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        })
    }
  }
}
</script>
