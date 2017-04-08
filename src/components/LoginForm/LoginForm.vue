<template>
  <div class="loginform">
    <div class="username">
      <label>用户名:</label><input type="text" v-model="username" placeholder="请输入用户名">
    </div>
    <div class="password">
      <label>密码:</label><input type="password" v-model="password" placeholder="请输入密码">
    </div>
    <div class="login">
      <button :disabled="onLoging" @click="onLogin">登录</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        onLoging: false
      };
    },
    methods: {
      onLogin() {
        console.log(this.username);
        console.log(this.password);
        console.log('onLogin');
        this.onLoging = true;
        this.$emit('hasLogin', {username: this.username, sex: '男', userId: '0000'});
        this.onLoging = false;
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "LoginForm.styl"
</style>
