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

<style scoped>
.home {
  /* height: 100vh; */
  /* background-color: #ef7939; */
  /* background:  
    linear-gradient(45deg, hsla(352, 96%, 45%, 1) 0%, hsla(352, 96%, 45%, 0) 70%),
    linear-gradient(135deg, hsla(253, 95%, 42%, 1) 10%, hsla(253, 95%, 42%, 0) 80%),
    linear-gradient(225deg, hsla(179, 91%, 45%, 1) 10%, hsla(179, 91%, 45%, 0) 80%),
    linear-gradient(315deg, hsla(119, 96%, 49%, 1) 100%, hsla(119, 96%, 49%, 0) 70%); */
  /* background: linear-gradient(45deg, rgb(255, 0, 0), rgba(0, 0, 0, 0)),
    linear-gradient(315deg, rgb(0, 255, 0), rgba(0, 0, 0, 0)),
    linear-gradient(180deg, rgb(0, 0, 255), rgba(0, 0, 0, 0)); */
}
.block-logo-header {
  height: 16vh;
  margin-top: 1vh;
}
.kmitl-logo {
  height: inherit;
}
.block-chart {
  width: 100%;
  margin-top: 5vh;
  margin-bottom: 5vh;
}
.btn-start {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 40px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #000000;
  margin-top: 2vh;
  margin-bottom: 2vh;
}
.btn-start:hover {
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  color: #ffffff;
}

.block-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  background-color: rgba(255, 255, 255, 0.24);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
  border-radius: 16px;
}
.block-button {
  display: inherit;
  justify-content: center;
}
</style>
