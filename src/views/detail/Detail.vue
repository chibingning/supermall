<template>
    <div>
        <detail-nav-bar></detail-nav-bar>
        <detail-swiper :top-img="topImg"></detail-swiper>
        <detail-base-info :goods="goods"/>
    </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import {getDetail,Goods} from 'network/detail'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
export default {
    name:"Detail",
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo
    },
    data(){
        return {
            iid:null,
            topImg:[],
            goods:{}
        }
    },
    created(){
        this.iid =this.$route.params.iid
        getDetail(this.iid).then(res=>{
          const data = res.result;
          //获取顶部的滚动图片
          this.topImg = data.itemInfo.topImages
          //获取商品信息
          this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

        })

    }
}
</script>


<style>
</style>
