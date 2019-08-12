<template>
  <div class="slider-wrap">
    <ul class="slider-img">
      <!-- <li><img src="@/assets/images/xm.jpg" title="Sight" /></li> -->
      <li v-for="(img,ind) in imgList" :key="ind">
        <img :src="img" title="Sight" v-show='ind==curId'/>
      </li>
    </ul>
    <div class="switcher" @mouseover='mouseoverHandle'>     
      <span v-for="(img,ind) in imgList" :id="ind" :key="ind">
        {{ ind }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "slideImage",
  data: ()=>{
    return {
      curId: 2,
      
    }
  },
  props: {
    imgList: {
      type: Array,
      required: true
    }
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
.slider-wrap {
  overflow: hidden;
  position: relative;
  float: right;
  width: 314px;
  height: 314px;
  > .slider-img {
    margin: 0;
    padding: 0;
    position: absolute;
    overflow: hidden;
    // translate: 100%;
    // transform: translateX(100%);
    > li {
      list-style-type: nono;
      margin: 0;
      padding: 0;
    }
  }
  img {
    width: 100%;
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
</style>