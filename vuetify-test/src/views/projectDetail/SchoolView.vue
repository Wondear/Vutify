<template>
  <div class="context">
    <div class="title school">
      <h1>학교 프로젝트</h1>
      <i class="sub-title">신라대학교 재학</i>
      <i class="terms">2020.03.2 - 2024.02.</i>
    </div>
    <div v-for="item in displayedItems" :key="item.title">
      <!-- 항목을 표시하는 코드 -->
      <v-main><component :is="item.component" /></v-main>
      <!-- 나머지 항목 정보를 표시 -->
    </div>
    <v-pagination v-model="currentPage" :length="totalPages"></v-pagination>
  </div>
</template>

<script>
import ReactBlog from "./SchoolTemplate/ReactBlog.vue";
import IotDoor from "./SchoolTemplate/IotDoor.vue";
import VuePort from "./SchoolTemplate/VuePort.vue";
export default {
  data() {
    return {
      project: [
        {
          title: "IOT서비스 이용한 도어락",
          component: IotDoor,
          detail: 0,
        },
        {
          title: "Vue를 이용한 포트폴리오 제작",
          component: VuePort,

          detail: 0,
        },
        {
          title: "React로 만드는 미니블로그",
          component: ReactBlog,

          detail: 0,
        },
      ],
      itemsPerPage: 1, // 한 페이지에 표시할 항목 개수
      currentPage: 1, // 현재 페이지 번호
    };
  },
  components: {
    ReactBlog,
    IotDoor,
    VuePort,
  },
  computed: {
    totalPages() {
      return Math.ceil(this.project.length / this.itemsPerPage);
    },
    displayedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.project.slice(startIndex, endIndex);
    },
  },
};
</script>

<style>
.title.school {
  background-color: #345a24;
  color: #ffd919;
}
</style>
