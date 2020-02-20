<template>
    <div>
        <nav-bar>
            <div slot="left">
                <div class="go-back" @click="goBack">
                    <img src="~assets/img/detail/back.png" alt="">
                </div>
            </div>
            <div slot="center" class="center">
                <div v-for="(item,index) in titles" :key="index" @click="tabClick(index)" >
                    <span :class="{active:currentIndex===index}">{{item}}</span>
                </div>
            </div>
        </nav-bar>
    </div>

</template>


<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
    components:{
        NavBar,
    },
    data(){
        return{
            titles:['商品','参数','评论','推荐'],
            currentIndex:0
        }
    },
    methods:{
        tabClick(index){
            this.currentIndex = index;
        },
        goBack(){
            this.$router.go(-1);
        }
    }
}
</script>


<style scoped>
    .go-back{ text-align: center; }
    .go-back img{width: 25px;position: relative; top:7px;}
    .center{ display: flex}
    .center div{flex: 1; font-size:13px;}
    .center div span.active{ display: inline-block; color: pink;}
</style>
