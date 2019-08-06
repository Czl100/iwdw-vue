<template>
  <div class="content-wrap">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
content-wrap h1 h2{
	display:inline;	
}

content-wrap {
	display:table-cell; 
	vertical-align: top;
}
</style>
