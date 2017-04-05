<template>
  <div class="banana">
    <h1>Banana:{{total}}</h1>
    <button @click="_add">+</button>
    <button @click="_sub">-</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: {},
        price: 10,
        total: 0
      };
    },
    methods: {
      _add() {
        this.total += this.price;
        this.$store.commit('increment', this.price);
      },
      _sub() {
        this.total -= this.price;
        this.$store.commit('decrement', this.price);
        if (this.total < 0) {
          this.total = 0;
        }
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  h1 {
    color: red
  }
</style>
