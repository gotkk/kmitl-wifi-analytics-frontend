<template>
  <div class="the-full-screen-overlay-loading">
    <v-overlay :value="true">
      <v-row>
        <v-col>
          <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <span>Loading...</span>
        </v-col>
      </v-row>
    </v-overlay>
  </div>
</template>

<script>
export default {
  name: "TheFullScreenOverlayLoading",
};
</script>

<style scoped></style>
