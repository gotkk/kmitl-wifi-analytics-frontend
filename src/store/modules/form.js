const axios = require("axios");

const state = {
  form: "",
  filter_form: "",
};

const getters = {
  form: (state) => state.form,
  filter_form: (state) => state.filter_form,
};

const mutations = {
  setForm(state, form) {
    let filter_form = [];
    for (let i = 0, arri = form.length; i < arri; ++i) {
      filter_form = [
        ...filter_form,
        {
          ...form[i],
          max: Math.round(form[i].max * 100) / 100,
          min: Math.round(form[i].min * 100) / 100,
        },
      ];
    }
    state.form = form;
    state.filter_form = filter_form;
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
