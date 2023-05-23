<template>
  <v-app>
    <NavBar />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import router from "./router";
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  data: () => ({
    //
  }),
  components: {
    router,
    NavBar,
  },
};
</script>
