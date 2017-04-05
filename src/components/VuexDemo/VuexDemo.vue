<template>
  <div class="demo">
    <Apple></Apple>
    <Banana></Banana>
    <h1>通过计算属性computed ,直接使用$store.state.totalPrice 获取{{totalPriceX}}</h1>
  </div>
</template>

<script>
  import Apple from '../Apple/Apple';
  import Banana from '../Banana/Banana';
  export default {
    data() {
      return {
        sum: 0
      };
    },
    components: {
      Apple,
      Banana
    },
    computed: {
      totalPriceX() {
        return this.$store.state.totalPrice;
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">

</style>
