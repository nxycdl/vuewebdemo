<template>
  <div class="detail-wrap">
    <div class="detail-left">
      <div class="product-board">
        <img :src="produceList[selectIndex].src" alt="">
        <ul>
          <router-link v-for="(item,index) in this.produceList" :to="{path:item.href}" :key="index"
                       tag="li" :class="{'active':index==selectIndex}">{{item.title}}

          </router-link>
        </ul>
      </div>
    </div>
    <div class="detail-right">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import Slideshow from '../../../components/Slideshow/Slideshow.vue';
  export default {
    data() {
      return {
        produceList: [
          {title: 'forcate', src: require('../../../assets/image/slideshow/1.jpg'), href: '../detail/forecate'},
          {title: '发布信息', src: require('../../../assets/image/slideshow/2.jpg'), href: '../detail/public'},
          {title: '数据统计', src: require('../../../assets/image/slideshow/3.jpg'), href: '../detail/count'},
          {title: '数据分析', src: require('../../../assets/image/slideshow/4.jpg'), href: '../detail/analysis'}
        ],
        selectIndex: 0
      };
    },
    mounted() {
    },
    methods: {
      _liclick(index) {
        console.log(index);
        this.selectIndex = index;
      }
    },
    components: {
      Slideshow
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "Detailindexpage.styl"
</style>
