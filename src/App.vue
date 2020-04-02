<template>
  <v-app>
    <v-app-bar app flat color="black" dark>
      <v-img
        max-height="40"
        max-width="40"
        contain
        :src="require('./assets/logo.png')"
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

<script>
import Dashboard from "./components/Dashboard";

export default {
  name: "App",

  components: {
    Dashboard
  },

  data: () => ({
    //
  })
};
</script>
