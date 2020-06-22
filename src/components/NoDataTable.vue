<template>
  <div class="no-data-table">
    <v-container>
      <v-row>
        <v-col>
          <v-card class="elevation-6">
            <div class="block-no-data">
              <span class="text-center">
                <span class="font-weight-bold">{{ title }} : </span>
                <span>
                  <span>No Data of {{ contentType }}</span>
                  <span class="font-weight-medium">
                    {{ content }}
                  </span>
                </span>
              </span>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "NoDataTable",
  props: {
    title: {
      type: String,
      default: "title is not available",
    },
    contentType: {
      type: String,
      default: "content type is not available",
    },
    content: {
      type: String,
      default: "content is not available",
    },
  },
};
</script>

<style scoped>
.block-no-data {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  padding: 16px;
}
</style>
