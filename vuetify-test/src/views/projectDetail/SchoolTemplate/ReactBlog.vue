<template>
  <div class="context">
    <h1
      class="start"
      style="background-color: rgb(45, 51, 70); color: aliceblue"
    >
      React 미니 블로그 만들기
    </h1>
    <div class="intercontext inner" style="background-color: rgb(97, 162, 207)">
      <img
        style="max-width: 90%"
        src="../../../assets/thumnail/ReactBlog.png"
      />
      <div class="text">
        VsCode 환경을 기반으로 node.js를 이용하여, React로 제작한 미니블로그<br />
        글쓰기와 댓글달기, 답글달기 등의 기능을 구현하면서<br />
        React 프레임워크를 이용해 컴포넌트들의 랜더링을 관리하고 <br />
        훅과 서버 관리를 하면서 풀스택 웹 제작의 심화부분을 배울 수 있다.<br />
      </div>
    </div>
  </div>
</template>

<style>
.start {
  margin: 30px;
  border-radius: 40px;
  padding: 30px;
}
.inner {
  width: 800px;
  height: 600px;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 30px;
}
.text {
  margin: 20px;
  font-size: 20px;
  color: white;
}
</style>
