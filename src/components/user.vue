<template>
    <div>
      <h2>我是用户界面</h2>
      <p>我是用户的相关信息</p>
      <p>{{user}}</p>
    </div>
</template>
<script>
  export default {
      computed:{
       user(){
         return  this.$route.params.useId
       }
      }
  }
</script>
<style>
</style>
