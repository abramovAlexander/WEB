<template>
<div>
<header>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link class="navbar-brand" to="/">VUE JS</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <div class="langs">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Вход</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/reg">Регистрация</router-link>
      </li>
    </ul>
    </div>
</div>
</nav>
</header>
<router-view>
</router-view>
</div>
</template>
<script>
  export default {
    data(){
      return {
        step: 1
      }
    },
    methods: {
      nextStep() {
        this.step++
      },
      backStep() {
        this.step--
      }
    }
  }
</script>

<style>
</style>
