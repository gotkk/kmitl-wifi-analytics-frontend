<template>
  <div class="home">
    <div class="d-flex flex-column justify-center">
      <div class="block-logo-header mt-5">
        <img
          alt="KMITL logo"
          src="../assets/kmitl_logo.png"
          class="kmitl-logo"
        />
      </div>
      <v-container>
        <v-row>
          <v-col>
            <div class="block-content">
              <span>
                The web application about analytics and visualize of KMITL WiFi
              </span>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <div class="block-button">
        <div class="btn-start" @click="handleVisualize">
          <span>GET STARTED</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: {},
  methods: {
    handleVisualize() {
      this.$router.push("/visualize");
    },
  },
};
</script>

<style scoped>
.home {
  height: 100vh;
  /* background-color: #ef7939; */
  /* background:  
    linear-gradient(45deg, hsla(352, 96%, 45%, 1) 0%, hsla(352, 96%, 45%, 0) 70%),
    linear-gradient(135deg, hsla(253, 95%, 42%, 1) 10%, hsla(253, 95%, 42%, 0) 80%),
    linear-gradient(225deg, hsla(179, 91%, 45%, 1) 10%, hsla(179, 91%, 45%, 0) 80%),
    linear-gradient(315deg, hsla(119, 96%, 49%, 1) 100%, hsla(119, 96%, 49%, 0) 70%); */
  background: linear-gradient(45deg, rgb(255, 0, 0), rgba(0, 0, 0, 0)),
    linear-gradient(315deg, rgb(0, 255, 0), rgba(0, 0, 0, 0)),
    linear-gradient(180deg, rgb(0, 0, 255), rgba(0, 0, 0, 0));
}
.kmitl-logo {
  height: inherit;
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
.block-logo-header {
  display: flex;
  justify-content: center;
  height: 20vh;
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
