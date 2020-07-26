<template>
  <div class="the-heading-detail">
    <v-container>
      <v-card class="elevation-6 pl-6 pt-6 pr-6 pb-6 mt-4">
        <v-row>
          <v-col cols="12">
            <div class="d-flex justify-center">
              <strong>{{title}}</strong>
            </div>
          </v-col>
        </v-row>
        <v-row v-for="(item_row, index_row) in detailData" :key="index_row">
          <v-col
            v-for="(item_col, index_col) in item_row"
            :key="index_col"
            cols="12"
            sm="6"
          >
            <TheHeadingDetailTextField
              :label="item_col.label"
              :value="item_col.value"
              :percent="item_col.percent"
            ></TheHeadingDetailTextField>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import TheHeadingDetailTextField from "../components/TheHeadingDetailTextField";
export default {
  name: "TheHeadingDetail",
  props: {
    detailData: {
      type: Array,
      default: () => [],
    },
    title: {
        type: String,
        default: "Title is not available"
    }
  },
  components: {
    TheHeadingDetailTextField,
  },
};
</script>

<style scoped></style>
