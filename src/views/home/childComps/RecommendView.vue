<template>
   <div class="recommend">
       <div v-for="(item,index) in recommends" class="recommend-item">
           <a :href="item.link">
               <img :src="item.image" alt="">
                <div>{{item.title}}</div>
           </a>

       </div>
   </div>
</template>

<script>
    export default{
        props:{
            recommends:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>


<style>
.recommend{ display:flex; padding:15px 0 20px; border-bottom:6px solid #f5f5f5;}
.recommend-item{ flex:1; text-align: center; font-size:13px; }
.recommend-item a{display: block; text-decoration: none; color: #555;}
.recommend-item a img{ width: 65px; height: 65px; }
.recommend-item a div{ margin-top:10px;}
</style>
