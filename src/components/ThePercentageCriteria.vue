<template>
  <div class="the-percentage-criteria">
    <v-card class="elevation-6">
      <v-row>
        <v-col>
          <div class="d-flex justify-center">
            <strong>KMITL WiFi Percentage Criteria</strong>
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
        <v-col cols="3" sm="2" lg="1">
          <span>{{ item.min }} - {{ item.max }}</span>
          <span v-if="item.min !== null" key="if-percent_min">%</span>
        </v-col>
        <v-col cols="7" sm="9">
          <span>{{ item.value }}</span>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ThePercentageCriteria",
  props: {
    percentList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.block-building {
  width: 20px;
  height: 20px;
  border-style: solid;
  border-width: 1px;
  border-color: #000000;
}
</style>
