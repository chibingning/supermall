<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>

import BScroll from 'better-scroll'
export default {
    props:{
        probeType:{
            type:Number,
            default:0
        },
        // pullUpLoad:{
        //     type:Boolean,
        //     default:false
        // }
    },
    data(){
        return{
            scroll:null,

        }
    },
    mounted(){
        //创建bscroll对象
        this.scroll = new BScroll(this.$refs.wrapper,{
            probeType:this.probeType,
            click:true,
            //pullUpLoad:this.pullUpLoad
        })
    //监听滚动位置
        this.scroll.on('scroll',(position)=>{
            this.$emit("scroll",position);
        })
    //监听上拉刷新

    // this.scroll.on('pullingUp',()=>{
    //     this.$emit('pullingUp')
    // })

    },
    methods:{
        scrollTo(x,y,time=300){
            this.scroll && this.scroll.scrollTo(x,y,time)
        },
        finishPullUp(){
            this.scroll.finishPullUp()
        },
        refresh(){
            console.log('----');
           this.scroll && this.scroll.refresh()
        }
    }
}
</script>

<style scoped>

</style>
