<template>
  <div class="context">
    <div class="title sognando">
      <h1>소그난도</h1>
      <i class="sub-title">(Sognando: 꿈꾸듯이, 몽환적으로)</i>
      <i class="terms">2022.08 - 현재</i>
    </div>

    <v-sheet class="intercontext" style="width: 100%; height: 50%">
      <img style="width: 50%" src="../../assets/thumnail/Sognando2.png" />

      <v-sheet
        style="width: 100%; height: 70%; padding: 20px"
        class="context title sognando"
      >
        스토리 중심의 텍스트 RPG '소그난도'는 <br />어렸을 적 읽은 동화책을
        떠올리게 하는 마법 판타지 세계관, <br />몽환적인 그래픽과 음악을 통해
        플레이어에게 감동과 치유를 주기 위한 게임을 제작중입니다.<br />
      </v-sheet>
    </v-sheet>

    <v-sheet class="discription" style="width: 100%; background-color: black">
      <div style="position: relative">
        <img style="width: 80%" src="../../assets/thumnail/SognandoPlay.png" />
        <p
          style="
            position: absolute;
            top: 80%;
            left: 55%;
            transform: translate(-40%, -50%);
            width: 70%;
            height: 30%;
            padding: 20px;
            background-color: black;
            color: white;
            font-size: 20px;
          "
          class="intercontext"
        >
          <b>
            6인 팀 '라즈베리토마토'에서 개발중인 텍스트 기반 RPG게임으로 <br />
            기획, 스토리, 디자인, 음향, 개발 등 각 파트별 팀원을 배정.<br />
            각 팀원간의 협업으로 2022년 8월부터 지속적인 개발을 진행중입니다.</b
          >
        </p>
      </div>
    </v-sheet>

    <v-sheet class="discription" style="width: 100%; height: 460px">
      <div
        class="title sognando intercontext"
        style="padding: 20px; width: 50%; height: 100%"
      >
        멀티엔딩 시스템, 가볍고 쉬운 조작,<br />
        화려한 일러스트, 깊은 스토리 등의 요소를 이용해 <br />
        다양한 타겟층을 상업적으로 공략하려 합니다.
        <v-divider :thickness="10" style="width: 80%; color: rgb(0, 0, 0)">
        </v-divider>
        <div class="music-player" style="margin-top: 10px">
          <div class="controls">
            <button @click="togglePlayback" class="fas fa-play">
              <v-icon :class="icon"></v-icon>
            </button>
          </div>
          <audio ref="audioPlayer" :src="musicSource"></audio>
          <i class="terms">테마곡 샘플</i>
        </div>

        <v-divider
          :thickness="10"
          style="width: 80%; color: rgb(0, 0, 0); margin-bottom: 20px"
        />
      </div>
      <div
        style="width: 50%; background-color: black; height: 100%"
        class="intercontext"
      >
        <img
          style="width: 100%; background-color: black"
          src="../../assets/thumnail/SognandoPlay2.png"
        /></div
    ></v-sheet>
  </div>
</template>
<style>
.context {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
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
  background-color: goldenrod;
  color: #fff;
}
.title {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  width: 100vw;
}

.music-player {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
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
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: rgb(161, 82, 18);
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
