<template>
  <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <tab-control :titles="['流行','精选','时尚']"  @tabClick="tabClick"   ref="tabControl1"
        class="tab-control-top" v-show="isTabFixed"/>


        <scroll class="content" ref="scroll" :probe-type="3" @scroll="scrollShow"  :pull-up-load="true" @pullingUp="loadMore">
            <home-swiper :banner="banner" ref="hSwiper" @swiperImageLoad="swiperImageLoad"></home-swiper>
            <recommend-view :recommends="recommends"/>
            <feature/>
            <tab-control :titles="['流行','精选','时尚']"  @tabClick="tabClick"   ref="tabControl2"  />
            <good-list :goods="showGoods" />
        </scroll>

        <back-top @click.native="backClick"  v-show="isShow" />

  </div>
</template>


<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import Feature from './childComps/feature'
import TabControl from 'components/content/tabControl/TabControl'
import GoodList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import {getHomeMultidata,getHomeGoods} from 'network/home'
import {debounce}from 'common/utils'
import { itemListenerMixin,backTopMixin} from 'common/mixin'
export default {
    name:"home",
    components:{
        NavBar,
        HomeSwiper,
        RecommendView,
        Feature,
        TabControl,
        GoodList,
        Scroll


    },
    mixins:[itemListenerMixin,backTopMixin],
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
            taboffsetTop:0,
            isTabFixed:false,
            saveY:0



        }
    },
    computed:{
        showGoods(){
            return this.goods[this.currentType].list
        }
    },
    destroyed(){

    },
    activated(){

        this.$refs.scroll.scrollTo(0,this.saveY,0)
        this.$refs.scroll.refresh()
    },
    deactivated(){
        //保存Y值
       this.saveY = this.$refs.scroll.getScrollY()

        //取消全局事件的监听  不能只传一个事件（只传一个事件就会把所有的事件给关掉），要传一个函数
        this.$bus.$off('itemImageLoad',this.itemImgListener)



    },
    created(){
        this.getHomeMultidata()
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
    },
    mounted(){




    },
    methods:{

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

                //完成上拉加载更多
                this.$refs.scroll.finishPullUp()
            })
        },
        tabClick(index){

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
            this.$refs.tabControl1.currentIndex = index;
            this.$refs.tabControl2.currentIndex = index;
        },

        scrollShow(position){
            //判断topback是否显示
            this.isShow = -(position.y)>700
            //决定tabcontrol是否吸顶
            this.isTabFixed = (-position.y) > this.taboffsetTop
        },
        loadMore(){
              this.getHomeGoods(this.currentType)
            //   this.$refs.scroll.scroll.refresh()
        },
        swiperImageLoad(){
        this.taboffsetTop = this.$refs.tabControl2.$el.offsetTop

        }
    }
}
</script>


<style scoped>
    #home{  position: relative; height: 100vh;}
    .home-nav{
        background-color: var(--color-tint);
        color: #fff;
        position: relative;
        z-index:6
    }
    /* .tab-control{ top:44px; z-index:6;} */
    .content{ position:absolute; top:40px; bottom:51px; left:0; right:0;}
    .tab-control-top{ position: relative; z-index:9;}

</style>
