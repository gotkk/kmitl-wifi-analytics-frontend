<template>
  <div>
    <FormTable v-if="loaded && form.length > 0" key="if_form" />
    <v-container v-else-if="loaded" key="if_form">
      <v-row>
        <v-col>
          <v-card class="elevation-5">
            <div class="block-no-data">
              <span class="text-center">
                <span class="font-weight-bold">Form Data Collection : </span>
                <span>
                  No Data of the building code
                  <span class="font-weight-medium">{{ this.building_code }}</span>
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
import FormTable from "../components/FormTable";
export default {
  name: "BuildingData",
  components: {
    FormTable,
  },
  data() {
    return {
      building_code: "",
      loaded: false,
      form: [],
    };
  },
  mounted() {
    this.building_code = this.$router.history.current.params.building_code;
    this.$store
      .dispatch("getFormData", this.building_code)
      .then((res) => {
        this.loaded = true;
        this.form = [...res];
      })
      .catch((err) => {
        console.log(err.message);
      });
  },
  methods: {},
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
