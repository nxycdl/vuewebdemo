<template>
  <div class="apple">
    <h1>Apple:{{total}}</h1>
    <button @click="_add">+(通过commit调用$store.state)</button>
    <button @click="_sub">-(通过commit调用$store.state)</button>

    <h1>dispath只能通过action 调用mutations</h1>
    <h1>mutations只能通过同步访问;</h1>
    <h1>actions 触发一些异步操作,然后在调用mutations</h1>
    <button @click="_addDis">+(通过dispath调用action)</button>
    <button @click="_subDis">-(通过dispath调用action)</button>



  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: {},
        price: 5,
        total: 0
      };
    },
    methods: {
      _add() {
        this.total += this.price;
        // this.$store.state.totalPrice += this.price;
        this.$store.commit('increment', this.price);
      },
      _sub() {
        this.total -= this.price;
        if (this.total < 0) {
          this.total = 0;
        }
        this.$store.commit('decrement', this.price);
        /* this.$store.state.totalPrice -= this.price;
         if (this.$store.state.totalPrice < 0) {
         this.$store.state.totalPrice = 0;
         } */
      },
      _addDis() {
        this.total += this.price;
        // this.$store.state.totalPrice += this.price;
        this.$store.dispatch('increase', this.price);
      },
      _subDis() {
        this.total -= this.price;
        if (this.total < 0) {
          this.total = 0;
        }
        this.$store.dispatch('decrease', this.price);
        /* this.$store.state.totalPrice -= this.price;
         if (this.$store.state.totalPrice < 0) {
         this.$store.state.totalPrice = 0;
         } */
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
