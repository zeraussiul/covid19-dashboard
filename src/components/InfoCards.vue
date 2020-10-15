<template>
  <div class="info-cards">
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <InfoCard title="Cases" change="23455" total="34345346" />
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <InfoCard title="Recovered" change="23455" total="34345346" />
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <InfoCard title="Deaths" change="23455" total="34345346" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import InfoCard from "@/components/InfoCard";

// const stats = {
//   country: "Global",
//   caseType: "cases",
//   change: 3156745,
//   total: 6354512346
// };

export default {
  name: "InfoCards",
  components: { InfoCard },
  props: ["stats"],
  data: () => ({
    // TODO
  })
};
</script>
