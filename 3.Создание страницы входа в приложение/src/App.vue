<template>
<div class="app">
<div class="container">
  <form v-show="step === 1">
    <div class="form-group">
      <h2>VUE JS</h2>
      <br>
      <label for="login">Введите вашу электронную почту</label>
      <input type="email" class="form-control" id="email" >
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Пароль</label>
      <input type="password" class="form-control" id="password">
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="checkBox1">
      <label class="form-check-label" for="checkBox1">Чужое устройство</label>
    </div>
    <div class="btnSignIn">
      <button type="send" class="btn btn-info btn-lg btn-block">Вход</button>
    </div>
<div class="areYaNewUser">
    Не зарегистрированы?
      <a @click="nextStep" class="registerLink">Зарегистрируйтесь!</a>
</div>
  </form>
  <form v-show="step === 2">
    <div class="form-group">
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
      <button @click="backStep" type="button" class="btn btn-outline-secondary">Назад</button>
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
