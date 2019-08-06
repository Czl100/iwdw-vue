<template>
  <div id="app">
    <ThemeImg />
    <MainWrap/>
    <BottomWrap/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div> -->

  </div>
</template>

<script>
import ThemeImg from "@/components/ThemeImg.vue";
import MainWrap from "@/views/MainWrap";
import BottomWrap from '@/views/BottomWrap';

export default {
  name: "app",
  components: {
    ThemeImg,
    MainWrap,
    BottomWrap
  }
};
</script>

<style lang="less">
/* css reset */
html,body,div,span,applet,object,iframe,
h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,
address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,
strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,
fieldset,form,label,legend,table,caption,tbody,
tfoot,thead,tr,th,td,article,aside,canvas,
details,embed,figure,figcaption,footer,
header,hgroup,menu,nav,output,ruby,
section,summary,time,mark,audio,video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
article,aside,details,figcaption,
figure,footer,header,hgroup,
menu,nav,section {
  display: block;
}

body {
  line-height: 1;
}

ol,ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,blockquote:after,q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
// html body
html, body {
  @width: 88%;  
  position: relative;
  margin: 0 auto;
  width: @width;
  height: 100%;
  min-height: 100%;
  color: #333;
  background: #fff;
  font-family: Tahoma, Geneva, sans-serif;
  // font-size: 14px;
  font-size: calc(0.1vw);
}
</style>
