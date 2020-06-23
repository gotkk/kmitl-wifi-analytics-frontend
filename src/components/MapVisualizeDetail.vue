<template>
  <div class="map-visualize-detail">
    <div class="d-flex justify-center block-detail-layout">
      <div class="elevation-6 block-detail">
        <v-container>
          <v-row>
            <v-col>
              <div class="d-flex justify-center">
                <strong>KMITL Building</strong>
              </div>
            </v-col>
          </v-row>
          <v-row v-for="item in percentList" :key="item.value">
            <v-col cols="2" sm="1">
              <div class="d-flex justify-center">
                <div
                  class="block-building"
                  :style="`backgroundColor: ${item.color};`"
                ></div>
              </div>
            </v-col>
            <v-col cols="5" sm="2" lg="1">
              <span >{{item.min}} - {{item.max}}</span>
              <span v-if="item.min !== null" key="if_percent_min">%</span>
            </v-col>
            <v-col cols="5" sm="2" lg="1">
              <span>{{ item.value }}</span>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MapVisualizeDetail",
  props: {
    percentList: {
      type: Array,
      default: () => [],
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
.block-building {
  width: 20px;
  height: 20px;
  border-style: solid;
  border-width: 1px;
  border-color: #000000;
}
</style>
