<template>
  <div class="context" style="padding: 10px">
    <h1>Profile</h1>
    <Profile style="width: 100%"></Profile>

    <v-divider :thickness="3" style="width: 90%; margin-top: 20px"></v-divider>

    <v-content style="width: 100%; margin-bottom: 20px"
      ><MyProject />
    </v-content>
  </div>
</template>

<script>
import MyProject from "./MyProject.vue";
import Profile from "./Profile.vue";
export default {
  data() {
    return {
      githubLink: "https://github.com/Wondear?tab=repositories",
    };
  },
  components: {
    MyProject,
    Profile,
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
