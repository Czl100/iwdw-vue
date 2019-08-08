<template>
  <div class="app">
    <div class="top-main">
      <ThemeImg />
      <MainWrap />
    </div>

    <BottomWrap />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
  </div>
</template>

<script>
import ThemeImg from "@/components/ThemeImg.vue";
import MainWrap from "@/views/MainWrap";
import BottomWrap from "@/views/BottomWrap";

export default {
  name: "app",
  components: {
    ThemeImg,
    MainWrap,
    BottomWrap
  },
  metaInfo: {
    title: 'vue-iwdw',
    meta: [
      {name: 'keywords', content: 'IWDW2019, IWDW 2019, iwdw, 2019, meeting'},
      {name: 'description', content: 'IWDW2019, IWDW, 2019, IWDW 2019,meeting'}
    ]
  }
};
</script>

<style lang="less">
// html body
html, body {
  // @width: 88%;  width: @width;
  position: relative;
  margin: 0;
  padding: 0;
  // width: 1366px;  有水平滚动条
  width: 1349px;
  height: 100%;

  color: #333;
  background: #fff;
  font-family: Tahoma, Geneva, sans-serif;
  font-size: 16px;
}

.top-main {
  width: 1045px;
  margin: 0 auto;
}
</style>
