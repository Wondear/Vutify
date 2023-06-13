<template>
  <div class="team">
    <h1 class="subheading gray--text">Team</h1>
    <v-container v-for="team in teams">
      <v-row no-gutters wrap :class="pa - 3">
        <div class="v-row-title">{{ team.teamName }}</div>
      </v-row>
      <v-row>
        <v-col
          v-for="member in team.member"
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
      teams: [
        {
          teamName: "라즈베리토마토",
          member: [
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
              me: true,
            },
          ],
        },
        {
          teamName: "바우먀우",
          member: [
            {
              name: "윤효연",
              role: "Programer",
              avatar: require("../assets/logo.png"),
            },
            {
              name: "표세민",
              role: "Programer",
              avatar: require("../assets/logo.png"),
              me: true,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
.v-row-title {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #110f34;
  color: #fff;
  padding: 10px;
  width: 100vw;
}

.v-col-content {
  /* 두 번째 줄 콘텐츠 스타일링 */
}
</style>
