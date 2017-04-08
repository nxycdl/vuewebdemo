<template>
  <div>
    <div class="app-header">
      <div class="app-head-inner">
        <img src="../../assets/logo.png" alt="">
        <div class="head-nav">
          <ul class="nav-list">
            <li v-if='!this.userinfo.username' @click="loginClick" ref="loingref">登录</li>
            <li v-if='this.userinfo.username'>{{this.userinfo.username}}</li>
            <li class="nav-pile">|</li>
            <li v-if='!this.userinfo.username' @click="regClick">注册</li>
            <li v-if='this.userinfo.username' @click="logout">退出</li>
            <li v-if='!this.userinfo.username' class="nav-pile">|</li>
            <li @click="aboutClick">关于</li>

          </ul>
        </div>
      </div>
    </div>
    <div class="app-content">

      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-footer">
      <p>@ 2016 finshelnal MIT</p>
    </div>
    <MyDialog :isShow="isShowLoginDialog" @on-close="onCloseDialog('isShowLoginDialog')">
      <LoginForm @hasLogin="loginSucc"></LoginForm>
    </MyDialog>
    <MyDialog :isShow="isShowRegDialog" @on-close="onCloseDialog('isShowRegDialog')">
      <RegForm></RegForm>
    </MyDialog>
    <MyDialog :isShow="isShowAboutDialog" @on-close="onCloseDialog('isShowAboutDialog')">
      <p>
        为了满足网上客户购买正品安利产品的需求，为了方便有快递需求的顾客买上放心的安利产品，我们创立了安利巴巴网购商城。安利巴巴商城可以为您提供：1）真正的放心的安利产品，所有安利产品都是直销产品，不会存在繁琐的流通环节，为您节省花费；2）轻松个性的购物方式，便捷灵活的快递送货，满意百分的售后服务。我们的口号是：“买安利，就到安利巴巴，真品质，值得信赖”。</p>
    </MyDialog>
  </div>
</template>

<script>
  import MyDialog from '../../components/Dialog/Dialog.vue';
  import LoginForm from '../../components/LoginForm/LoginForm.vue';
  import RegForm from '../../components/RegForm/RegForm.vue';
  export default {
    data() {
      return {
        msg: '1',
        userinfo: {},
        isShowAboutDialog: false,
        isShowRegDialog: false,
        isShowLoginDialog: false
      };
    },
    components: {
      MyDialog,
      LoginForm,
      RegForm
    },
    methods: {
      aboutClick() {
        this.isShowAboutDialog = true;
      },
      regClick() {
        this.isShowRegDialog = true;
      },
      loginClick() {
        this.isShowLoginDialog = true;
      },
      onCloseDialog(attr) {
        this[attr] = false;
      },
      loginSucc(userInfo) {
        this.userinfo = userInfo;
        this.isShowLoginDialog = false;
        console.log(userInfo);
      },
      logout() {
        this.userinfo = {};
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "layout.styl"
</style>

