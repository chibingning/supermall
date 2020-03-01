<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar" @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :top-img="topImg"></detail-swiper>
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @detailImgLoad="detailImgLoad" />
      <detail-goods-params :params-info="paramsInfo" ref="params" />
      <detail-comment-info :comment-info="commentInfo" ref="commentInfo" />
      <goods-list :goods="recommends" ref="recommend" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShow" />
    <detail-bottom-bar @addCart="addToCart"/>
    <toast/>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import {
  getDetail,
  Goods,
  Shop,
  ParamsInfo,
  getRecommend
} from "network/detail";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import Scroll from "components/common/scroll/Scroll";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailGoodsParams from "./childComps/DetailGoodsParams";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import GoodsList from "components/content/goods/GoodsList";
import { debounce } from "common/utils";
import { itemListenerMixin ,backTopMixin} from "common/mixin";
import BackTop from "components/content/backTop/BackTop"
import DetailBottomBar from "./childComps/DetailBottomBar"
import Toast from "components/common/toast/Toast"
//import { mapActions} from "vuex"  映射actions
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailGoodsParams,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    Toast

  },
  mixins: [itemListenerMixin,backTopMixin],
  data() {
    return {
      iid: null,
      topImg: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      const data = res.result;
      //获取顶部的滚动图片
      this.topImg = data.itemInfo.topImages;
      //获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo;
      console.log(this.detailInfo)
      this.paramsInfo = new ParamsInfo(
        data.itemParams.info,
        data.itemParams.rule
      );
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
      //进行防抖操作
      this.getThemeTopY = debounce(() => {
        this.themeTopYs = [];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        this.themeTopYs.push(this.$refs.commentInfo.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
        this.themeTopYs.push(Number.MAX_VALUE);
        console.log(this.themeTopYs);
      }, 100);
    });

    getRecommend().then(res => {
      this.recommends = res.data.list;
    });
  },
  mounted() {},
  destroyed() {
    this.$bus.$off("itemImageLoad", this.itemImgListener);
  },
  methods: {
      //...mapActions(['addCart']),  映射的是函数，所以写在methods中
    detailImgLoad() {
      this.refresh();
      this.getThemeTopY(); //图片加载完  执行
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200);
    },
    contentScroll(position) {
      const positionY = -position.y;
      let length = this.themeTopYs.length;
      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }

      this.isShow = positionY > 700;
    },
    addToCart(){
        //获取商品信息
        const product = {}
        product.image = this.topImg[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.newPrice = this.goods.realPrice;
        product.iid = this.iid;

        // this.addCart(product).then(res =>{
        //     console.log(res)
        // })  通过映射来
        this.$store.dispatch('addCart',product).then(res=>{
             this.$toast.show(res,2000)
            // console.log(this.$toast)

        })


    }


  }
};
</script>


<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.content {
  height: calc(100% - 44px);
}
.detail-nav-bar {
  position: relative;
  z-index: 10;
  background-color: #fff;
}
</style>
