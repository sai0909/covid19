<template>
  <v-container>
    <Global></Global>
    <Charts></Charts>
  </v-container>
</template>

<script>
import Global from "./Global";
import Charts from "./Charts";
export default {
  name: "Dashboard",
  components: {
    Global,
    Charts
  },

  data: () => ({})
};
</script>
