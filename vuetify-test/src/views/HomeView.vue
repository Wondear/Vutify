<template>
  <v-btn to="projects">상세화면</v-btn>
  <!-- 목차가 주르륵. 어떡하지?  시작시 바로  애니메이팅 연출 필요,
    v-card 쓸 필요가 있나? 
    css로 직적 제작 or 추가 라이브러리 사용
  -->
</template>
<script>
export default {
  data() {
    return {
      githubLink: "https://github.com/Wondear?tab=repositories",
    };
  },
};
</script>
