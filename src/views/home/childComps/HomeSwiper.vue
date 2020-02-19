<template>
  <swiper ref="swiper" v-if="banner.length">
    <swiper-item v-for="(item, index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt @load="imageLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banner: {
      type: Array,
      default: []
    }
  },
  data(){
      return {
          isload:false
      }
  },
  methods: {
    stopTimer() {
      this.$refs.swiper.stopTimer();
    },
    startTimer() {
      if (this.$refs.swiper) {
        this.$refs.swiper.startTimer();
      }
    },
    imageLoad() {
        if(!this.isload){
            this.$emit('swiperImageLoad')
            this.isload = true
        }

    }
  }
};
</script>

<style scoped>
</style>
