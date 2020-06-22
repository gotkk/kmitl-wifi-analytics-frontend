<template>
  <div class="building-detail-text-field">
    <span class="text-title">{{label}}</span>
    <div class="block-text-field">
      <span>{{value}}</span>
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
