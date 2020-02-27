import {
    ADD_COUNTER,
    ADD_TO_CART
}from './mutation-types'

export default {
    addCart(context, payload) {
        //判断这个商品的iid是否存在
        let oldProudct = context.state.cartList.find(item=>item.iid === payload.iid)
        //判断oldProudct
        if(oldProudct){
            // oldProudct.count += 1;
            context.commit('ADD_COUNTER',oldProudct)
        }else{
            payload.count = 1;
            //context.state.cartList.push(payload)
            context.commit('ADD_TO_CART',payload)
        }

    }
}
