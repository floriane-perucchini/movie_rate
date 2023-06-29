<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="header">
    <nav class="header-navigation">
      <ul class="header-navigation--list">
        <li>
          <RouterLink class="navigation-link" to="/">MOVIE RATE</RouterLink>
        </li>
        <div class="header-navigation--list_group" v-if="!currentUser">
          <li>
            <RouterLink class="navigation-link" to="/signup">Signup</RouterLink>
          </li>
          <li>
            <RouterLink class="navigation-link" to="/login">Login</RouterLink>
          </li>
        </div>
        <div class="header-navigation--list_group" v-if="currentUser">
          <li>
            <RouterLink class="navigation-link" to="/profile">Profile</RouterLink>
          </li>
          <li class="navigation-link" @click.prevent="logOut">Logout</li>
        </div>
      </ul>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #f1f1f1;
  padding: 20px;
  text-align: center;
}
.header-navigation {
  display: flex;
  justify-content: center;
}

.header-navigation--list {
  display: flex;
  list-style-type: none;
  padding: 0;
}

.header-navigation--list_group {
  display: flex;
  list-style-type: none;
  padding: 0;
  margin-left: 20px;
}

.navigation-link {
  padding: 0 10px;
  text-decoration: none;
  color: #000;
}
</style>
