<template>
  <div class="cart">
    <nav-bar class="cart-bar"><div slot="center">购物车({{cartLength}})</div></nav-bar>
    <cart-list />
  </div>
</template>


<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComps/CartList";
import { mapGetters } from "vuex";
export default {
  components: {
    NavBar,
    CartList
  },
  computed: {
    ...mapGetters(["cartLength"])
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
