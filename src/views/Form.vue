<template>
  <div class="form">
    <div v-if="dbm_loaded && ch_loaded" key="if-loaded">
      <TheHeadingDetail :detail-data="form_data" title="Form Data"/>
      <SignalDbmCountChart
        v-if="ch_counter.length > 0"
        :ch-counter="ch_counter"
      />
      <TheNoDataContent
        v-else
        key="if-signal-loaded"
        title="KMITL WiFi Channel Counter"
        content-type="the Form ID"
        :content="this.form_id"
      />
      <v-container>
        <ThePercentageCriteria :percent-list="percentList" />
      </v-container>
      <SignalDbmTable v-if="signal_dbm.length > 0" key="if-signal-loaded" />
      <TheNoDataContent
        v-else
        key="if-signal-loaded"
        title="Signal dbm Data Collection"
        content-type="the Form ID"
        :content="this.form_id"
      />
    </div>
    <TheFullScreenOverlayLoading v-else key="if-loaded" />
  </div>
</template>

<script>
import ThePercentageCriteria from "../components/ThePercentageCriteria";
import TheHeadingDetail from "../components/TheHeadingDetail";
import SignalDbmTable from "../components/SignalDbmTable";
import SignalDbmCountChart from "../components/SignalDbmCountChart";
import TheFullScreenOverlayLoading from "../components/TheFullScreenOverlayLoading";
import TheNoDataContent from "../components/TheNoDataContent";
import { mapState } from "vuex";
import Fn from "../functions";
const { percentCriteria } = require("../data");

export default {
  name: "Form",
  components: {
    ThePercentageCriteria,
    TheHeadingDetail,
    SignalDbmTable,
    SignalDbmCountChart,
    TheFullScreenOverlayLoading,
    TheNoDataContent,
  },
  data() {
    return {
      dbm_loaded: false,
      ch_loaded: false,
      signal_dbm: [],
      form_data: [],
      ch_counter: [],
    };
  },
  mounted() {
    this.initialFormData();
    this.initialChannelCounter();
  },
  computed: {
    ...mapState({
      form: (state) => state?.form?.form,
    }),
    percentList() {
      return percentCriteria;
    },
    form_id() {
      return this.$router?.history?.current?.params?.form_id;
    },
    building_code() {
      return this.$router?.history?.current?.params?.building_code;
    },
  },
  methods: {
    initialFormData() {
      if (this.$store.getters.form === "") {
        // this.$router.push("/visualize");
        this.$store
          .dispatch("getFormData", this.building_code)
          .then((res) => {
            this.getFormSelect([...res]);
            // console.log(res);
          })
          .catch((err) => {
            console.log(err.message);
          });
      } else {
        this.getFormSelect(this.form);
      }
      let data = {
        building_code: this.building_code,
        form_id: this.form_id,
      };
      this.$store
        .dispatch("getSignalDbmData", data)
        .then((res) => {
          this.signal_dbm = [...res];
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.dbm_loaded = true;
        });
    },
    getFormSelect(form) {
      let form_select = {};
      for (let i = 0, arri = form.length; i < arri; ++i) {
        if (form[i].form_id === this.form_id) {
          form_select = { ...form[i] };
          break;
        }
      }
      this.form_data = Fn.mapSignalDbmData(form_select);
    },
    initialChannelCounter() {
      this.$store
        .dispatch("getChannelCounter", this.form_id)
        .then((res) => {
          this.ch_counter = [...res];
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.ch_loaded = true;
        });
    },
  },
};
</script>

<style scoped></style>
