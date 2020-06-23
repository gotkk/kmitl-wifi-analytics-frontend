<template>
  <div class="building-detail">
    <v-container>
      <v-card class="elevation-6 block-building-data">
        <v-row>
          <v-col cols="12">
            <div class="d-flex justify-center">
              <strong>Building Data</strong>
            </div>
          </v-col>
        </v-row>
        <v-row v-for="(item_row, index_row) in buildingData" :key="index_row">
          <v-col
            v-for="(item_col, index_col) in item_row"
            :key="index_col"
            cols="12"
            sm="6"
          >
            <BuildingDetailTextField
              :label="item_col.label"
              :value="item_col.value"
              :percent="item_col.percent"
            ></BuildingDetailTextField>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import BuildingDetailTextField from "./BuildingDetailTextField";
export default {
  name: "BuildingDetail",
  components: {
    BuildingDetailTextField,
  },
  props: {
    buildingData: {
      type: Array,
      default: () => []
    }
  },
};
</script>

<style scoped>
.block-building-data {
  padding: 16px;
}
</style>
