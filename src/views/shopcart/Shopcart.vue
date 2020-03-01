<template>
  <div class="cart">
    <nav-bar class="cart-bar"><div slot="center">购物车({{cartLength}})</div></nav-bar>
    <cart-list />
    <cart-bottom-bar />
  </div>
</template>


<script>
import CartBottomBar from "./childComps/CartBottomBar";
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComps/CartList";
import { mapGetters } from "vuex";  //映射Getters
export default {
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    ...mapGetters(["cartLength"])  //映射Getters  写在计算属性中
  }
};
</script>


<style scoped>
.cart{
    position: relative;
    height:100vh;
}
.cart-bar {
  background-color: deeppink;
  color: #fff;
}

</style>
