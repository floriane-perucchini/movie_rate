<template>
  <nav class="nav">
    <p class="logo" @click="redirect">Movie Rate</p>
    <router-link class="nav-link" :to="{ name: 'Home' }">Home</router-link>
    <div v-if="userLoggedIn === true">
      <button class="nav-link" @click="logout">Logout</button>
    </div>
    <div v-else>
      <router-link class="nav-link" :to="{ name: 'Signup' }">Signup</router-link>
      <router-link class="nav-link" :to="{ name: 'Login' }">Login</router-link>
    </div>
  </nav>
</template>

<script>
import { clearStorage, getStorage } from '../assets/localStorage';

export default {
  data() {
    return {
      userLoggedIn: false
    };
  },
  methods: {
    redirect() {
      this.$router.push({ name: 'Home' });
    },
    logout() {
      clearStorage('access_token');
      this.userLoggedIn = false;
      this.redirect();
    },
    isUserConnected() {
      const token = getStorage('access_token');
      if (token) {
        this.userLoggedIn = true;
      } else {
        this.userLoggedIn = false;
      }
    }
  }
  //TODO: when checkng if user is logged in, it should check if token is valid and change navbar accordingly
};
</script>

<style>
.logo {
  cursor: pointer;
  font-size: 2rem;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #eee;
}

.Logo {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}

.nav-link {
  text-decoration: none;
  color: #333;
  border-radius: 5px;
  padding: 0.5rem;
}

.nav-link:hover {
  background-color: #555;
  color: #fefefe;
}

.router-link-exact-active {
  background-color: #333;
  color: #fefefe;
}
</style>
