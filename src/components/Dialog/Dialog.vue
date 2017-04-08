<template>
  <div class="mydialog" v-if="isShow">
    <div class="dialog-wrap" >
      <div class="dialog-cover" @click="closeMySelf"></div>
      <div class="dialog-content">
        <p class="dialog-close" @click="closeMySelf">x</p>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    props: {
      isShow: {
        Type: Boolean,
        default: false
      }
    },
    methods: {
      closeMySelf() {
        this.$emit('on-close');
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "Dialog.styl"
</style>
