<template>
  <div class="slider-wrap">
    <div class="slider-img">
      <!-- <li><img src="@/assets/images/xm.jpg" title="Sight" /></li> -->
      <div class="img-wrap" v-for="(img,ind) in imgList" :key="ind">
        <transition name="fade">
          <img :src="img" title="Sight" v-show='ind==curId'/>    
        </transition>
      </div>
    </div>

    <div class="switcher" @mouseover='mouseoverHandle'>     
      <span v-for="(img,ind) in imgList" :id="ind" :key="ind">
        {{ ind }}
      </span>
    </div>
  </div>
</template>

<script>
import { clearInterval } from 'timers';
export default {
  name: "slideImage",
  data: ()=>{
    return {
      curId: 1,      
    }
  },
  props: {
    imgList: {
      type: Array,
      required: true
    }
  },
  mounted(){
    this.timer = setInterval(() => {
      if(this.curId>=this.imgNum-1){
        this.curId = 0;
      }
      else{
        this.curId = this.curId + 1;
      }
    }, 3000);
  },
  beforeDestroy(){
    clearInterval(this.timer);
  },
  computed: {
    imgNum(){
      return this.imgList.length;
    }
  },
  methods: {
    mouseoverHandle(event){
      this.curId = event.target.id;
    }
  }

};
</script>

<style lang="less" scoped>
@img-width: 314px;
.slider-wrap {
  overflow: hidden;
  position: relative;
  float: right;
  width: @img-width;
  height: @img-width;
  > .slider-img {
    margin: 0;
    padding: 0;
    position: absolute;
    overflow: hidden;
    box-sizing: border-box;
    width: @img-width;
    height: 100%;
    > .img-wrap {
      position: absolute;
      top: 0;
      left: 0;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
    }
  }
  img {
    display: inline-block;
    width: 100%;
    height: @img-width;
  }
}

.switcher {
  position: absolute;
  bottom: 5px;
  right: 20px;
  span {
    @switcher-width: 20px;

    display: inline-block;
    margin: 0 3px;    
    text-align: center;
    width: @switcher-width;
    height: @switcher-width;
    color: #FFF;
    background-color: #005784;
    border-radius: 5px;
  }
}

/* 轮播图的动画 */
.fade-enter-active {
  transition: all .8s -.1s linear;
}
.fade-leave-active {
  transition: all .8s linear;
}
.fade-enter {
  transform: translateX(-@img-width);
}
 .fade-leave-to {
  transform: translateX(@img-width);
 }
</style>