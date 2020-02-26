import BackTop from 'components/content/backTop/BackTop'
import {debounce} from "common/utils"
export const itemListenerMixin = {
    data(){
        return{
            itemImgListener:null,
            refresh:null
        }
    },
    mounted() {
        this.refresh = debounce(this.$refs.scroll.refresh)
        this.itemImgListener = () => {
            this.refresh()
        }
        this.$bus.$on('itemImageLoad', this.itemImgListener)

    }
}


export const backTopMixin = {
    data(){
        return {
            isShow:false,
        }
    },
    components:{
        BackTop
    },
    methods:{
        backClick(){
            this.$refs.scroll.scrollTo(0,0)
        }
    }
}
