<template>
  <div class="form">
    <v-container>
      <ThePercentageCriteria :percent-list="percentList" />
    </v-container>
    <BuildingTable
      v-if="building_loaded && building.length > 0"
      key="if-form"
    />
  </div>
</template>

<script>
import ThePercentageCriteria from "../components/ThePercentageCriteria";
import BuildingTable from "../components/BuildingTable";
import { mapState } from "vuex";
const { percentCriteria } = require("../data");

export default {
  name: "Form",
  components: {
    ThePercentageCriteria,
    BuildingTable,
  },
  data() {
    return {
      building_loaded: false,
      building: [],
    };
  },
  mounted() {
    // this.initialFormData();
    console.log(this.$store);
  },
  computed: {
    ...mapState({
      
    }),
    percentList() {
      return percentCriteria;
    },
  },
  methods: {
    initialFormData() {},
  },
};
</script>

<style scoped></style>
