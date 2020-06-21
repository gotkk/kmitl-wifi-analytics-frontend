import Vue from "vue";
import Vuex from "vuex";
import visualize from "./modules/visualize";
import form from "./modules/form";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    visualize,
    form
  },
});
