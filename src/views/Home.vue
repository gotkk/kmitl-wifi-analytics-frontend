<template>
  <div class="home">
    <div class="block-screen">
      <v-container>
        <v-row>
          <v-col cols="12" sm="8" offset-sm="2" md="6" offset-md="3">
            <div class="d-flex flex-column justify-space-around align-center">
              <div class="d-flex justify-center block-logo-header">
                <img
                  alt="KMITL logo"
                  src="../assets/kmitl_logo.png"
                  class="kmitl-logo"
                />
              </div>
              <div class="block-chart">
                <canvas ref="myChart"></canvas>
              </div>
              <span class="text-center mt-5 mb-5">
                The web application about analytics and visualize of KMITL WiFi
              </span>
              <div class="btn-start" @click="handleVisualize">
                <span>GET STARTED</span>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Chart from "chart.js";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      horizontal: false,
    };
  },
  mounted() {
    this.initialChart();
  },
  methods: {
    handleVisualize() {
      this.$router.push("/visualize");
    },
    initialChart() {
      let el = this.$refs.myChart;
      new Chart(el, {
        type: "bar",
        // type: "horizontalBar",
        data: {
          labels: ["Max", "Average", "Min"],
          datasets: [
            {
              label: "KMITL All WiFi",
              data: [92.454548, 61.3645, 36.1234],
              borderColor: "#000000",
              borderWidth: 2,
              backgroundColor: "rgba(234,125,58, 0.8)",
              fill: true,
              minBarLength: 0.8,
            },
          ],
        },
        options: {
          responsive: true,
          onClick: this.handleClick,
        },
      });
    },
    handleClick(c, i) {
      let e = i[0];
      console.log(e._index);
      var x_value = this.data.labels[e._index];
      var y_value = this.data.datasets[0].data[e._index];
      console.log(x_value);
      console.log(y_value);
    },
  },
};
</script>

<style scoped src="../css/home.css"></style>
