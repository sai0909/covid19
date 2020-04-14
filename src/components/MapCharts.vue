<template>
  <v-row>
    <v-col cols="12">
      <MapChart
        :countryData="mapData"
        highColor="#84142d"
        lowColor="#bb4f53ea"
        countryStrokeColor="#909090"
        defaultCountryFillColor="#f0f0f0"
        legendHeaderBackgroundColor="#000"
        legendContentBackgroundColor="#888"
      />
    </v-col>
  </v-row>
</template>

<script>
import MapChart from "vue-map-chart";
export default {
  name: "MapCharts",
  components: {
    MapChart
  },
  data: () => ({
    locations: "",
    isLoading: false,
    mapData: {}
  }),
  methods: {
    fetchData: function() {
      // (JavaScript) fetch
      this.isLoading = true;

      fetch("https://covid19-data.p.rapidapi.com/all", {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid19-data.p.rapidapi.com",
          "x-rapidapi-key": "3373e32af3msh61e6e6d153a68e5p1a446cjsn5396e3efe808"
        }
      })
        .then(async response => {
          const res = await response.json();

          const output = res.reduce(
            (acc, value) => ({ ...acc, [value.countrycode]: value.active }),
            {}
          );
          this.isLoading = false;
          this.mapData = output;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style>
.vue-world-map .land {
  fill: #f0f0f0;
  stroke: #585858;
}
.vue-map-legend {
  width: 100px;
  background: #121212;
  overflow: auto;
  border: 1px solid;
  position: absolute;
}
.vue-map-legend-header {
  padding: 5px 8px;
  background: #121212 !important;
}
.vue-map-legend-content {
  padding: 5px 8px;
  background: #121212 !important;
  border-top: 1px solid #131313 !important;
}
</style>
