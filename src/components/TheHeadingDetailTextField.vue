<template>
  <div class="the-heading-detail-text-field">
    <span class="text-title">{{ label }}</span>
    <div class="block-text-field block-ellipsis" @click="handleSelect">
      <span v-if="percent" key="if-percent"
        >{{ Math.round(value * 100) / 100 }} %</span
      >
      <span v-else-if="value" key="if-percent">{{ value }}</span>
      <span v-else key="if-percent"> - </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeadingDetailTextField",
  props: {
    label: {
      type: String,
      default: "label is not available",
    },
    value: {
      type: [String, Number],
      default: "value is not available",
    },
    percent: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleSelect() {
      // let filter_value = Math.round(this.value*100)/100
      // console.log(filter_value);
    },
  },
};
</script>

<style scoped>
/* @import '../assets/test.css'; */

.block-text-field {
  width: 100%;
  height: 50px;
  border-style: solid;
  /* border-color: greenyellow; */
  border-width: 2px;
  border-radius: 4px;
  padding: 12px;
}
.block-text-field:hover {
  /* background-color: aqua; */
  box-shadow: 0 0 9px rgb(194, 194, 194);
}
.text-title {
  font-size: 14px;
}
</style>
