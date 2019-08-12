<template>
  <div class="theme-title">
    <div class="head-img">
      <img src="@/assets/images/headimg.png" title="IWDW2019" />
    </div>

    <div id="sub-logimg" style="width:inherit">
      <div class="logo">
        <a href="index.html"><img src="@/assets/images/qcs2.jpg" alt="IWDW2019" title="IWDW2019" /></a>
      </div>

      <SlideImage :imgList='imgList'/>
    </div>

    <!-- <Loadding /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Loadding from "@/components/Loadding.vue";
import SlideImage from "@/components/SlideImage.vue";
export default {
  name: "ThemeImg",
  components: {
    Loadding,
    SlideImage
  },
  data: ()=>{
    return {
      imgList: [
        require('@/assets/images/xm.jpg'),
        require('@/assets/images/1.jpg'),
        require('@/assets/images/2.jpg')
      ]
    }
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
  
}
</style>
