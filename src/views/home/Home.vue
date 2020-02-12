<template>
  <div id="home">
      <nav-bar class="home-nav">
          <div slot="center">购物街</div>
      </nav-bar>
  </div>
</template>


<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMultidata} from 'network/home'
export default {
    name:"home",
    components:{
        NavBar
    },
    data(){
        return{
            banner:[],
            recommend:[],
            dKeyword:[],
            keywords:[]
        }
    },
    created(){
        getHomeMultidata().then(res=>{

            this.banner = res.data.banner;
            this.recommend = res.data.recommend;
            this.dKeyword = res.data.dKeyword;
            this.keywords = res.data.keywords;

        })
    }
}
</script>


<style >

</style>
