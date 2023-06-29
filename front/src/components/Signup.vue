<template>
  <div class="signup">
    <h1>Signup</h1>
    <form @submit.prevent="handleSignup">
      <p>{{ errorMessage || validationMessage }}</p>
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <button type="submit">Signup</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignupComponent',
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
      validationMessage: ''
    }
  },
  computed: {
    loggedIn() {
      console.log(this.$store.state.auth.status.loggedIn)
      return this.$store.state.auth.status.loggedIn
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/login')
    }
  },
  methods: {
    handleSignup() {
      const { email, password } = this
      this.$store
        .dispatch('auth/signup', { email, password })
        .then(() => {
          this.$router.push('/login')
        })
        .catch((error) => {
          this.message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        })
    }
  }
}
</script>
