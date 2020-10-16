<template>
  <div class="info-cards">
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <InfoCard
          title="Cases"
          :change="stats.todayCases"
          :total="stats.cases"
        />
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <InfoCard
          title="Recovered"
          :change="stats.todayRecovered"
          :total="stats.recovered"
        />
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <InfoCard
          title="Deaths"
          :change="stats.todayDeaths"
          :total="stats.deaths"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import InfoCard from "@/components/InfoCard";

export default {
  name: "InfoCards",
  components: { InfoCard },
  props: ["stats"],
  data: () => ({})
};
</script>
