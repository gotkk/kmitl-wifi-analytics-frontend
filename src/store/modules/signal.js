const axios = require("axios");

const state = {
  dbm: "",
};

const getters = {
    dbm: (state) => state.dbm,
};

const mutations = {
  setDbm(state, dbm) {
    state.dbm = dbm;
  },
};

const actions = {
  getSignalDbmData({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${process.env.VUE_APP_BACKEND_APP}/signal/dbm/${data.building_code}/${data.form_id}`)
        .then((res) => {
          commit("setDbm", res.data.result);
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
