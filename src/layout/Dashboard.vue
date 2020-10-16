<template>
  <div id="inspire">
    <v-app-bar app flat hide-on-scroll>
      <v-btn icon>
        <v-icon color="secondary">mdi-virus-outline</v-icon>
      </v-btn>

      <v-toolbar-title
        >Covid Stats |
        <span class="secondary--text" v-on:select-country="setCountry">
          {{ selectedCountry }}
        </span>
      </v-toolbar-title>

      <v-spacer />

      <v-btn color="secondary" icon @click="changeTheme">
        <v-icon v-if="lightMode">mdi-brightness-2</v-icon>
        <v-icon v-else color>mdi-brightness-5</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fill-height>
        <v-row>
          <v-col cols="12" sm="4" order="last" order-sm="first">
            <InfoTable :cases="countriesCases" />
          </v-col>
          <v-col cols="12" sm="8" order="first" order-sm="last">
            <InfoCards :stats="globalStats" />
            <InfoGraph />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <!--      Footer-->
    <v-card>
      <v-footer class="font-weight-medium">
        <v-col class="text-center" cols="12">
          &copy;
          {{ new Date().getFullYear() }} — <strong>WIP</strong>
        </v-col>
      </v-footer>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import InfoCards from "@/components/InfoCards";
import InfoGraph from "@/components/InfoGraph";
import InfoTable from "@/components/InfoTable";

export default {
  name: "Dashboard",
  components: { InfoGraph, InfoTable, InfoCards },
  data: () => ({
    drawer: false,
    lightMode: false,
    allInfo: null,
    defaultDays: 15,
    selectedCountry: "Global",
    countriesCases: [],
    globalStats: {},
    historicalData: [],
    globalHistoricalData: [],
    lastTableUpdate: null
  }),
  mounted() {
    this.getCountriesData();
    // this.getHistoricalData();
    this.getGlobalData();
    this.getGlobalHistoricalData();
  },
  methods: {
    changeTheme() {
      this.lightMode = !this.lightMode;
      this.$vuetify.theme.dark = !this.lightMode;
    },
    // InfoTable data, retrieving countries and total cases.
    getCountriesData() {
      axios
        .get("https://disease.sh/v3/covid-19/countries")
        .then(data => {
          this.allInfo = data;
        })
        .then(() => {
          this.populateTable();
        })
        .catch(err => console.error(err));
    },
    populateTable() {
      this.countriesCases = this.allInfo.data.map(data => ({
        country: data.country,
        cases: data.cases
      }));
    },

    getGlobalData() {
      axios
        .get("https://disease.sh/v3/covid-19/all?yesterday=true")
        .then(data => {
          this.globalStats = data.data;
        })
        .catch(err => {
          console.error(err);
        });
    },

    // InfoGraph data, historical data for global
    getGlobalHistoricalData(days = this.defaultDays) {
      axios
        .get(`https://disease.sh/v3/covid-19/historical/all?lastdays=${days}`)
        .then(data => {
          this.globalHistoricalData = data.data;
        })
        .catch(err => console.error(err));
    },
    // Historical data for ALL countries, to be implemented.
    // getHistoricalData(days = this.defaultDays) {
    //   axios
    //     .get(`https://disease.sh/v3/covid-19/historical?lastdays=${days}`)
    //     .then(data => {
    //       this.historicalData = data.data;
    //     })
    //     .then(() => {})
    //     .catch(err => console.error(err));
    // },

    setCountry(country) {
      console.log(country);
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
