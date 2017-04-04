<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>I am Redapple</h1>
  </div>
</template>

<script>
  export default {
    name: 'Redapple',
    data () {
      return {
        count: 0
      };
    },
    props: {
      msg: {
        type: String
      }
    },
    methods: {
      _add () {
        this.count++;
      },
      _substring () {
        this.count--;
        if (this.count < 0) {
          this.count = 0;
        }
      },
      _getParams () {
        console.log(this.$route.params);
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">

</style>
