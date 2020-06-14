const axios = require("axios");

const state = {
  map: "",
};

const getters = {
  map: (state) => state.map,
};

const mutations = {
  setMap(state, map) {
    state.map = map;
  },
};

const actions = {
  getLatLng({ commit }) {
    return Promise((resolve, reject) => {
      axios
        .get( `${process.env.VUE_APP_VAP_BACKEND_APP}/location/lag_lng`)
        .then((res) => {
          commit("setMap", res.data);
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
