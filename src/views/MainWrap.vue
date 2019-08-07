<template>
  <div class="main-wrap">
    <Nav />
    <ConteneWrap />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import ConteneWrap from "@/components/ConteneWrap";

export default {
  components: {
    Nav,
    ConteneWrap
  }
};
</script>

<style lang='less' scoped>
.main-wrap {
  overflow: hidden;
  width: 100%;
}
</style>
