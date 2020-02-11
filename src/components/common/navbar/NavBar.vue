<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {};
</script>


<style scoped>
.nav-bar {
  display: flex;
  height: 40px;
  line-height: 40px;
}
.left {
  width: 60px;
}
.center {
  flex: 1;
  text-align: center;
}
.right {
  width: 60px;
}
.home-nav{
    background:pink;
    color: #fff;
}
</style>
