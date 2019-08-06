<template>
  <div class="main-wrap">
    <div class="table-row">
      <Nav />
      <ConteneWrap />
    </div>
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
  display: table;
  width: 100%;
  .table-row {
    display: table-row;
  }
}
</style>
