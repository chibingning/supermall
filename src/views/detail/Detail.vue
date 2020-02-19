<template>
    <div>
        <detail-nav-bar></detail-nav-bar>
        <detail-swiper :top-img="topImg"></detail-swiper>
    </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import {getDetail} from 'network/detail'
import DetailSwiper from './childComps/DetailSwiper'
export default {
    name:"Detail",
    components:{
        DetailNavBar,
        DetailSwiper
    },
    data(){
        return {
            iid:null,
            topImg:[]
        }
    },
    created(){
        this.iid =this.$route.params.iid
        getDetail(this.iid).then(res=>{
          this.topImg = res.result.itemInfo.topImages

        })

    }
}
</script>


<style>
</style>
