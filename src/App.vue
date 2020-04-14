<template>
  <v-app>
    <v-app-bar app :color="darkHeader" dark>
      <v-img
        max-height="40"
        max-width="40"
        contain
        :src="require('./assets/logo.svg')"
      ></v-img>

      <v-toolbar-title class="ml-2">
        Covid-19
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <Dashboard />
    </v-content>
  </v-app>
</template>
<style>
div#chart-1 svg rect {
  fill: #121212 !important;
}
</style>
<script>
import Dashboard from "./components/Dashboard";

export default {
  name: "App",

  components: {
    Dashboard
  },

  data: () => ({
    darkHeader: "#212121"
  })
};
</script>
