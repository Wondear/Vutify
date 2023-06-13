<template>
  <div class="context">
    <div class="title bus">
      <h1>BeeBus</h1>
      <i class="sub-title">시각장애인전용 버스알림앱</i>
      <i class="terms">2022.5.11. - 2022.11.30.</i>
    </div>
    <div>
      <iframe
        :src="videoUrl"
        width="560"
        height="315"
        frameborder="0"
        style="margin: 20px"
      ></iframe>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      videoUrl: "https://www.youtube.com/embed/_CAfbgoLiBQ",
    };
  },
};
</script>

<style>
.title.bus {
  background-color: #fee900;
  color: #000000;
}
</style>
