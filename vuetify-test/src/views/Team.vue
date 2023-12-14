<template>
  <div class="team context">
    <h1 class="subheading gray--text">Team</h1>
    <v-container v-for="team in teams" :key="team.teamName">
      <v-row no-gutters wrap :class="pa - 3">
        <div
          class="v-row-title"
          :style="{ backgroundColor: team.teamColor }"
          style="border-radius: 10px; font-size: 20px"
        >
          <b> {{ team.teamName }}</b>
        </div>
      </v-row>
      <!-- 추가해야할 것, 어떤 프로젝트의 팀인지? 기존 설명창? 사용해서 가져오기-->
      <v-row>
        <v-col
          v-for="member in team.member"
          :key="member.name"
          cols="12"
          sm="4"
          md="4"
        >
          <v-card class="text-center ma-3">
            <v-responsive class="pt-6 mb-10">
              <v-avatar size="100" :style="{ background: team.teamColor }">
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
      <v-divider style="width: 100%; margin: 30px"></v-divider>
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
          teamColor: "rgb(255, 105, 105)",
          member: [
            {
              name: "표세은",
              role: "Story Writer & QA",
              avatar: require("../assets/icon/writer.png"),
            },
            {
              name: "김혜선",
              role: "UI Art",
              avatar: require("../assets/icon/artIllust.png"),
            },
            {
              name: "표세민",
              role: "Programer",
              avatar: require("../assets/icon/computer.png"),
              me: true,
            },
            {
              name: "공동혁",
              role: "Charactor Art",
              avatar: require("../assets/icon/artIllust.png"),
            },

            {
              name: "김은수",
              role: "Sound",
              avatar: require("../assets/icon/music.png"),
            },

            {
              name: "임규민",
              role: "Directer",
              avatar: require("../assets/icon/writer.png"),
            },
          ],
        },
        {
          teamName: "바우먀우",
          teamColor: " rgb(254, 205, 70)",
          member: [
            {
              name: "윤효연",
              role: "Back-End Programer",
              avatar: require("../assets/icon/computer.png"),
            },
            {
              name: "표세민",
              role: "Front-End Programer",
              avatar: require("../assets/icon/computer.png"),
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
  color: #fff;
  padding: 10px;
  width: 100vw;
}
</style>
