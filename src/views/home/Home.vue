<template>
  <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>

        <scroll class="content" ref="scroll" :probe-type="3" @scroll="scrollShow"  :pull-up-load="true">
        <!-- @pullingUp="loadMore" -->
            <recommend-view :recommends="recommends"/>
            <feature/>
            <tab-control :titles="['流行','精选','时尚']"  @tabClick="tabClick"    />
            <good-list :goods="showGoods" />
        </scroll>

        <back-top @click.native="backClick"  v-show="isShow" />

  </div>
</template>


<script>
import NavBar from 'components/common/navbar/NavBar'
import RecommendView from './childComps/RecommendView'
import Feature from './childComps/feature'
import TabControl from 'components/content/tabControl/TabControl'
import GoodList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import {getHomeMultidata,getHomeGoods} from 'network/home'
export default {
    name:"home",
    components:{
        NavBar,
        RecommendView,
        Feature,
        TabControl,
        GoodList,
        Scroll,
        BackTop

    },
    data(){
        return{
            banner:[],
            recommends:[],
            dKeyword:[],
            keywords:[],
            goods:{
                'pop':{page:0,list:[]},
                'new':{page:0,list:[]},
                'sell':{page:0,list:[]},
            },
            currentType:'pop',
            isShow:false

        }
    },
    computed:{
        showGoods(){
            return this.goods[this.currentType].list
        }
    },
    created(){
        this.getHomeMultidata()
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')



    },
    mounted(){

     const refresh =  this.debounce(this.$refs.scroll.refresh)
         //监听ITEM中的图片家宅完成
        this.$bus.$on('itemImageLoad',()=>{
            // console.log("---")
            // this.$refs.scroll.refresh()
            refresh()
        })
    },
    methods:{

        debounce(func,delay){
            let timer = null
            return function(...args){
              if(timer) clearTimeout(timer)
              timer = setTimeout(()=>{
                  func.apply(this,args)
              },delay)
            }

        },

        getHomeMultidata(){
            getHomeMultidata().then(res=>{
                this.banner = res.data.banner.list;
                this.recommends = res.data.recommend.list;
                this.dKeyword = res.data.dKeyword.list;
                this.keywords = res.data.keywords.list;
            })
        },
        getHomeGoods(type){
            const page = this.goods[type].page+1
            getHomeGoods(type,page).then(res=>{
                this.goods[type].list.push(...res.data.list)
                this.goods[type].page += 1
                //this.$refs.scroll.finishPullUp()
            })
        },
        tabClick(index){
            console.log("间隔");
            switch(index){
                case 0:
                this.currentType = 'pop'
                break
                case 1:
                this.currentType = 'new'
                break
                case 2:
                this.currentType = 'sell'
                break
            }
        },
        backClick(){
            this.$refs.scroll.scrollTo(0,0)
        },
        scrollShow(position){
            this.isShow = -(position.y)>700
        },
        // loadMore(){
        //       this.getHomeGoods(this.currentType)
        //       this.$refs.scroll.scroll.refresh()
        // }
    }
}
</script>


<style scoped>
    #home{  position: relative; height: 100vh;}
    .home-nav{
         background-color: var(--color-tint);
        color: #fff;
        position: fixed;
        top:0;
        left:0;
        right:0;
        z-index:6
    }
    .tab-control{ position:sticky; top:40px; z-index:6;}
    .content{ position:absolute; top:40px; bottom:51px; left:0; right:0;}

</style>
