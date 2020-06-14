import Vue from "vue";
import Vuex from "vuex";
import visualize from "./modules/visualize";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    visualize,
  },
});
