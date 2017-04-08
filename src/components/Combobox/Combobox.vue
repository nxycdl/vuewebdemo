<template>
  <div class="combobox">
    <select class="form-control" id="customer">
      <option value="0">--請選擇--</option>
      <option v-for="(item,key) in select_db" value="{{key}}">{{ item }}:{{ key }}</option>
    </select>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    props: {
    },
    methods: {
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "Combobox.styl"
</style>
