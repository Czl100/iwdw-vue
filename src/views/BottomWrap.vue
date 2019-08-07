<template>
  <div class='bottom-wrap'>
    <Sponsor />
    <footer></footer>
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

<style>
.bottom-wrap {
  overflow: hidden;
  width: 1349px;
  height: 190px;
  border-top: solid 2px #bcbcbc;
}
</style>
