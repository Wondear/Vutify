<template>
  <nav>
    <v-toolbar>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Pyo SeMin</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-layout column align-center>
        <v-flex class="mt-4">
          <v-avatar size="100">
            <img src="../assets/logo.png" />
          </v-avatar>
          <p class="mt-5">PyoSeMIn</p>
        </v-flex>
      </v-layout>
      <v-list nav dense>
        <v-list-item-group v-bind="group">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.router">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon></v-list-item-icon
            >
            <v-list-item-contents>
              <v-list-item-title>{{
                item.text
              }}</v-list-item-title></v-list-item-contents
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      { icon: "mdi-domain", text: "Dashboard", router: "/" },
      { icon: "mdi-inbox", text: "My-project", router: "MyProject" },
      { icon: "mdi-account-multiple", text: "Team", router: "Team" },
      { icon: "mdi-school", text: "Education", router: "Educations" },
    ],
  }),
};
</script>
