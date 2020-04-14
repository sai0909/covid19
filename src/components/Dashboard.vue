<template>
  <v-container>
    <Global></Global>
    <MapCharts></MapCharts>
  </v-container>
</template>

<script>
import Global from "./Global";
import MapCharts from "./MapCharts";
export default {
  name: "Dashboard",
  components: {
    Global,
    MapCharts
  },

  data: () => ({})
};
</script>
