<template>
  <div>
    <v-row>
      <v-col>
        <v-card height="720px">
          <v-card-title>
            Cases by country
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            height="600px"
            dense
            :headers="headers"
            :items="cases"
            item-key="country"
            :search="search"
            hide-default-footer
            disable-pagination
            sort-by="cases"
            sort-desc
            @click:row="selectCountry"
          ></v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <v-row> </v-row>
  </div>
</template>
<script>
export default {
  name: "InfoTable",
  props: ["cases", "lastTableUpdate"],
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Country",
          align: "start",
          value: "country"
        },
        {
          text: "Total  Cases",
          value: "cases"
        }
      ]
    };
  },
  methods: {
    selectCountry(e) {
      this.$emit("select-country", e.country);
    }
  }
};
</script>
