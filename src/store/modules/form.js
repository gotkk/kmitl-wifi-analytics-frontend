const axios = require("axios");

const state = {
  form: "",
};

const getters = {
    form: (state) => state.form,
};

const mutations = {
  setForm(state, form) {
    state.form = form;
  },
};

const actions = {
  getFormData({ commit }, building_code) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${process.env.VUE_APP_BACKEND_APP}/form/${building_code}`)
        .then((res) => {
          commit("setForm", res.data.result);
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
