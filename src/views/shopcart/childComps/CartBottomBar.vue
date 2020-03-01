<template>
  <div >
    <div class="bottom-bar">
      <check-btn class="select-btn"  :is-checked ="isSelect" @click.native="allSelect"/>
      <span class="select-text">全选</span>
        <div>
            合计：{{totalPrice}}
        </div>
        <div @click="clickBtn">
            计算（{{calculate}}）
        </div>
    </div>

  </div>
</template>

<script>
import CheckBtn from "./CheckBtn";
import {mapGetters} from "vuex"
export default {
  name: "CartBottomBar",
  components: {
    CheckBtn
  },
  computed:{
      ...mapGetters(['cartList']),
      totalPrice(){
          return '￥'+ this.cartList.filter(item=>{
              return item.checked
          }).reduce((preValue,item)=>{
              return preValue + item.newPrice * item.count
          },0)
      },
      calculate(){
          return this.cartList.filter(item=>item.checked).length
      },
      isSelect(){
          if(this.cartList.length ===0) return false
            //第一种
            //return !(this.cartList.filter(item => !item.checked).length)
            //第二种 建议第二种
          return !this.cartList.find( item => !item.checked )
            //查找不选中的 返回false
            //第三种普通遍历
            // let isChecked = false;
            // for(let item of this.cartList){
            //     if(!item.checked){
            //         return false
            //     }
            // }
            // return true
      }
  },
  methods:{
      allSelect(){
         if(this.isSelect){
             this.cartList.forEach(item => item.checked = false)
         }else{
             this.cartList.forEach(item=>item.checked = true)
         }
      },
      clickBtn(){
          if(!this.isSelect){
             this.$toast.show('请选择购买商品',2000)
          }
      }
  }
};
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  line-height: 40px;
  background-color: rgb(247, 235, 235);
  position: relative;
  bottom: 40px;
  display: flex;
  align-items: center;
}
.select-btn {
  margin-left: 15px;
}
.select-text {
  margin-left: 5px;
}
</style>
