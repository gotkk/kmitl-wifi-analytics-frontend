<template>
  <div class="evaluation">
    <div>
      <TheHeadingDetail :detail-data="dbm_data" title="Signal dbm Data"/>
    </div>
  </div>
</template>

<script>
import TheHeadingDetail from "../components/TheHeadingDetail";
import Fn from "../functions";
import { mapState } from "vuex";
export default {
  name: "evaluation",
  components: {
    TheHeadingDetail,
  },
  data() {
    return {
      dbm_data: [],
    };
  },
  computed: {
    ...mapState({
      dbm: (state) => state?.signal?.dbm,
    }),
    mac_address() {
      return this.$router?.history?.current?.params?.mac_address;
    },
        form_id() {
      return this.$router?.history?.current?.params?.form_id;
    },
    building_code() {
      return this.$router?.history?.current?.params?.building_code;
    },
  },
  mounted() {
    this.initialSignalData();
  },
  methods: {
    initialSignalData() {
      if (this.$store.getters.dbm === "") {
        let data = {
          building_code: this.building_code,
          form_id: this.form_id,
        };
        this.$store
          .dispatch("getSignalDbmData", data)
          .then((res) => {
            this.getDbmSelect([...res]);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.getDbmSelect(this.dbm);
      }
    },
    getDbmSelect(dbm) {
      console.log(dbm);
      let dbm_select = {};
      for (let i = 0, arri = dbm.length; i < arri; ++i) {
        if (dbm[i].mac_address === this.mac_address) {
          dbm_select = { ...this.dbm[i] };
          break;
        }
      }
      this.dbm_data = Fn.mapEvData(dbm_select);
    },
  },
};
</script>

<style scoped></style>
