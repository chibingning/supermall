<template>
  <div id="app">
    <!-- <router-link to="/home" tag="li" replace>首页</router-link>
    <router-link to="/tab" tag="li" replace>我是选项卡</router-link>
    <router-view></router-view>
    <button @click="homeClick">首页按钮</button>
    <button @click="tabClick">首页按钮</button>-->
    <router-link to="/home">首页</router-link>
    <router-link to="/tab">选项卡</router-link>
    <router-link v-bind:to="'/user/'+useId">用户</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return{
      useId:'zhangsan'
    }
  },
  methods: {
    // homeClick() {
    //   this.$router.replace("/home");
    // },
    // tabClick() {
    //   this.$router.replace("/tab");
    // }
  }
};
</script>

<style>
.active {
  background: red;
}
</style>
