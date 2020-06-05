<template>
  <div class="test-map">
    <div ref="map" class="google-map-style">
      <span>Load Google Map failed!!</span>
    </div>
  </div>
</template>

<script>
import GoogleMapAPI from '../utils/GoogleMapAPI';
export default {
  name: "TestMap",
  mounted() {
      this.initialMap();
  },
  methods: {
    initialMap() {
      GoogleMapAPI().then((google) => {
        new google.maps.Map(this.$refs.map, {
          zoom: 5,
          center: { lat: 13, lng: 102 }
          // mapTypeId: 'terrain'
        });
      });
    }
  }
};
</script>

<style scoped>
.google-map-style{
    width: 80vw;
    height: 70vh;
}
</style>