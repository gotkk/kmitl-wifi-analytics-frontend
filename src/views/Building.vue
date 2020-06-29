<template>
  <div>
    <BuildingDetail
      :building-data="building_data"
      v-if="form_loaded"
      key="if-building"
    />
    <v-container>
      <ThePercentageCriteria :percent-list="percentList" />
    </v-container>
    <FormTable v-if="form_loaded && form.length > 0" key="if-form" />
    <NoDataTable
      v-else-if="form_loaded"
      key="if-form"
      title="Form Data Collection"
      content-type="the building code"
      :content="this.building_code"
    />
  </div>
</template>

<script>
import FormTable from "../components/FormTable";
import NoDataTable from "../components/NoDataTable";
import BuildingDetail from "../components/BuildingDetail";
import ThePercentageCriteria from "../components/ThePercentageCriteria";
import { mapState } from "vuex";
import Fn from "../functions";
const { percentCriteria } = require("../data");

export default {
  name: "BuildingData",
  components: {
    FormTable,
    NoDataTable,
    BuildingDetail,
    ThePercentageCriteria,
  },
  data() {
    return {
      building_code: "",
      form_loaded: false,
      form: [],
      building_data: [],
    };
  },
  mounted() {
    this.initialBuildingData();
  },
  computed: {
    ...mapState({
      building: (state) => state.visualize?.building,
    }),
    percentList() {
      return percentCriteria;
    },
  },
  methods: {
    initialBuildingData() {
      this.building_code = this.$router.history.current.params.building_code;
      if (this.$store.getters.building === "") {
        // this.$router.push("/visualize");
        this.$store
          .dispatch("getLatLng")
          .then((res) => {
            this.getBuildingSelect([...res]);
          })
          .catch((err) => {
            console.log(err.message);
          });
      } else {
        this.getBuildingSelect(this.building);
      }
      this.$store
        .dispatch("getFormData", this.building_code)
        .then((res) => {
          this.form = [...res];
        })
        .catch((err) => {
          console.log(err.message);
        })
        .finally(() => {
          this.form_loaded = true;
        });
    },
    getBuildingSelect(building) {
      let building_select = {};
      for (let i = 0, arri = building.length; i < arri; ++i) {
        if (building[i].buildingCode === this.building_code) {
          building_select = { ...this.building[i] };
          break;
        }
      }
      this.building_data = Fn.mapFormData(building_select);
    },
  },
};
</script>

<style scoped></style>
