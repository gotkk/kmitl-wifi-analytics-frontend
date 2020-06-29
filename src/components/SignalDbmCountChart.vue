<template>
  <div class="signal-dbm-count-chart">
    <v-container>
      <v-card class="elevation-6 pl-6 pt-6 pr-6 pb-6">
        <v-row>
          <v-col>
            <div class="d-flex justify-center">
              <span>KMITL WiFi Channel Counter</span>
            </div>
            <div class="block-chart">
              <canvas ref="signalCountChart"></canvas>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import Chart from "chart.js";
export default {
  name: "SignalDbmCountChart",
  data() {
    return {
      channel: [],
      count: [],
    };
  },
  mounted() {
    this.mapChannelCounterData();
  },
  props: {
    chCounter: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    initialSignalCount() {
      let el = this.$refs.signalCountChart;
      new Chart(el, {
        type: "bar",
        data: {
          labels: [...this.channel],
          datasets: [
            {
              label: "WiFi Channel",
              data: [...this.count],
              borderColor: "#000000",
              borderWidth: 2,
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
        },
      });
    },
    mapChannelCounterData() {
      for (let i = 0, arri = this.chCounter.length; i < arri; ++i) {
        this.channel = [...this.channel, this.chCounter[i].channel];
        this.count = [...this.count, this.chCounter[i].ssid_count];
      }
      this.initialSignalCount();
    },
  },
};
</script>

<style scoped>
.block-chart {
  width: 100%;
}
</style>
