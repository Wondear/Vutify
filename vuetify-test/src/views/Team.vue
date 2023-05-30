<template>
  <div class="team">
    <h1 class="subheading gray--text">Team</h1>
    <v-container>
      <v-row>
        <v-col
          v-for="member in team"
          :key="member.name"
          cols="12"
          sm="4"
          md="3"
        >
          <v-card class="text-center ma-3">
            <v-responsive class="pt-6 mb-10">
              <v-avatar size="100" style="background: bisque">
                <img :src="member.avatar" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div>{{ member.name }}</div>
              <div>{{ member.role }}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: "임규민",
          role: "Directer",
          avatar: require("../assets/logo.png"),
        },
        {
          name: "표세은",
          role: "Writer & QA",
          avatar: require("../assets/logo.png"),
        },
        {
          name: "김혜선",
          role: "UI Art",
          avatar: require("../assets/logo.png"),
        },
        {
          name: "공동혁",
          role: "Charactor Art",
          avatar: require("../assets/logo.png"),
        },
        {
          name: "김은수",
          role: "Sound",
          avatar: require("../assets/logo.png"),
        },
        {
          name: "표세민",
          role: "Programer",
          avatar: require("../assets/들국화무리.gif"),
        },
      ],
    };
  },
};
</script>
