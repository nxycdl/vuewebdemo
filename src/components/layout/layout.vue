<template>
  <div>
    <div class="app-header">
      <div class="app-head-inner">
        <img src="../../assets/logo.png" alt="">
        <div class="head-nav">
          <ul class="nav-list">
            <li>登录</li>
            <li class="nav-pile">|</li>
            <li>注册</li>
            <li class="nav-pile">|</li>
            <li>关于</li>
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
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: '1'
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "layout.styl"
</style>
