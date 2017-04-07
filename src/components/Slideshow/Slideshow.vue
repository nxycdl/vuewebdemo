<template>
  <div class="slide-show">
    <div class="slide-img">
      <a href="xxx">
        <img :src="slides[currentIndex].src" width="100%" height="200px" alt="">
      </a>
    </div>
    <div class="foot">
      <h2>{{slides[currentIndex].title}}</h2>
      <ul class="slide-pages">
        <li @click="goto(-1)">&lt;</li>
        <li v-for="(item ,index) in slides">
          <a href="#" class="href" @click="gotoImage(index)">{{index + 1}}</a>
        </li>
        <li @click="goto(1)">&gt;</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentIndex: 0,
        size: this.slides.length,
        title: ''
      }
        ;
    },
    props: {
      slides: {
        Type: Array
      },
      invTime: {
        require: true,
        Type: Number
      }
    },
    computed: {
      calc() {
        console.log('x');
      }
    },
    mounted() {
      /* setInterval(() => {
       this.changeImage();
       }, this.invTime); */
    },
    methods: {
      changeImage() {
        console.log('x', this.currentIndex);
        if (this.currentIndex === this.size - 1) {
          this.currentIndex = 0;
        }
        this.currentIndex++;
        let index = this.currentIndex;
        if (index < 0) {
          index = 0;
        }
        let img = this.slides[index];
        this.title = img.title;
        console.log(index, img.title);
      },
      gotoImage(index) {
        this.currentIndex = index;
      },
      goto(step) {
        if (step === -1) {
          if (this.currentIndex === 0) {
            this.currentIndex = 4;
          } else {
            this.currentIndex--;
          }
        } else {
          if (this.currentIndex === 4) {
            this.currentIndex = 0;
          } else {
            this.currentIndex++;
          }
        }
      }
    }
  }
  ;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "Slideshow.styl"
</style>
