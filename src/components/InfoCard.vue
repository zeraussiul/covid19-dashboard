<template>
  <v-card>
    <v-card-title>
      {{ title }}
    </v-card-title>
    <v-card-text>&Delta; {{ change.toLocaleString() }}</v-card-text>
    <v-card-text>Total: {{ total.toLocaleString() }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "InfoCard",
  props: {
    title: {
      default: ""
    },
    total: {
      default: ""
    },
    change: {
      default: ""
    }
  }
};
</script>
