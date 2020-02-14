<template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive">
        <slot name="item-icon"></slot>
      </div>
      <div v-else>
        <slot name="item-icon-active"></slot>
      </div>
      <div :style="activeStyle">
         <slot name="item-text"></slot>
      </div>
    </div>
</template>
<script>
export default {
  props:{
    path:String,
    activeColor:{
       type:String,
       default:'red'
    }
  },
  data(){
    return{
      // isActive:true
    }
  },
  computed:{
    isActive(){
        return this.$route.path.indexOf(this.path)!== -1    //$route当前活跃的路由
    },
    activeStyle(){
        return this.isActive ? { color:this.activeColor} :{}
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path);
    }
  }
}
</script>


<style >
   #tab-bar {
    display: flex;
    background: #f6f6f6f6;
    position: fixed;
    bottom: 0;
    width: 100%;
    box-shadow: 0px -3px 1px rbga(100, 100, 100, 0.2);
    z-index:6;
  }
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size:13px;
    padding-bottom:2px;
  }
.tab-bar-item img{
  width: 24px;
  height: 24px;
  margin-top:3px;
}


</style>
