<template>
  <div class="visualize">
    <div v-if="map_loaded" key="if_map">
      <MapVisualize />
      <MapVisualizeDetail :percent-list="percentList" />
    </div>
  </div>
</template>

<script>
import MapVisualize from "../components/MapVisualize";
import MapVisualizeDetail from "../components/MapVisualizeDetail";

const { percentCriteria } = require("../data");

export default {
  name: "Visualize",
  components: {
    MapVisualize,
    MapVisualizeDetail,
  },
  data() {
    return {
      map: [],
      map_loaded: false
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
      })
  },
  computed: {
    percentList() {
      return percentCriteria;
    },
  },
};
</script>

<style scoped></style>
