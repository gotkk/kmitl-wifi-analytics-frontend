<template>
  <div class="visualize">
    <MapVisualize v-if="map.length > 0" key="if_map" />
    
        <MapVisualizeDetail :percent-list="percentList"/>
  </div>
</template>

<script>
import MapVisualize from "../components/MapVisualize";
import MapVisualizeDetail from "../components/MapVisualizeDetail";

const { percentCriteria } = require("../data")

export default {
  name: "Visualize",
  components: {
    MapVisualize,
    MapVisualizeDetail,
  },
  data() {
    return {
      map: [],
      // percentList: [
      //   {
      //     percent: "81 - 100 %",
      //     value: "Excellent",
      //     color: "#1E88E5"
      //   },
      //   {
      //     percent: "61 - 80 %",
      //     value: "Good",
      //     color: "#43A047"
      //   },
      //   {
      //     percent: "41 - 60 %",
      //     value: "Fair",
      //     color: "#FFEE58"
      //   },
      //   {
      //     percent: "21 - 40 %",
      //     value: "Bad",
      //     color: "#FB8C00"
      //   },
      //   {
      //     percent: "0 - 20 %",
      //     value: "Very Bad",
      //     color: "#E53935"
      //   },
      //   {
      //     percent: "No Data",
      //     value: "No Data",
      //     color: "#546E7A"
      //   },
      // ]
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
      });
  },
  computed: {
    percentList() {
      return percentCriteria 
    }
  },
};
</script>

<style scoped>

</style>
