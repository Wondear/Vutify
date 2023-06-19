<template>
  <v-app>
    <NavBar />
    <v-content>
      <router-view></router-view>
    </v-content>
    <FooterComp />
  </v-app>
</template>

<script>
import router from "./router";
import NavBar from "./components/NavBar.vue";
import FooterComp from "./components/FooterComp.vue";
export default {
  name: "App",
  data: () => ({
    //
  }),
  components: {
    router,
    NavBar,
    FooterComp,
  },
};
</script>
