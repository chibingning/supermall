<template>
<div class="check" :class="{checked:isChecked}">

</div>
</template>

<script>
export default{
    props:{
        isChecked:{
            type:Boolean,
            default(){
                return false
            }
        }
    }
}

</script>


<style scoped>
.check{ width:20px; height: 20px; margin-right:5px; border-radius:50%; background: url(~assets/img/shopcart/check.svg)no-repeat; background-size:cover}
.checked{ width:20px; height: 20px; margin-right:5px; border-radius:50%; background: url(~assets/img/shopcart/checked.svg)no-repeat; background-size:cover}

</style>
