<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/detail/1">Bmw</router-link>
      <router-link to="/login">Login</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>
<style>
  nav a {
    margin-right: 10px;
    text-decoration: none;
    color: blue;
  }
  nav a.router-link-exact-acrive {
    font-weight: bold;
    color: darkred;
  }
</style>