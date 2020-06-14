<template>
  <div class="visualize">
    <v-container>
      <v-row>
        <v-col>
          <MapVisualize />
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
};
</script>

<style lang="scss" scoped></style>
