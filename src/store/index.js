import Vue from 'vue';
import vuex from 'vuex';
Vue.use(vuex);

const state ={
   showFooter:true,
   changableNum:0
};

const getters = {
  isShow(state){
    return state.showFooter
  },
  getChangedNum(){
    return state.changableNum
  }
};

const mutations={
  show(state){
    state.showFooter = true;
  },
  hide(state){
    state.showFooter = false;
  },
  newNUM(state,sum){
    state.changableNum += sum;
  }
}

const actions = {
  hideFooter(context){
    context.commit('hide');
  },
  showFooter(context){
    context.commit('show');
  },
  getNewNum(context,num){
    context.commit('newNum',num)
  }
};

const store = new vuex.Store({
  state,
  getters,
  mutations,
  actions
});

export default store;

