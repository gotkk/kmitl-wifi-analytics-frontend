<template>
  <div class="visualize">
    <div v-if="map_loaded" key="if-map">
      <MapVisualize />
      <div class="d-flex justify-center block-detail-layout">
        <div class="block-detail">
          <ThePercentageCriteria :percent-list="percentList" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MapVisualize from "../components/MapVisualize";
import ThePercentageCriteria from "../components/ThePercentageCriteria";

const { percentCriteria } = require("../data");

export default {
  name: "Visualize",
  components: {
    MapVisualize,
    ThePercentageCriteria,
  },
  data() {
    return {
      map: [],
      map_loaded: false,
    };
  },
  created() {
    this.$store
      .dispatch("getLatLng")
      .then((res) => {
        this.map = [...res];
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        this.map_loaded = true;
      });
  },
  computed: {
    percentList() {
      return percentCriteria;
    },
  },
};
</script>

<style scoped>
.block-detail-layout {
  width: 100vw;
  margin-bottom: 3vh;
}
.block-detail {
  width: 90vw;
  height: 100%;
}
</style>
