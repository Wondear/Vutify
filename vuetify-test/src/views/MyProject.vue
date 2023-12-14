<template>
  <div>
    <v-main style="margin-top: 20px">
      <v-container>
        <!--정렬버튼-->
        <v-row class="mb-3 ml-2" style="align-items: right" justify="end">
          <v-btn small plain @click="sortBy('title')"
            ><span> by project title</span></v-btn
          >
          <v-btn small plain @click="sortBy('person')">
            <span>by person</span></v-btn
          >
          <v-btn icon @click="GotoDetail()"
            ><v-icon>mdi-help-circle-outline</v-icon></v-btn
          >
        </v-row>

        <v-card
          v-for="project in projects"
          :key="project.title"
          falt
          class="gart lighten-4"
        >
          <v-row
            no-gutters
            wrap
            :class="[
              'pa-3',
              'project',
              project.state,
              { hovered: hoveredProject === project },
            ]"
            @click="GotoDetail(project.detail)"
            @mouseover="hoveredProject = project"
            @mouseout="hoveredProject = null"
          >
            <v-col cols="12" md="5">
              <div class="caption gray--text">Project Title</div>
              <div>{{ project.title }}</div>
            </v-col>
            <v-col cols="4" sm="4" md="2">
              <div class="caption gray--text">Person</div>
              <div>{{ project.person }}</div></v-col
            >
            <v-col cols="8" sm="5" md="3">
              <div class="caption gray--text">Due</div>
              <div>{{ project.due }}</div></v-col
            >
            <v-col cols="4" sm="3" md="2" class="pl-4">
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

    <v-overlay v-model="isModalOpen">
      <div
        class="modal-background"
        :absolute="true"
        @click="closeModalOutside"
      ></div>
      <v-card max-width="700px" class="context" @click.stop>
        <v-card-title class="modaltitle">{{ modalData.title }}</v-card-title>
        <v-img
          :src="modalData.thumnail"
          :style="getImageStyle"
          style="background-color: white"
        />
        <v-card-text
          style="color: white; white-space: pre-line"
          v-html="modalData.description"
        ></v-card-text>
        <v-card-actions>
          <v-btn v-if="modalData.router" :to="modalData.router">상세화면</v-btn>
          <v-btn @click="closeModal">닫기</v-btn>
        </v-card-actions>
      </v-card>
    </v-overlay>
  </div>
</template>

<script>
import router from "@/router";

export default {
  data() {
    return {
      isModalOpen: false,
      modalData: { title: "", description: "", thumnail: "", router: "" },
      hoveredProject: null,
      //추가할 거 -> router (상세페이지)가 있는 프로젝트들의 설명문
      // + 상세페이지로 이동가능한 토스트창 만들기
      projects: [
        {
          title: "시각장애인용 버스 알림 'BeeBus'",
          person: "Team 'IN&OUT'",
          due: "2022.5.11. - 2022.11.30.",
          state: "complete",
          detail: 3,
        },
        {
          title: "빅데이터 기반 상권분석 시스템",
          person: "Team '천재표유리'",
          due: "2023.04.16. - 2023.11.15.",
          state: "complete",
          detail: 4,
        },
        {
          title: "IOT서비스 이용한 도어락",
          person: "PyoSeMin",
          due: "2022.05. - 2022.06.",
          state: "complete",
          detail: 0,
        },
        {
          title: "React로 만드는 미니블로그",
          person: "PyoSeMin",
          due: "2023.05. - 2023.06.",
          state: "complete",
          detail: 0,
        },
        {
          title: "Vue를 이용한 포트폴리오 제작",
          person: "PyoSeMin",
          due: "2023.05.25 - ",
          state: "ongoing",
          detail: 0,
        },
        {
          title: "텍스트RPG게임 ‘소그난도’",
          person: "Team '라즈베리토마토' ",
          due: "2022.08. - ",
          state: "ongoing",
          detail: 1,
        },
        {
          title: "퍼즐협동게임 ‘소명’",
          person: "Team '바우먀우'",
          due: "2023.04. - ",
          state: "ongoing",
          detail: 2,
        },
      ],
      projectDetail: [
        {
          name: "학교 프로젝트",
          context:
            "신라대학교 재학 과정에서 진행한 프로젝트 일부를 모아놓았습니다.C, JAVA, JS, Vue 등을 이용한 개발로 학업역량을 키웠습니다.",
          thumnail: require("../assets/thumnail/SchoolLogo.png"),
          router: "School",
        },
        {
          name: "소그난도",
          context:
            "음악을 이용해 신비한 마법을 부리는 인형 '오데트'와 함께 지하에 잠들어있는 신들의 비밀을 파해치는 텍스트기반 RPG '소그난도'입니다. 몽환적인 스토리와 음악을 프로젝트 내부에서 직접 제작하여 분위기를 살리는 동시에 독창성을 늘렸습니다.",
          thumnail: require("../assets/thumnail/Sognando2.png"),
          router: "Sognando",
        },
        {
          name: "소명",
          context:
            "개발자 2인으로 이루어진 팀 '바우먀우'에서 Unity기반으로 제작중인 협동 퍼즐게임 소명입니다. 한국 전통 분위기에 플랫포머를 접목시킨 게임으로, 개발 전 과정에 참여해 기획과 스토리텔링등의 역량을 추가로 키울 수 있도록 했습니다.",
          thumnail: require("../assets/thumnail/UnityThumnail.png"),
          router: "Calling",
        },
        {
          name: "BeeBus",
          context:
            "신라대학교 프로젝트 팀 'IN&OUT' 에서 캡스톤 경진대회용으로 제작한 시각장애인전용 버스 알림 서비스 'BeeBus'입니다. 서버를 통한 모바일과 아두이노간의 통신을 이용해 버스와 앱을 연동하여 시각적으로 불편한 사용자가 또한 원활하게 대중교통을 이용할 수 있도록 지원합니다. ",
          thumnail: require("../assets/thumnail/BeeBusThumnail.png"),
          router: "Bus",
        },
        {
          name: "상권 분석 시스템",
          context:
            "ICT 한이음 멘토링에 소속되어 진행중인 프로젝트로, 빅데이터에 기반하여 사용자가 원하는 상권에 대한 분석하고, 이에 대한 결과를 출력해주는 웹 서비스입니다.\n<a href='https://github.com/HoRam88/hanium_StoreAnalysis'> github</a>",
          thumnail: require("../assets/thumnail/ICT_logo.png"),
          router: "Stores",
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
    isLargeImage() {
      const image = new Image();
      image.src = this.modalData.thumnail;
      return image.height >= 300;
    },
    GotoDetail(prop) {
      if (prop != null) {
        let index = this.projectDetail[prop];
        // prop에서 필요한 데이터를 추출하고 모달 데이터로 설정
        this.modalData = {
          title: index.name,
          description: index.context,
          thumnail: index.thumnail,
          router: index.router,
        };
      } else {
        this.modalData = {
          description:
            "프로젝트 카드를 클릭하게 되시면 간단한 설명과\n 상세페이지로 갈 수 있는 버튼이 제공됩니다.\n각 프로젝트 페이지들은 왼쪽 상단의 \n메뉴를 이용해서도 이동이 가능합니다",
        };
      }
      // 모달 열기
      this.openModal();
    },
    openModal() {
      this.isModalOpen = true; // 모달 열기
    },
    closeModal() {
      this.isModalOpen = false; // 모달 닫기
    },
    closeModalOutside(event) {
      // 클릭 이벤트가 모달 내부에서 발생한 경우 모달을 닫지 않음
      if (event.target.classList.contains("v-overlay_content")) {
        return;
      }
      this.closeModal();
    },
  },
  computed: {
    getImageStyle() {
      // 이미지 크기가 일정 크기 이상인 경우에만 크기를 조절
      if (this.isLargeImage()) {
        return {
          maxWidth: "70%",
          maxHeight: "70%",
        };
      } else {
        return {}; // 추가적인 스타일이 필요하지 않은 경우 빈 객체 반환
      }
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
.modaltitle {
  font-weight: bold;
  font-size: 24px;
}
.project.hovered {
  /* 호버 상태에 따른 스타일 변경 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  background-color: lightgray;
  transition: box-shadow 0.3s, background-color 1s;
}
</style>
