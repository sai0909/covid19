<template>
  <v-row>
    <v-col cols="12">
      <geo-chart
        :data="[
          ['United States', 44],
          ['Germany', 23],
          ['Brazil', 22]
        ]"
        :download="{ background: '#000' }"
      ></geo-chart>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Charts",
  components: {},
  data: () => ({
    stats: "",
    isLoading: false
  }),
  methods: {
    fetchData: function() {
      // (JavaScript) fetch
      this.isLoading = true;
      fetch("https://covid-193.p.rapidapi.com/statistics", {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-193.p.rapidapi.com",
          "x-rapidapi-key": "3373e32af3msh61e6e6d153a68e5p1a446cjsn5396e3efe808"
        }
      })
        .then(async response => {
          const res = await response.json();
          this.stats = res.response;
          this.isLoading = false;
          console.log(this.stats);
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

<style></style>
