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
        <ul>
          <li v-for="item in this.newsList">
            <a v-bind:href="item.url">{{item.title}}</a>
            <span v-if="item.hot" class="hot-tag">hot</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      <!--<slide-show></slide-show>-->
      <Slideshow :slides="slides" :invTime="invTime" @onchangefromchildrencomponent="dosomethings"></Slideshow>
      <div class="index-board-list">
        <div class="index-board-item" v-for="(item,index) in boardList"
             :class="[{'line-last' : index%2===1 },'border-index'+index]">

          <div class="index-board-item-inner">

            <h2>{{item.title}}</h2>
            <p>{{item.description}}</p>
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
  import Slideshow from '../../components/Slideshow/Slideshow.vue';
  export default {
    data() {
      return {
        invTime: 2000,
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
        newsList: [
          {title: 'news2', url: 'www.163.com'},
          {title: 'news3', url: 'www.163.com', hot: true},
          {title: 'news4', url: 'www.163.com'},
          {title: 'news5', url: 'www.163.com'}
        ],
        boardList: [{title: '开放产品2', description: '开发产品是一款开放产品', saleout: false},
          {title: '开放产品3', description: '开发产品是一款开放产品', saleout: false},
          {title: '开放产品4', description: '开发产品是一款开放产品', saleout: false},
          {title: '开放产品5', description: '开发产品是一款开放产品', saleout: false}],
        slides: [{title: 'xx0', src: require('../../assets/image/slideshow/0.jpg'), href: 'detail/analysis'},
          {title: 'xx1', src: require('../../assets/image/slideshow/1.jpg'), href: 'detail/analysis'},
          {title: 'xx2', src: require('../../assets/image/slideshow/2.jpg'), href: 'detail/analysis'},
          {title: 'xx3', src: require('../../assets/image/slideshow/3.jpg'), href: 'detail/analysis'},
          {title: 'xx4', src: require('../../assets/image/slideshow/4.jpg'), href: 'detail/analysis'}
        ]
      };
    },
    mounted() {
      /* setTimeout(() => {
       this.prodectList.pc.list.push({title: '广告发布1', url: 'www.163.com', hot: true});
       }, 5000); */
      this.getNewsList3();
    },
    methods: {
      getNewsList() {
        this.$http.get('/api/4/news/latest').then(response => {
          console.log(response);
        }).catch(error => {
          console.log(error);
        });
      },
      getNewsList2() {
        this.$http.get('/mock/logindl').then(response => {
          console.log(response);
        }).catch(error => {
          console.log(error);
        });
      },
      getNewsList3() {
        this.$http.get('/mock/logindl/newList').then(response => {
          if (response.status === 200) {
            let data = response.data;
            this.newsList = data;
          } else {
            this.newList = [];
          }
        }).catch(error => {
          console.log(error);
        });
      },
      dosomethings(index) {}
    },
    components: {
      Slideshow
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "indexpage.styl"
</style>
