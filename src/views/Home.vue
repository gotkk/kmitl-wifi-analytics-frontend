<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col cols="12" class="d-flex justify-center">
          <img alt="Vue logo" src="../assets/logo.png" />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex justify-center">
          <TestMap />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import TestMap from "../components/TestMap";

export default {
  name: "Home",
  components: {
    TestMap
  }
};
</script>
