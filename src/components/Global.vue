<template>
  <v-row>
    <v-col cols="12" sm="6" md="3">
      <v-skeleton-loader
        v-if="isLoading"
        class="mx-auto"
        type="list-item-avatar-three-line"
      ></v-skeleton-loader>
      <v-card class="mx-auto" v-else>
        <v-card-text>
          <v-list-item class="grow">
            <v-list-item-content>
              <v-list-item-title><h3>Infected</h3></v-list-item-title>
              <h3 class="mt-3">{{ stats.cases.total }}</h3>
            </v-list-item-content>
            <v-list-item-avatar color="grey darken-3">
              <v-img
                class="elevation-6"
                src="https://image.flaticon.com/icons/svg/1256/1256650.svg"
              ></v-img>
            </v-list-item-avatar>
          </v-list-item>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="3">
      <v-skeleton-loader
        v-if="isLoading"
        class="mx-auto"
        type="list-item-avatar-three-line"
      ></v-skeleton-loader>
      <v-card class="mx-auto" v-else>
        <v-card-text>
          <v-list-item class="grow">
            <v-list-item-content>
              <v-list-item-title><h3>Active</h3></v-list-item-title>
              <h3 class="mt-3">{{ stats.cases.active }}</h3>
            </v-list-item-content>
            <v-list-item-avatar color="grey darken-3">
              <v-img
                class="elevation-6"
                src="https://image.flaticon.com/icons/svg/2741/2741121.svg"
              ></v-img>
            </v-list-item-avatar>
          </v-list-item>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="3">
      <v-skeleton-loader
        v-if="isLoading"
        class="mx-auto"
        type="list-item-avatar-three-line"
      ></v-skeleton-loader>
      <v-card class="mx-auto" v-else>
        <v-card-text>
          <v-list-item class="grow">
            <v-list-item-content>
              <v-list-item-title><h3>Recovered</h3></v-list-item-title>
              <h3 class="mt-3">{{ stats.cases.recovered }}</h3>
            </v-list-item-content>
            <v-list-item-avatar color="grey darken-3">
              <v-img
                class="elevation-6"
                src="https://image.flaticon.com/icons/svg/1513/1513378.svg"
              ></v-img>
            </v-list-item-avatar>
          </v-list-item>
        </v-card-text> </v-card
    ></v-col>
    <v-col cols="12" sm="6" md="3">
      <v-skeleton-loader
        v-if="isLoading"
        class="mx-auto"
        type="list-item-avatar-three-line"
      ></v-skeleton-loader>
      <v-card class="mx-auto" v-else>
        <v-card-text>
          <v-list-item class="grow">
            <v-list-item-content>
              <v-list-item-title><h3>Deaths</h3></v-list-item-title>
              <h3 class="mt-3">{{ stats.deaths.total }}</h3>
            </v-list-item-content>
            <v-list-item-avatar color="grey darken-3">
              <v-img
                class="elevation-6"
                src="https://image.flaticon.com/icons/svg/2641/2641036.svg"
              ></v-img>
            </v-list-item-avatar>
          </v-list-item>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Global",
  data: () => ({
    stats: "",
    isLoading: false
  }),
  methods: {
    fetchData: function() {
      // (JavaScript) fetch
      this.isLoading = true;
      fetch("https://covid-193.p.rapidapi.com/statistics?country=All", {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-193.p.rapidapi.com",
          "x-rapidapi-key": "3373e32af3msh61e6e6d153a68e5p1a446cjsn5396e3efe808"
        }
      })
        .then(async response => {
          const res = await response.json();
          this.stats = res.response[0];
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
