<script>
import router from "./router/index.js"
</script>

<template>
    <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link>
    <router-link to="/dashboard">Dashboard</router-link>
  </div>
  <router-view/>
</template>
