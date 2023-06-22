<template>
  <section class="login">
    <form class="loginForm" @submit.prevent="handleSubmit">
      <p class="loginForm--error" v-if="error">{{ error }}</p>

      <label class="loginForm--label">Email:</label>
      <input class="loginForm--input" type="email" required v-model="email" />

      <label class="loginForm--label">Password:</label>
      <input class="loginForm--input" type="password" required v-model="password" />

      <div class="submit">
        <button class="submit--button">Login</button>
      </div>
    </form>
  </section>
</template>

<script>
import { saveStorage } from '../assets/localStorage';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    handleSubmit() {
      const email = this.email;
      const password = this.password;
      this.fetchLogin(email, password);
    },
    async fetchLogin(email, password) {
      await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.message === 'User logged in successfully') {
            saveStorage('access_token', res.access_token);
            this.$router.push({ name: 'Home' });
          } else {
            this.error = res.message;
          }
        })
        .catch((err) => console.log(err));
    }
  }
};
</script>

<style>
.login {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ddd;
}

.loginForm {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.loginForm--label {
  margin-top: 1rem;
}

.loginForm--input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.submit {
  margin-top: 1rem;
}

.submit--button {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #ccc;
  cursor: pointer;
}
</style>
