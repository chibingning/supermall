<template>
    <swiper class="swiper-detail" v-if="topImg.length">
        <swiper-item v-for="(item,index) in topImg " :key="index">
            <img :src="item" alt />
        </swiper-item>
    </swiper>
</template>
<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
    components:{
        Swiper,
        SwiperItem
    },
    props:{
        topImg:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{

    }
}
</script>

<style scoped>
    .swiper-detail{ height: 300px;}
</style>
