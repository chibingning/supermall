<template>
    <div class="goods-list-item">
        <img :src="goodsItem.show.img"  @load="imgageLoad">
        <div class="goods-infor">
            <p class="title ellipsis">{{goodsItem.title}}</p>
            <span class="price">{{goodsItem.price}}</span><span class="collect">{{goodsItem.cfav}}</span>
        </div>
    </div>
</template>


<script>
export default {
    props:{
        goodsItem:{
            type:Object,
            default(){
                return {}


            }
        }
    },
    methods:{
        imgageLoad(){
            this.$bus.$emit('itemImageLoad')
        }
    }
}
</script>

<style scoped>
.goods-list-item{ width: 48%;text-align: center; }
.goods-list-item img{ width: 100%; border-radius:3px;}
.goods-infor{ position: relative; top:-8px; font-size:14px;  }
.price,.collect{ position: relative; top:-8px;}
.price{ color: var(--color-high-text); margin-right:23px;}
.collect{ display: inline-block; padding-left:3px; color:#bfbfbf}
.goods-infor .collect::before{
    content:'';
    position:absolute;
    left:-15px;
    top:2px;
    width:18px;
    height: 18px;
    background:url(~assets/img/home/collect.svg) no-repeat;
    background-size:100% 100%;

}
</style>
