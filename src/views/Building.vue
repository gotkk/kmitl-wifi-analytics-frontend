<template>
  <div>
    <BuildingDetail
      :building-data="building_data"
      v-if="form_loaded"
      key="if_building"
    />
    <FormTable v-if="form_loaded && form.length > 0" key="if_form" />
    <NoDataTable
      v-else-if="form_loaded"
      key="if_form"
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
import { mapState } from "vuex";

export default {
  name: "BuildingData",
  components: {
    FormTable,
    NoDataTable,
    BuildingDetail,
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
  },
  methods: {
    initialBuildingData() {
      if (this.$store.getters.building === "") {
        this.$router.push("/visualize");
      }
      this.building_code = this.$router.history.current.params.building_code;
      this.$store
        .dispatch("getFormData", this.building_code)
        .then((res) => {
          this.form = [...res];
          this.form_loaded = true;
        })
        .catch((err) => {
          console.log(err.message);
        });

      let building_select = {};
      for (let i = 0, arri = this.building.length; i < arri; ++i) {
        if (this.building[i].buildingCode === this.building_code) {
          building_select = this.building[i];
          break;
        }
      }
      let {
        buildingCode,
        buildingName,
        max,
        min,
        avg_percent,
        quantity,
      } = building_select;
      this.building_data = [
        [
          {
            label: "Building Code",
            value: buildingCode,
          },
          {
            label: "Building Name",
            value: buildingName,
          },
        ],
        [
          {
            label: "Max",
            value: max,
          },
          {
            label: "Min",
            value: min,
          },
        ],
        [
          {
            label: "Average",
            value: avg_percent,
          },
          {
            label: "Form Data Collection Quantity",
            value: quantity,
          },
        ],
      ];
    },
  },
};
</script>

<style scoped></style>
