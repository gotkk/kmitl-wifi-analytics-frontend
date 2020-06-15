const axios = require("axios");

const state = {
  building: "",
};

const getters = {
  building: (state) => state.building,
};

const mutations = {
  setBuilding(state, building) {
    state.building = building;
  },
};

const actions = {
  getLatLng({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get( `${process.env.VUE_APP_BACKEND_APP}/location/lag_lng`)
        .then((res) => {
          commit("setBuilding", res.data.result);
          resolve(res.data.result);
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
