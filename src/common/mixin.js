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
