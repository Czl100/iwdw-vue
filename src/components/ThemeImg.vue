<template>
  <div class="theme-title">
    <div class="head-img">
      <img src="@/assets/images/headimg.png" title="IWDW2019" />
    </div>

    <div id="sub-logimg" style="width:inherit">
      <div class="logo">
        <a href="index.html">
          <img src="@/assets/images/qcs2.jpg" alt="IWDW2019" title="IWDW2019" />
        </a>
      </div>

      <div class="slider">
        <div class="conbox">
          <div>
            <img src="@/assets/images/xm.jpg" title="Sight" />
          </div>
       <!--    <div>
            <img src="@/assets/images/1.jpg" title="Sight" />
          </div>
          <div>
            <img src="@/assets/images/2.jpg" title="Sight" />
          </div> -->
        </div>
        <div class="switcher">
          <a href="#" class="cur">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
        </div>
      </div>
    </div>

    <!-- <Loadding /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Loadding from "@/components/Loadding.vue";

export default {
  name: "ThemeImg",
  components: {
    Loadding
  }
};
</script>

<style lang="less" scoped>
.theme-title {
  overflow: hidden;
  margin-bottom: 1em;
  width: 100%;
  height: auto;
  cursor: pointer;
  .head-img, .head-img img{
    width: 100%;
  }
  .logo {
    float: left;
    position: relative;

    // width: 70%;height: calc(30%);
    width: 731px;
    height: 314px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  /* .logo {
    aspect-ratio: '24:1';
  } */
  .slider {
    overflow: hidden;
    position: relative;
    float: right;

    width: 314px;
    height: 314px;
    img {
      width: 100%;
    }
  }
}
</style>
