<template>
  <div class="map-visualize">
    <div ref="map" class="google-map-style">
      <span>Loading Google Map...</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import GoogleMapAPI from "../utils/GoogleMapAPI";
export default {
  name: "MapVisualize",
  mounted() {
    this.initialMap();
  },
  computed: {
    ...mapState({
      building: (state) => state?.visualize?.building,
    }),
  },
  methods: {
    initialMap() {
      GoogleMapAPI().then((google) => {
        let map = new google.maps.Map(this.$refs.map, {
          zoom: 17,
          center: { lat: 13.7298717, lng: 100.7761224 },
          // mapTypeId: 'terrain'
        });

        for (let i = 0, arri = this.building.length; i < arri; ++i) {
          let polygon = new google.maps.Polygon({
            path: this.building[i].location,
            strokeColor: "#32a852",
            strokeOpacity: 1,
            strokeWeight: 2,
            fillColor:
              this.building[i].buildingCode === "AD-03" ? "#32a852" : "#ffff00",
            fillOpacity: 0.5,
            buildingCode: this.building[i].buildingCode,
            buildingName: this.building[i].buildingName,
          });
          polygon.setMap(map);
          google.maps.event.addListener(polygon, "click", () => {
            this.handleSelectBuilding(
              polygon.buildingCode,
              polygon.buildingName
            );
          });
        }
      });
    },
    handleSelectBuilding(buildingCode, buildingName) {
      this.$fire({
        title: "Do you want to visualize?",
        text: `${buildingCode} : ${buildingName}`,
        showCancelButton: true,
        allowOutsideClick: false,
        // type: "error",
      }).then((e) => {
        if (e.value) {
          // this.$router.push({ path: `/visualize/${buildingCode}` });
          this.$router.push({ name: "VisualizeData", params: { building_code: buildingCode } });
        }
      });
    },
  },
};
</script>

<style scoped>
.google-map-style {
  width: 100%;
  height: 90vh;
}
</style>
