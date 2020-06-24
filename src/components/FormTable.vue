<template>
  <div class="form-table">
    <v-container>
      <v-row>
        <v-col>
          <v-card class="elevation-6">
            <v-card-title>
              <div style="width: 100%">
                <v-row>
                  <v-col cols="12" sm="6">
                    <span>Form Data Collection</span>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="search_value"
                      append-icon="search"
                      label="Search"
                      single-line
                      hide-details
                      autocomplete="off"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </div>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="filter_form"
              :items-per-page="15"
              :search="search_value"
              @click:row="handleSelect"
            >
              <template v-slot:item.average_percent="{ item }">
                <!-- <v-chip
                  v-if="item.average_percent"
                  :color="getColorPercent(item.average_percent)"
                  dark
                >
                  {{ Math.round(item.average_percent * 100) / 100 }} %
                </v-chip> -->
                <div style="width: 150px">
                  <v-progress-linear
                    :value="item.average_percent"
                    height="28"
                    :color="getColorPercent(item.average_percent)"
                  >
                    <span class="text-percent">
                      {{ Math.round(item.average_percent * 100) / 100 }} %
                    </span>
                  </v-progress-linear>
                </div>
              </template>
              <template v-slot:item.max="{ item }">
                <v-chip v-if="item.max" :color="getColorPercent(item.max)" dark>
                  {{ item.max }} %
                </v-chip>
              </template>
              <template v-slot:item.min="{ item }">
                <v-chip v-if="item.min" :color="getColorPercent(item.min)" dark>
                  {{ item.min }} %
                </v-chip>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Fn from "../functions";

export default {
  name: "FormTable",
  data() {
    return {
      search_value: "",
      headers: [
        { text: "Percentage (average)", value: "average_percent", class: "grey lighten-2" },
        { text: "Form ID", value: "form_id", class: "grey lighten-2" },
        { text: "Timestamp", value: "timestamp", class: "grey lighten-2" },
        // {
        //   text: "Building Code",
        //   value: "building_code",
        //   class: "grey lighten-2",
        // },
        // {
        //   text: "Building Name",
        //   value: "building_name",
        //   class: "grey lighten-2",
        // },
        { text: "Floor", value: "floor", class: "grey lighten-2" },
        { text: "Detail", value: "detail", class: "grey lighten-2" },
        { text: "Max", value: "max", class: "grey lighten-2" },
        { text: "Min", value: "min", class: "grey lighten-2" },
      ],
    };
  },
  computed: {
    ...mapState({
      filter_form: (state) => state?.form?.filter_form,
    }),
    getColorPercent() {
      return Fn.getColorPercent;
    },
  },
  mounted() {
    console.log(this.form);
  },
  methods: {
    handleSelect(data) {
      console.log(data);
      let { building_code, form_id } = data;
      this.$router.push({
        name: "Form",
        params: { building_code: building_code, form_id: form_id },
      });
    },
  },
};
</script>

<style scoped>
.text-percent {
  font-weight: bold;
  color: #000000;
  text-shadow: 0 0 4px #ffffff;
}
</style>
