<template>
  <div class="signal-dbm-detail">
    <v-container>
      <v-card class="elevation-6 pl-6 pt-6 pr-6 pb-6 mt-4">
        <v-row>
          <v-col cols="12">
            <div class="d-flex justify-center">
              <strong>Form Data</strong>
            </div>
          </v-col>
        </v-row>
        <v-row v-for="(item_row, index_row) in formData" :key="index_row">
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
  name: "SignalDbmDetail",
  components: {
    BuildingDetailTextField,
  },
  props: {
    formData: {
      type: Array,
      default: () => []
    }
  },
};
</script>

<style scoped>
</style>
