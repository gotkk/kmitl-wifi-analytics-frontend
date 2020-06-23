<template>
  <div class="building-detail-text-field">
    <span class="text-title">{{label}}</span>
    <div class="block-text-field">
      <span v-if="percent" key="if_percent">{{Math.round(value * 100) / 100}} %</span>
      <span v-else key="if_percent">{{value}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BuildingDetailTextField",
  props: {
      label: {
          type: String,
          default: "label is not available"
      },
      value: {
          type: [String, Number],
          default: "value is not available"
      },
      percent: {
        type: Boolean,
        default: false
      }
  },
};
</script>

<style scoped>
.block-text-field {
  width: 100%;
  height: 50px;
  border-style: solid;
  /* border-color: greenyellow; */
  border-width: 2px;
  border-radius: 4px;
  padding: 12px;
}
.text-title{
  font-size: 14px;
}
</style>
