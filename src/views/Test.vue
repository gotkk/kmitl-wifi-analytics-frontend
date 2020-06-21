<template>
  <div class="test">
    <v-container>
      <!-- <v-row>
        <v-col cols="12" md="6">
          <div class="block-col-img-menu">
            <div class="block-img-menu">
              <div class="block-diamond1">
                <div class="diamond"></div>
                 <v-icon size="60">mdi-wifi</v-icon>
              </div>
              <div class="block-diamond2">
                <div class="diamond"></div>
              </div>
              <div class="block-diamond3">
                <div class="diamond"></div>
              </div>
              <div class="block-diamond4">
                <div class="diamond"></div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row> -->
      <v-row>
        <v-col cols="12" md="12">
          <div class="block-content">
            <img
              alt="KMITL logo"
              src="../assets/kmitl_logo.png"
              class="kmitl-logo"
            />
            <p class="text-center">
              The web application about analytics and visualize of KMITL WiFi
            </p>
            <div class="btn-start" @click="handleVisualize">
              <span>GET STARTED</span>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" v-if="1 === 2">
          <div class="block-menu-img-header">
            <span>KMITL WiFi</span>
          </div>
          <div class="block-menu-img">
            <!-- <v-icon size="60">mdi-access-point-network</v-icon>
              <v-icon size="60">mdi-signal-variant</v-icon>
              <v-icon size="60">mdi-wifi</v-icon>
              <v-icon size="60">mdi-memory</v-icon>
              <v-icon size="60">mdi-server-network</v-icon>
              <v-icon size="60">mdi-chart-areaspline</v-icon>
              <v-icon size="60">mdi-chart-bar-stacked</v-icon>
              <v-icon size="60">mdi-map</v-icon> -->
            <div class="block-row">
              <div class="block-col">
                <v-icon size="100">mdi-access-point-network</v-icon>
              </div>
              <div class="block-col">
                <v-icon size="100">mdi-wifi</v-icon>
              </div>
            </div>
            <div class="block-row">
              <div class="block-col">
                <v-icon size="100">mdi-server-network</v-icon>
              </div>
              <div class="block-col">
                <v-icon size="100">mdi-map</v-icon>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-progress-linear :value="percent" height="40" color="#FFEE58">
            <strong>{{ Math.round(percent * 100) / 100 }}%</strong>
          </v-progress-linear>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      percent: 43.12794
    }
  },
  methods: {
    handleVisualize() {
      this.$router.push("/visualize");
    },
  },
  mounted() {
    console.log(this.$route.params?.building_code);
  },
};
</script>

<style scoped>
.test {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, rgb(255, 0, 0), rgba(0, 0, 0, 0)),
    linear-gradient(315deg, rgb(0, 255, 0), rgba(0, 0, 0, 0)),
    linear-gradient(180deg, rgb(0, 0, 255), rgba(0, 0, 0, 0));
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
}
.btn-start:hover {
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  color: #ffffff;
}
.kmitl-logo {
  height: 20vh;
}
.block-row {
  display: flex;
  height: 50%;
  width: 100%;
  /* background-color: red; */
}
.block-col {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  /* background-color: blue; */
  /* background-color: rgba(255, 255, 255, 0.1); */
}
/* .block-col:hover {
  background-color: rgba(0, 0, 0, 0.3);
  border-width: 2px;
  border-style: solid;
  border-radius: 16px;
  cursor: pointer;
} */
.block-content {
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: space-around;
  align-items: center;
}
.block-menu-img-header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
}
.block-menu-img {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70vh;
  margin-bottom: 10vh;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.1);
  /* background-color: rgba(255, 255, 255, 0.3); */
}

.block-diamond1 {
  width: 100px;
  height: 100px;
  position: absolute;
  margin-top: 100px;
}
.block-diamond2 {
  width: 100px;
  height: 100px;
  position: absolute;
  margin-left: 100px;
}
.block-diamond3 {
  width: 100px;
  height: 100px;
  position: absolute;
  margin-top: 100px;
  margin-left: 200px;
}
.block-diamond4 {
  width: 100px;
  height: 100px;
  position: absolute;
  margin-top: 200px;
  margin-left: 100px;
}
.diamond {
  width: 100px;
  height: 100px;
  background-color: cyan;
  transform: rotate(45deg);
  top: 20px;
}
.block-img-menu {
  display: flex;
  background-color: blanchedalmond;
  width: 60vh;
  height: 60vh;
}
.block-col-img-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh;
  background-color: coral;
}
</style>
