<template>
  <div class="visualize">
    <v-container>
      <v-row>
        <v-col cols="12" class="d-flex justify-center">
            <span>KMITL Building Map</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <MapVisualize v-if="map.length > 0" key="if_map" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import MapVisualize from "../components/MapVisualize";
export default {
  name: "Visualize",
  components: {
    MapVisualize,
  },
  data() {
    return {
      map: [],
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
};
</script>

<style scoped></style>
