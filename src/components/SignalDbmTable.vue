<template>
  <div class="signal-dbm-table">
    <v-container>
      <v-card class="elevation-6 mb-4">
        <v-row>
          <v-col>
            <v-card-title>
              <div style="width: 100%">
                <v-row>
                  <v-col cols="12" sm="6">
                    <span>Signal dbm</span>
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
              :items="dbm"
              :items-per-page="15"
              :search="search_value"
              @click:row="handleSelect"
            >
              <template v-slot:[`item.percent`]="{ item }">
                <div style="width: 150px">
                  <v-progress-linear
                    :value="item.percent"
                    height="28"
                    :color="getColorPercent(item.percent)"
                  >
                    <span class="text-percent"
                      >{{ Math.round(item.percent * 100) / 100 }} %</span
                    >
                  </v-progress-linear>
                </div>
              </template>
            </v-data-table>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Fn from "../functions";

export default {
  name: "SignalDbmTable",
  data() {
    return {
      search_value: "",
      headers: [
        { text: "Percentage", value: "percent", class: "grey lighten-2" },
        // { text: "Form ID", value: "form_id", class: "grey lighten-2" },
        // { text: "Timestamp", value: "timestamp", class: "grey lighten-2" },
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
        // { text: "Floor", value: "floor", class: "grey lighten-2" },
        // { text: "Detail", value: "detail", class: "grey lighten-2" },
        { text: "SSID", value: "ssid", class: "grey lighten-2" },
        { text: "Mac Address", value: "mac_address", class: "grey lighten-2" },
        { text: "Chanel", value: "chanel", class: "grey lighten-2" },
        { text: "dbm", value: "dbm", class: "grey lighten-2" },
        // { text: "download_inside", value: "download_inside", class: "grey lighten-2" },
        // { text: "download_outside", value: "download_outside", class: "grey lighten-2" },
        // { text: "youtube_cspeed", value: "youtube_cspeed", class: "grey lighten-2" },
        // { text: "note", value: "note", class: "grey lighten-2" },
      ],
    };
  },
  computed: {
    ...mapState({
      dbm: (state) => state?.signal?.dbm,
    }),
    getColorPercent() {
      return Fn.getColorPercent;
    },
  },
  mounted() {
    // console.log(this.getColor2.getColor);
    console.log(this.dbm);
  },
  methods: {
    handleSelect(data) {
      console.log(data);
      let { building_code, form_id, mac_address } = data;
      this.$router.push({
        name: "Evaluation",
        params: {
          building_code: building_code,
          form_id: form_id,
          mac_address: mac_address,
        },
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
