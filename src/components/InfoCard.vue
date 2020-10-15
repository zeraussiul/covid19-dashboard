<template>
  <v-card>
    <v-card-title>
      {{ title }}
    </v-card-title>
    <v-card-text>&Delta; {{ change }}</v-card-text>
    <v-card-text>Total: {{ total }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "InfoCard",
  props: ["title", "change", "total"],
  data: () => {
    return {};
  }
};
</script>

<style scoped></style>
