<template>
  <div class="context">
    <div class="title sognando">
      <h1>소그난도</h1>
      <i class="sub-title">(Sognando: 꿈꾸듯이, 몽환적으로)</i>
      <i class="terms">2022.08 - 현재</i>
    </div>

    <div class="music-player">
      <i class="terms">테마곡 샘플</i>
      <div class="controls">
        <button @click="togglePlayback" class="fas fa-play">
          <v-icon :class="icon"></v-icon>
        </button>
      </div>
      <audio ref="audioPlayer" :src="musicSource"></audio>
    </div>
    <v-divider :thickness="2" color="info"></v-divider>
    <v-sheet
      class="discription"
      style="width: 70%; height: 50%; background-color: aliceblue"
    >
      <img style="width: 30%" src="../../assets/thumnail/Sognando2.png" />
      <v-sheet style="width: 50%; height: 70%" class="context">
        '소그난도'는 6인 팀 '라즈베리토마토'에서 개발중인 텍스트 기반
        RPG게임으로 기획, 스토리, 디자인, 음향, 개발에 각 파트별 팀원을 배정하여
        Unity를 기반으로 개발중이며
      </v-sheet>
    </v-sheet>

    <div>
      <img
        style="width: 50%; height: 50%"
        src="../../assets/thumnail/SognandoThumnail.png"
      />
    </div>
  </div>
</template>
<style>
.context {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
}
.my-hr {
  size: 1;
  width: 80%;
  border: none; /* 기본 테두리 제거 */
  border-top: 1px solid gray; /* 가로선 스타일 설정 */
  margin: 10px 0; /* 여백 설정 */
}
.discription {
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.intercontext {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title.sognando {
  background-color: #e5b935;
  color: #fff;
}
.title {
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  width: 100vw;
}

.music-player {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
}
.terms {
  font-size: 5px;
  padding-bottom: 5px;
}
.sub-title {
  font-size: 12px;
  font-weight: bold;
}
.controls {
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: rgb(118, 67, 50);
}

.fa-play {
  font-size: 18px;
}
.audio {
  width: 100%;
  max-width: 300px;
}
</style>

<script>
export default {
  data() {
    return {
      musicSource: require("../../assets/230528.mp3"),
      isplaying: false,
      icon: "mdi mdi-play",
    };
  },
  methods: {
    togglePlayback() {
      const audioPlayer = this.$refs.audioPlayer;
      if (audioPlayer.paused) {
        audioPlayer.play();
        this.icon = "mdi mdi-pause";
        this.isPlaying = true;
      } else {
        audioPlayer.pause();
        this.icon = "mdi mdi-play";
        this.isPlaying = false;
      }
    },
  },
};
</script>
