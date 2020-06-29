const axios = require("axios");

const state = {
  dbm: "",
  ch_counter: "",
};

const getters = {
  dbm: (state) => state.dbm,
  ch_counter: (state) => state.ch_counter,
};

const mutations = {
  setDbm(state, dbm) {
    state.dbm = dbm;
  },
  setChCounter(state, ch_counter) {
    state.ch_counter = ch_counter;
  },
};

const actions = {
  getSignalDbmData({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `${process.env.VUE_APP_BACKEND_APP}/signal/dbm/${data.building_code}/${data.form_id}`
        )
        .then((res) => {
          commit("setDbm", res.data.result);
          resolve(res.data.result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getChannelCounter({ commit }, form_id) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${process.env.VUE_APP_BACKEND_APP}/signal/ch_counter/${form_id}`)
        .then((res) => {
          commit("setChCounter", res.data.result);
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
