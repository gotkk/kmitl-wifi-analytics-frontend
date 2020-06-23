import Vue from "vue";
import Vuex from "vuex";
import visualize from "./modules/visualize";
import form from "./modules/form";
import signal from './modules/signal';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    visualize,
    form,
    signal
  },
});
