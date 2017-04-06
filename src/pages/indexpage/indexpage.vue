<template>
  <div class="index">
    <div class="index-left">
      <div class="all">
        <h1>全部产品</h1>
        <h3>{{this.prodectList.pc.title}}</h3>
        <ul>
          <li v-for="item in this.prodectList.pc.list ">
            <a v-bind:href="item.url">{{item.title}}</a>
            <span v-if="item.hot" class="hot-tag">hot</span>
          </li>
        </ul>
        <div class="hr"></div>
        <h3>{{this.prodectList.app.title}}</h3>
        <ul>
          <li v-for="item in this.prodectList.app.list ">
            <a v-bind:href="item.url">{{item.title}}</a>
            <span v-if="item.hot" class="hot-tag">hot</span>
          </li>
        </ul>
      </div>
      <div class="hr"></div>
      <div class="new">
        <h1>最新消息</h1>

      </div>
    </div>
    <div class="index-right">
      <!--<slide-show></slide-show>-->
      <div class="index-board-list">
        <div class="index-board-item">
          <div class="index-board-item-inner">
            <h2>title</h2>
            <p>description</p>
            <div class="index-board-button">
              立即购买










            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        prodectList: {
          pc: {
            title: 'pc产品title',
            list: [
              {title: '数据统计', url: 'www.163.com'},
              {title: '数据预测', url: 'www.163.com', hot: true},
              {title: '流量分析', url: 'www.163.com'},
              {title: '广告发布', url: 'www.163.com'}
            ]
          },
          app: {
            title: '应用产品title',
            list: [
              {title: '91助手', url: 'www.163.com'},
              {title: '产品助手', url: 'www.163.com'},
              {title: '智能地图', url: 'www.163.com'},
              {title: '团队语音', url: 'www.163.com'},
              {title: '团队建设', url: 'www.163.com', hot: true},
              {title: '团队合作', url: 'www.163.com'}
            ]
          }
        },
        newsList: {}
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "indexpage.styl"
</style>
