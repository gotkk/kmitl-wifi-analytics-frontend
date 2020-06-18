<template>
  <div>
      <span>Building Code : </span>
    <span>{{name}}</span>
  </div>
</template>

<script>
export default {
  name: "BuildingData",
  data() {
    return {
      name: "null"
    };
  },
  mounted() {
      this.name = this.$router.history.current.params.building_code;
  }
};
</script>

<style scoped>
</style>