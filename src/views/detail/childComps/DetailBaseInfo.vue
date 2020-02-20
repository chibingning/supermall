<template>
    <div class="base-info" v-if="Object.keys(goods).length !==0">
        <div class="info-title">{{goods.title}}</div>
        <div class="info-price">
            <span class="n-price">{{goods.newPrice}}</span>
            <span class="o-price">￥{{goods.realPrice}}</span>
            <span class="discount">{{goods.discount}}</span>
        </div>
        <div class="info-other">
            <span>{{goods.columns[0]}}</span>
            <span>{{goods.columns[1]}}</span>
            <span>{{goods.services[goods.services.length-1].name}}</span>
        </div>
        <div class="info-service" >
            <span v-for="index in goods.services.length-1" :key="index">
                <img :src="goods.services[index-1].icon" alt="">
                <span>{{goods.services[index-1].name}}</span>
            </span>
        </div>
    </div>

</template>


<script>
export default {
    name:"DetailBaseInfo",
    props:{
        goods:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>
<style scoped>
    .base-info{ padding:15px 10px;}
    .info-title{ font-size:14px; }
    .info-price{ margin-top:10px; }
    .n-price{ color:deeppink; font-size:16px; }
    .o-price{ color: #555; font-size:14px; margin:0 5px;}
    .discount{ color: #fff; background-color: deeppink; border-radius:10px; font-size:12px; display: inline-block;
    padding:1px 10px; }
    .info-other{ display: flex; margin-top:15px; border-bottom:1px solid #ccc; padding-bottom:10px;}
    .info-other span{ flex: 1; color: rgb(197, 193, 193); font-size:14px;}
     .info-other span:nth-child(1){text-align: left;}
     .info-other span:nth-child(2){text-align: center;}
     .info-other span:nth-child(3){text-align: right;}
     .info-service{ display:flex; font-size:11px; }
     .info-service span{flex:1;margin:10px 0; }
    .info-service span img{ width: 8px; height: 8px;}
</style>
