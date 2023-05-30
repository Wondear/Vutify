<template>
  <div>
    <h1 class="subheading gray--text">Dashboard</h1>
    <v-main>
      <v-container>
        <!--정렬버튼-->
        <v-row class="mb-3 ml-2">
          <v-btn small plain @click="sortBy('title')"
            ><span> by project title</span></v-btn
          >
          <v-btn small plain @click="sortBy('person')">
            <span>by person</span></v-btn
          >
        </v-row>

        <v-card
          v-for="project in projects"
          :key="project.title"
          falt
          class="gart lighten-4"
        >
          <v-row no-gutters wrap :class="`pa-3 project ${project.state}`">
            <v-col cols="12" md="5">
              <div class="caption gray--text">Project Title</div>
              <div>{{ project.title }}</div>
            </v-col>
            <v-col cols="4" sm="4" md="2">
              <div class="caption gray--text">Person</div>
              <div>{{ project.person }}</div></v-col
            >
            <v-col cols="8" sm="5" md="2">
              <div class="caption gray--text">Due</div>
              <div>{{ project.due }}</div></v-col
            >
            <v-col cols="4" sm="3" md="1" class="pl-4">
              <div class="caption gray--text">State</div>
              <div :class="`${project.state} state`">
                {{ project.state }}
              </div></v-col
            >
            <v-col></v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "시각장애인용 버스 알림 서비스",
          person: "Team 'IN&OUT'",
          due: "2022.5.11. - 2022.11.30",
          state: "complete",
        },
        {
          title: "빅데이터 기반 상권분석 시스템",
          person: "Team '천재표유리'",
          due: "2023.04.16. - 2023.11.15.",
          state: "ongoing",
        },
        {
          title: "IOT서비스 이용한 도어락",
          person: "PyoSeMin",
          due: "2022.05. - 2022.06.",
          state: "complete",
        },
        {
          title: "자료구조를 이용한 스마트팜",
          person: "PyoSeMin",
          due: "2023.05. - 2023.06.",
          state: "complete",
        },
        {
          title: "Vue를 이용한 포트폴리오 제작",
          person: "PyoSeMin",
          due: "2023.05.25 - ",
          state: "ongoing",
        },
        {
          title: "텍스트RPG게임 ‘소그난도’",
          person: "Team '라즈베리토마토' ",
          due: "2022.08. - ",
          state: "ongoing",
        },
        {
          title: "퍼즐협동게임 ‘소명’",
          person: "Team '바우먀우'",
          due: "2023.04. - ",
          state: "ongoing",
        },
      ],
    };
  },
  methods: {
    sortBy(prop) {
      const sortedArray = [...this.projects];

      sortedArray.sort((a, b) => {
        return a[prop].localeCompare(b[prop]);
      });
      this.projects = sortedArray;
    },
  },
};
</script>

<style>
.project.complete {
  border-left: 4px solid skyblue;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.state.complete {
  color: skyblue;
}
.state.ongoing {
  color: orange;
}
</style>
