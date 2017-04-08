<template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-img">
      <a href="xxx">
        <img :src="slides[currentIndex].src" width="100%" height="200px" alt="">
      </a>
    </div>
    <div class="foot">
      <h2>{{slides[currentIndex].title}}</h2>
      <ul class="slide-pages">
        <li @click.stop="goto(-1)">&lt;</li>
        <li @click.stop="gotoImage(prevIndex)">Prev</li>
        <li v-for="(item ,index) in slides">
          <a href="#" class="href" :class="{on:index==currentIndex}" @click.stop="gotoImage(index)">{{index + 1}}</a>
        </li>
        <li @click.stop="goto(1)">&gt;</li>
        <li @click.stop="gotoImage(nextIndexx)">Prev</li>
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
        Type: Number,
        default: 1000
      }
    },
    computed: {
      calc() {

      },
      prevIndex() {
        let index = 0;
        if (this.currentIndex === 0) {
          index = this.size - 1;
        } else {
          index = this.currentIndex - 1;
        }
        return index;
      },
      nextIndexx() {
        let index = 0;
        if (this.currentIndex === this.size - 1) {
          index = 0;
        } else {
          index = this.currentIndex + 1;
        }
        return index;
      }
    },
    mounted() {
      /* setInterval(() => {
       this.changeImage();
       }, this.invTime); */

      this.runInv();
    },
    methods: {
      changeImage() {
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
      },
      gotoImage(index) {
        this.currentIndex = index;
        this.$emit('onchangefromchildrencomponent', index);
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
      },
      runInv() {
        this.invId = setInterval(() => {
          this.gotoImage(this.nextIndexx | 0);
        }, this.invTime);
      },
      clearInv() {
        clearInterval(this.invId);
      }
    }
  }
  ;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "Slideshow.styl"
</style>
