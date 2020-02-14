<template>
  <div id="home">
      <nav-bar class="home-nav">
          <div slot="center">购物街</div>
      </nav-bar>
      <recommend-view :recommends="recommends"/>
      <feature/>
      <tab-control :titles="['流行','精选','时尚']"/>
     <good-list :goods="goods['pop'].list" />
      <!-- <ul>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
      </ul> -->
  </div>
</template>


<script>
import NavBar from 'components/common/navbar/NavBar'
import RecommendView from './childComps/RecommendView'
import Feature from './childComps/feature'
import TabControl from 'components/content/tabControl/TabControl'
import GoodList from 'components/content/goods/GoodsList'


import {getHomeMultidata,getHomeGoods} from 'network/home'
export default {
    name:"home",
    components:{
        NavBar,
        RecommendView,
        Feature,
        TabControl,
        GoodList
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
            }

        }
    },
    created(){
        this.getHomeMultidata()
        this.getHomeGoods('pop')
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
            })
        }
    }
}
</script>


<style >
    #home{ padding-top:44px;}
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
</style>
