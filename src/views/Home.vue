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
      <div class="block-content">
          <span>This is Map For Data Analytics and Visualize</span>
      </div>
      <div class="block-button">
        <v-btn rounded color="primary" dark @click="handleVisualize">Get Started</v-btn>
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
      this.$router.push('/visualize');
      console.log('this is go to google map visualize');
    }
  },
};
</script>

<style scoped>
.home{
  height: 100vh;
    /* background-color: red; */
  background-image: linear-gradient(0deg, #ef7939, #ffffff);
}
.kmitl-logo {
  height: inherit;
}
.block-logo-header {
  display: inherit;
  justify-content: center;
  height: 20vh;
}
.block-content {
  display: inherit;
  justify-content: center;
  align-items: center;
  height: 64vh;
}
.block-button {
  display: inherit;
  justify-content: center;
}
.block-style {
  background-color: lemonchiffon;
  height: inherit;
  width: inherit;
}
</style>
