<template>
  <nav>
    <v-toolbar>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Pyo SeMin</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn :to="items[0].router">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn :to="items[1].router">
        <v-icon>mdi-account-multiple</v-icon>
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
            <v-list-item-content>
              <v-list-item-title>{{
                item.text
              }}</v-list-item-title></v-list-item-content
            >
          </v-list-item>

          <v-list-item>
            <v-list nav dense>
              <v-list-group>
                <template v-slot:activator>
                  <v-list-item-icon>
                    <v-icon>{{ projectsBtn.icon }}</v-icon></v-list-item-icon
                  >
                  <v-list-item-content>
                    <v-list-item-title>{{
                      projectsBtn.text
                    }}</v-list-item-title></v-list-item-content
                  >
                </template>

                <v-list-item
                  v-for="(subItem, j) in projectsBtn.detail"
                  :to="subItem.router"
                >
                  <v-list-item-content>
                    <v-list-item-title> {{ subItem.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
            </v-list>
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
      { icon: "mdi-domain", text: "Main", router: "/" },
      { icon: "mdi-account-multiple", text: "Team", router: "Team" },
    ],
    projectsBtn: {
      icon: "mdi-inbox",
      text: "My-project",
      detail: [
        { title: "학교 프로젝트", router: "School" },
        { title: "시각장애인용 BeeBus", router: "Bus" },
        { title: "빅데이터 상권 분석", router: "Stores" },
        { title: "텍스트 RPG 소그난도", router: "Sognando" },
        { title: "퍼즐 협력게임 소명", router: "Calling" },
      ],
    },
  }),
};
</script>
<style>
footer {
  background-color: #f2f2f2;
  padding: 20px;
  text-align: center;
}

footer p {
  font-size: 14px;
  color: #888;
}
</style>
