<template>
  <!-- 导航栏 -->
  <!-- <router-link to="/about">About</router-link> -->
  <div class="navbox">    
      <ul class="clearfix">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/committee">Program Committee</router-link></li>
        
        <!-- <router-link to="/speakers">Invited Speakers</router-link>
        <router-link to="/submission">Submission</router-link>
        <router-link to="/sessions">Special Sessions</router-link>
        <router-link to="/papers">List of Accepted Papers</router-link>
        <router-link to="/registration">Registration</router-link>
        <router-link to="/program">Technical Program</router-link>
        <router-link to="/venue">Venue & Accommodation</router-link>
        <router-link to="/sightseeing">Sightseeing</router-link>
        <router-link to="/workshops">Previous Workshops</router-link> -->
      </ul>    
  </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
.navbox, .nav {
	background: #6483d8;
}
.navbox{
	display:table-cell;
	vertical-align: top;
	position:relative;
	color: #FFF;
	width:22%;
	height:49px;
	background-position:0 -138px;
	background-repeat:repeat-x;
	
	z-index:99;
	list-style-type:none;	
}

#table-row {
	display:table-row;
}
#table{
	display: table;
	width: 100%;
}
.nav{
	/* width:960px; */
	margin:0 auto;
	/* text-align: justify; */
}
.nav li{
	/*display: inline-block;*/
	/*float:left;*/
	height:49px;
	background-position:100% -99px;
	/*padding:0 3px 0 2px;*/
	position:relative;
	list-style-type: none;
}
.nav li.last{
	background:none;
}
.nav li a{
	float:left;
	display:block;
	padding:0 0 0 4px;
	height:49px;
	overflow:hidden;
}
.nav li a span{
	float:left;
	display:block;
	/*padding:0 4px 0 0;*/
	line-height:49px;
	font-size:16px;
	color:#fff;
	font-weight: 500;
	cursor:pointer;
	width:119px;
	text-align:left;
}
.nav li.selected a,
.nav li a.selected{
	background-position:0 -60px;
	text-decoration:none;
}
.nav li.selected,
.nav li.selected a span,
.nav li.selected a,
.nav li a span:hover{
	background-position:100% -60px;
	background-color: #2828ab;
	/*2828ab*/
}
.nav li.selected .submenu{
	display:block;
}
.nav li .submenu{
	display:none;
	position:absolute;
	top:0;
	left:0;
}
.nav li .submenu{
	border-style:solid;
	border-width:0px 1px 1px 1px;
	border-color:#ddd;
	/*padding:0 5px 5px 5px;*/	
	background:#fff;
}
.nav li .submenu{
	-moz-border-radius:0 0 3px 3px;
	-webkit-border-radius:0 0 3px 3px;
	border-radius:0 0 3px 3px;
	-moz-box-shadow:0 5px 5px #D3D3D3;
	-webkit-box-shadow:0 5px 5px #D3D3D3;
	box-shadow:0 5px 5px #D3D3D3;
}
.nav li .submenu li{
	float:none;
	padding:0;
	background:none;
	height:auto;
	border-bottom:dotted 1px #BEBEBE;
}
.nav li .submenu li.last{
	border:none;
}
.nav li .submenu li a{
	float:none;
	padding:0;
	text-align:center;
	height:28px;
	font-weight:600;
	color:#006DA2;
	line-height:28px;
	background:none;
}
.nav li .submenu li a:hover{
	background:#408080;
	font-weight:800; 
	color:#FFF;
}
</style>
