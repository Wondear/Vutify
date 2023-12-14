<template>
  <div class="context" style="padding: 10px">
    <v-card
      class="text-center ma-3"
      style="width: 70%; margin-top: 20px; padding: 20px"
    >
      <v-row style="padding-top: 30px">
        <v-col cols="2" sm="3" md="3">
          <v-responsive class="pt-6 mb-10">
            <v-avatar size="180" style="background: aliceblue">
              <img src="../assets/thumnail/Unity.png"
            /></v-avatar>
          </v-responsive>
          <v-card-text> </v-card-text>
        </v-col>
        <v-col cols="8" sm="9" md="9"
          ><div class="context">
            <b>이름 : 표세민</b>
            <v-divider :thickness="3" style="width: 70%; margin-bottom: 10px" />
            <p>신라대학교 컴퓨터소프트웨어학부 - IOT융합전공 재학</p>
            <p>주요 개발분야 : IOT, Unity, 웹 프런트</p>
            <p>개인 연락처 : vytpals00@gmail.com</p>
            <v-btn :href="githubLink">GitHub</v-btn>
          </div></v-col
        >
      </v-row>
    </v-card>
  </div>
</template>

<script>
import MyProject from "./MyProject.vue";
export default {
  data() {
    return {
      githubLink: "https://github.com/Wondear?tab=repositories",
    };
  },
  components: {
    MyProject,
  },
};
</script>

<style>
.modal-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* 모달 배경의 색상과 투명도 설정 */
}
</style>
