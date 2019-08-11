<template>
  <div class='bottom-wrap'>
    <Sponsor />
    <footer class="footer novw"><span>Copyright(c) IWDW 2019 Conference committees. All rights reserved.</span></footer>
  </div>
</template>

<script>
import Sponsor from '@/components/Sponsor';

export default {
  components: {
    Sponsor
  }
};
</script>

<style lang='less' scoped>
.bottom-wrap {
  overflow: hidden;
  width: 1349px;
  border-top: solid 2px #bcbcbc;
}
.footer {
  position: relative;
  height: 57px;
  background-color: #bcbcbc;

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
