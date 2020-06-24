<template>
  <div class="form">
    <SignalDbmDetail
      :form-data="form_data"
      v-if="signal_loaded"
      key="if-building"
    />
    <v-container>
      <ThePercentageCriteria :percent-list="percentList" />
    </v-container>
    <SignalDbmTable
      v-if="signal_loaded && signal_dbm.length > 0"
      key="if-signal-loaded"
    />
  </div>
</template>

<script>
import ThePercentageCriteria from "../components/ThePercentageCriteria";
import SignalDbmDetail from "../components/SignalDbmDetail";
import SignalDbmTable from '../components/SignalDbmTable';
import { mapState } from "vuex";
import Fn from "../functions";
const { percentCriteria } = require("../data");

export default {
  name: "Form",
  components: {
    ThePercentageCriteria,
    SignalDbmDetail,
    SignalDbmTable,
  },
  data() {
    return {
      signal_loaded: false,
      building_code: "",
      form_id: "",
      signal_dbm: [],
      form_data: [],
    };
  },
  mounted() {
    this.initialFormData();
  },
  computed: {
    ...mapState({
      form: (state) => state?.form?.form,
    }),
    percentList() {
      return percentCriteria;
    },
  },
  methods: {
    initialFormData() {
      if (this.$store.getters.form === "") {
        this.$router.push("/visualize");
      }
      this.building_code = this.$router.history.current.params.building_code;
      this.form_id = this.$router.history.current.params.form_id;
      let data = {
        building_code: this.building_code,
        form_id: this.form_id
      }
      this.$store
        .dispatch("getSignalDbmData", data)
        .then((res) => {
          this.signal_dbm = [...res];
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.signal_loaded = true;
        });

      let form_select = {};
      for (let i = 0, arri = this.form.length; i < arri; ++i) {
        if (this.form[i].form_id === this.form_id) {
          form_select = { ...this.form[i] };
          break;
        }
      }
      this.form_data = Fn.mapSignalDbmData(form_select);
    },
  },
};
</script>

<style scoped></style>
