<template>
  <div class="map-visualize">
    <div ref="map" class="google-map-style">
      <span>Load Google Map failed!!</span>
    </div>
  </div>
</template>

<script>
import GoogleMapAPI from "../utils/GoogleMapAPI";
export default {
  name: "MapVisualize",
  data() {
    return {
      polygon_path: [
        [
          { lat: 13.729557, lng: 100.7771433 },
          { lat: 13.7293733, lng: 100.777146 },
          { lat: 13.7293811, lng: 100.7776047 },
          { lat: 13.7295661, lng: 100.7776033 },
          { lat: 13.729557, lng: 100.7771433 },
        ],
        [
          { lat: 13.7301094, lng: 100.7768328 },
          { lat: 13.729927, lng: 100.7768348 },
          { lat: 13.7299283, lng: 100.7769226 },
          { lat: 13.7298358, lng: 100.776928 },
          { lat: 13.729841, lng: 100.7773759 },
          { lat: 13.7301172, lng: 100.7773665 },
          { lat: 13.7301094, lng: 100.7768328 },
        ],
      ],
      building: [
        "อาคารพระเทพ A",
        "อาคารพระเทพ B",
        "อาคารพระเทพ C",

      ]
    };
  },
  mounted() {
    this.initialMap();
  },
  methods: {
    initialMap() {
      GoogleMapAPI().then((google) => {
        let map = new google.maps.Map(this.$refs.map, {
          zoom: 17,
          center: { lat: 13.7298717, lng: 100.7761224 },
          // mapTypeId: 'terrain'
        });

        for (let i = 0, arri = this.polygon_path.length; i < arri; ++i) {
          let polygon = new google.maps.Polygon({
            path: this.polygon_path[i],
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
            building: this.building[i],
          });
          polygon.setMap(map);
          google.maps.event.addListener(polygon, "click", () => {
            console.log(polygon.building);
          });
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
