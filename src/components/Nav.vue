<template>
  <!-- 导航栏 -->
  <!-- <router-link to="/about">About</router-link> -->
  <div class="nav-wrap">    
      <ul class="nav">
        <router-link tag="li" to="/"><span>Home</span></router-link>
        <router-link tag="li" to="/committee"><span>Program Committee</span></router-link>
        <router-link tag="li" to="/speakers"><span>Invited Speakers</span></router-link>
        <router-link tag="li" to="/submission"><span>Submission</span></router-link>
        <router-link tag="li" to="/sessions"><span>Special Sessions</span></router-link>
        <router-link tag="li" to="/papers"><span>List of Accepted Papers</span></router-link>
        <router-link tag="li" to="/registration"><span>Registration</span></router-link>
        <router-link tag="li" to="/program"><span>Technical Program</span></router-link>        
        <router-link tag="li" to="/venue"><span>Venue & Accommodation</span></router-link>
        <router-link tag="li" to="/sightseeing"><span>Sightseeing</span></router-link>
        <router-link tag="li" to="/workshops"><span>Previous Workshops</span></router-link>
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
  cursor: pointer;
}
.nav-wrap {
  float: left;
  width: 230px;
  height: 600px;
  background-color: #6483d8;
  .nav {
    margin: 0;
    width: 100%;
    padding-left: 0;    
    box-sizing: border-box;
    font-size: 16px;
    span {
      padding-left: 3px;
      vertical-align: middle;
      line-height: 49px;
      color: #fff;
    }
    a {
      text-decoration: none;
    }
  }  
}
.router-link-exact-active {
  background-color: #2828ab;
}
</style>
