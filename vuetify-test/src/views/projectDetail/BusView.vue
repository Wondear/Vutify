<template>
  <div class="context">
    <div class="title bus">
      <h1>BeeBus</h1>
      <i class="sub-title">시각장애인전용 버스알림앱</i>
      <i class="terms">2022.5.11. - 2022.11.30.</i>
    </div>
    <div style=" width: 100%;background-color: black; padding: 50px;">
      <iframe
        :src="videoUrl"
        width="560"
        height="315"
        frameborder="0"
        style="margin: 20px"
      ></iframe>
    </div>
    
    <v-divider :thickness="3" style="width: 100%; color: black;"> </v-divider>
    <div class="discription" style="width: 100%;height:600px">
      <div style="width: 10%;"></div>
      <div style="width: 30%; " class="intercontext">
        <img  class="img_limit" src="../../assets/thumnail/Arduino_Logo.png" />
        <img  class="img_limit"  src="../../assets/thumnail/firebase.png" />
        <img class="img_limit" src="../../assets/thumnail/Android.png" />
      </div>
      <div style="width: 10%;"></div>

      <v-sheet
      class="title bus intercontext"
        style="width: 50%; height: 100%; padding: 20px ; "
      ><p >
        <h3>Beebus</h3><br/>
        Beebus는 시각장애인의 더 편리한 버스 승하차를 위해 시작된 프로젝트로,
         Arduino, Android 두 가지 플랫폼의 기능을 Firebase 서버로 이어서 만들어낸 IOT 프로젝트입니다.</p>
        <p style="font-size: 17px; text-align: left;"><ul>
          <li>TTS를 통해 시각장애인 또한 편하게 사용할 수 있는 Android 앱 </li>
        <li>Arduino를 이용해 만든 앱과 통신이 가능한 버스 단말기 </li>
        <li>앱과 단말기를 이어주는 Firebase 서버 시스템 </li>
</ul>
      </p>
      </v-sheet>
    </div>
    
    <v-divider :thickness="3" style="width: 100%"> </v-divider>
    <v-sheet class="discription" style="width: 100%;height: 600px" >
      
      <div class="title bus intercontext"
        style="width: 50%; height: 100%; padding: 20px ;" > 
        <b>팀 내 역할</b><br> IOT팀 소속으로, 와이파이 통신 기능이 내장되어 Firebase 서버에 접속 가능한 D1R1보드와 다양한 기능을 추가 할 수 있는 
        Mega2560 보드를 결합하여 앱과 통신 가능한 버스 모형의 기능 구현 담당</div>
      <div style="width: 50%; " class="intercontext">
        <img style="max-height: 450px; max-width: 450px;" src="../../assets/thumnail/Mega2560.png" />
      </div>
      </v-sheet>
      <v-sheet class="discription" style="width: 100%;height: 600px" >
        <div style="width: 50%; " class="intercontext">
        <img style="max-height: 450px; max-width: 450px;" src="../../assets/thumnail/OLED.png" />
        <img style="max-height: 450px; max-width: 450px;" src="../../assets/thumnail/RC522Info.png" />
      </div>
      <div class="title bus intercontext"
        style="width: 50%; height: 100%; padding: 20px ;" > 
        <b>부착 모듈</b><br> 
         <ul><li style="text-align: left;">SSD1322U 256*64 OLED</li>: SPI통신으로 Mega보드에서 받아온 데이터를 화면에 출력 <br/>
         <li style="text-align: left;">RFID RC522</li>: 시리얼 통신으로 모듈에 접근한 NFC 카드의 정보를 받아와 Mega보드에 전송</ul></div>
      
      </v-sheet>
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
.img_limit{
  width: 50%; 
  max-width: 150px; 
  max-height: 150px
}
.img_limit.big{
  width: 50%; 
  max-width: 300px; 
  max-height: 300px

}
</style>
