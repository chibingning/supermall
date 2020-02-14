<template>
<div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in titles"  @click="itemClick(index)"
     :class="{active:currentIndex===index}" :key="index">
        <span>{{item}}</span>
    </div>
</div>
</template>
<script>
export default {
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            currentIndex:0
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex = index;
            this.$emit("tabClick",index)
        },

    }
}
</script>
<style scoped>
    .tab-control{ display: flex;height: 40px; line-height: 40px; margin-top:5px; background:#fff;}
    .tab-control-item{ flex:1; text-align: center; font-size:14px;}
    .active span{ color:pink; border-bottom:2px solid pink; padding:4px;}
</style>
