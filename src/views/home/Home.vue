<template>
  <div id="home">
      <nav-bar class="home-nav">
          <div slot="center">购物街</div>
      </nav-bar>
      <recommend-view :recommends="recommends"/>
      <feature/>
      <tab-control :titles="titles"/>
      <ul>
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
      </ul>
  </div>
</template>


<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMultidata} from 'network/home'
import RecommendView from './childComps/RecommendView'
import Feature from './childComps/feature'
import TabControl from 'components/content/tabControl/TabControl'
export default {
    name:"home",
    components:{
        NavBar,
        RecommendView,
        Feature,
        TabControl
    },
    data(){
        return{
            banner:[],
            recommends:[],
            dKeyword:[],
            keywords:[],
            titles:['流行','精选','时尚']
        }
    },
    created(){
        getHomeMultidata().then(res=>{
            this.banner = res.data.banner.list;
            this.recommends = res.data.recommend.list;
            this.dKeyword = res.data.dKeyword.list;
            this.keywords = res.data.keywords.list;

        })
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
    }
    .tab-control{ position:sticky; top:40px; }
</style>
