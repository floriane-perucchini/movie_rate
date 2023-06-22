<template>
  <nav class="nav">
    <router-link class="Logo" to="/">Movie Rate</router-link>
    <router-link class="nav-link" :to="{ name: 'Home' }">Home</router-link>
    <router-link class="nav-link" :to="{ name: 'Signup' }">Signup</router-link>
  </nav>
</template>

<script></script>

<style>
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
  text-decoration: underline;
}

.router-link-exact-active {
  background-color: #333;
  color: #fefefe;
}
</style>
