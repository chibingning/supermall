<template>
  <div v-show="isShow" class="toast" >
    <div  >
        <span>{{message}}</span>
    </div>
  </div>
</template>

<script>
export default {
    data(){
       return {
        message:'', //定义显示的文字
        isShow:false //默认隐藏/不显示
       }
    },
    methods:{
        show(message,duration){  //可以给默认值 message = '默认值' duration = 2000
            this.message = message
            this.isShow = true
            setTimeout(()=>{
                this.isShow = false
                this.message = ''
            },duration)
        }
    }
};
</script>

<style scoped>
.toast {
  color: #fff;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index:999;

}
</style>
