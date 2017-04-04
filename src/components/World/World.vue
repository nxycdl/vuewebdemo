<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>This is World Components</h2>
    <h2>{{count}}</h2>
    <h2 v-show="(count > 3 )">v-show 的例子</h2>
    <button @click="_add">add</button>
    <button @click="_substring">substring</button>
  </div>
</template>

<script>
  export default {
    name: 'World',
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
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "World.styl";
</style>
