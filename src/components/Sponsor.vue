<template>
  <div class="sponsor-wrap">
    <ul>
      <li>
        <a href="http://www.scu.edu.cn/">
          <img src="@/assets/images/sichuan.jpg" title="Sichuan University" />
        </a>
      </li>
      <li>
        <a href="http://www.cie-info.org.cn/">
          <img
            src="@/assets/images/mesccie.png"
            title="Multimedia Security Expert Committee Chinese Institute of Electronics"
          />
        </a>
      </li>
      <li>
        <a href="http://www.csig.org.cn/">
          <img
            src="@/assets/images/csig.png"
            title="CSIG Special Committee of Digital Media Forensics and Security"
          />
        </a>
      </li>
      <li id="springerlogo">
        <a href="https://www.springer.com/gp">
          <img src="@/assets/images/springer.png" title="Springer" />
        </a>
      </li>
      <!-- <li style="display:inline-block;width:100%;height:0"></li> -->
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
.sponsor-wrap {  
  padding: 0 20%;
  background-color: #fff;
  box-sizing: border-box;
  overflow: hidden;
  > ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  li {
    display: inline-block;
    // flex: 1 1 auto;
    width: 12%;
    list-style-type: none;
  }
  img {
    width: 100%;
  }
}
#springerlogo {
  width: 14%;
}
</style>
