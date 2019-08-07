<template>
  <!-- 导航栏 -->
  <!-- <router-link to="/about">About</router-link> -->
  <div class="nav-wrap">    
      <ul class="nav">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/committee">Program Committee</router-link></li>
        <li><router-link to="/speakers">Invited Speakers</router-link></li>
        <li><router-link to="/submission">Submission</router-link></li>
        <li><router-link to="/sessions">Special Sessions</router-link></li>
        <li><router-link to="/papers">List of Accepted Papers</router-link></li>
        <li><router-link to="/registration">Registration</router-link></li>
        <li><router-link to="/program">Technical Program</router-link></li>        
        <li><router-link to="/venue">Venue & Accommodation</router-link></li>
        <li><router-link to="/sightseeing">Sightseeing</router-link></li>
        <li><router-link to="/workshops">Previous Workshops</router-link></li>
      </ul>    
  </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
li {
  list-style-type: none;
  height: 49px;
}
.nav-wrap {
  float: left;
  width: 230px;
  height: 600px;
  background-color: #6483d8;
  .nav {
    margin: 0;
    padding-left: 3px;
    width: 100%;    
    font-size: 20px;
  }  
}
</style>
