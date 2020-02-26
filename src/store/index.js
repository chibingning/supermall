import Vue from 'vue';
import vuex from 'vuex';
Vue.use(vuex);

const state = {
    cartList:[]

};

const mutations = {
    addCart(state, payload) {
        //判断这个商品的iid是否存在
        let oldProudct = state.cartList.find(item=>item.iid === payload.iid)
        //判断oldProudct
        if(oldProudct){
            oldProudct.count += 1;
        }else{
            payload.count = 1;
            state.cartList.push(payload)
        }

    }
}



const getters = {
    isShow(state) {
        return state.showFooter
    },
    getChangedNum() {
        return state.changableNum
    }
};



const actions = {
    hideFooter(context) {
        context.commit('hide');
    },
    showFooter(context) {
        context.commit('show');
    },
    getNewNum(context, num) {
        context.commit('newNum', num)
    }
};

const store = new vuex.Store({
    state,
    getters,
    mutations,
    actions
});

export default store;

