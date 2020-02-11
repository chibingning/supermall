<template>
    <div class="tab-bar-item">
      <div v-if="!isActive">
        <slot name="item-icon"></slot>
      </div>
      <div else>
        <slot name="item-icon-active"></slot>
      </div>
      <div :class="{active:isActive}">
         <slot name="item-text"></slot>
      </div>
    </div>
</template>
<script>
export default {
  data(){
    return{
      isActive:true
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

.active{
  color: pink;
}
</style>
