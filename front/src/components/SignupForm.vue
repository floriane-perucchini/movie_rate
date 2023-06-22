<template>
  <section class="signup">
    <form class="signupForm" @submit.prevent="handleSubmit">
      <label class="signupForm--label">Email:</label>
      <input class="signupForm--input" type="email" required v-model="email" />

      <label class="signupForm--label">Password:</label>
      <input class="signupForm--input" type="password" required v-model="password" />
      <p class="signupForm--error" v-if="passwordError">{{ passwordError }}</p>

      <div class="submit">
        <button class="submit--button">Create an account</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      passwordError: ''
    };
  },
  methods: {
    handleSubmit() {
      //validate password
      if (!this.password) {
        this.passwordError = 'Please enter a password';
        return;
      }
      console.log('email', this.email);
      console.log('password', this.password);
    }
  }
};
</script>

<style>
.signup {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ddd;
}

.signupForm {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.signupForm--label {
  margin-top: 1rem;
}

.signupForm--input {
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
