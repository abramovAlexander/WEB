<template>
<div class="app">
<div class="container">
  <form v-show="step === 1">
    <div class="form-group">
      <h2>Регистрация</h2>
      <br>
      <label for="exampleInput">Ф.И.О.</label>
      <input type="text" class="form-control" id="name">
    </div>
    <div class="form-group">
      <label for="login">Введите вашу электронную почту</label>
      <input type="email" class="form-control" id="login">
    </div>
    <div class="alert alert-warning" role="alert">
  Очень важно указывать существующий адрес электронной почты чтобы мы смогли отправить вам письмо с подтверждением
</div>
    <div class="form-group">
      <label for="exampleInputPassword1">Придумайте пароль</label>
      <input type="password" class="form-control" id="password">
    </div>
    <div class="btnSignIn">
      <router-link type="button" class="btn btn-outline-secondary" to="/">Назад</router-link>
      <div class="btnInRegistration">
      <button type="send" class="btn btn-info">Зарегистрироваться</button>
      </div>
    </div>
  </form>
</div>
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
.container{
  position: absolute;
  top: 20%;
  width: 20%;
  left: 40%;
}
.btnInRegistration {
  margin-left: 2%;
  display: inline;
}
.btnSignIn {
  display:inline;
}
.btnRegister {
  display:inline;
  margin-left: 2%;
}
.registerLink {
  color: grey;
}
.areYaNewUser {
  margin-top: 2%;
  text-align: right;
}
h2 {
  text-align: center;
}
</style>