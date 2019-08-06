$(document).ready(function(){    
    //head 添加meta
    console.log('iwdw_js ready');
    $('title').after('<meta name="keywords" content="IWDW2019, IWDW 2019, iwdw, 2019, meeting">');
    $('title').after('<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1">');        

    // 修改title
    document.title = "IWDW2019";
    var descrp = "IWDW2019, IWDW, 2019, IWDW 2019,meeting, IWDW2019 IWDW 2019 The 18th International Workshop on Digital-forensics and Watermarking (IWDW 2019), Chengdu, China";    
    $('meta[name="description"]').attr("content", descrp);

//-------------------------------------------------------------------------    
    // 图像集
    
        
    // 导航栏
    var navbox='<div class="nav" id="smoothmenu1">\
    <ul class="clearfix">\
        <li class="selected home"><a href="index.html"><span>Home</span></a></li>\
        <li class="committee">\
            <a  href="Committee.html"><span>Program Committee</span></a></li>\
        <li class="keynote">\
            <a  href="keynote.html"><span>Invited Speakers</span></a></li>\
        <li class="submission">\
            <a  href="callPaper.html"><span>Submission</span></a></li>\
        <li class="navspecial-sessions">\
            <a  href="#"><span>Special Sessions</span></a></li>\
        <li class="navpaperlist">\
            <a  href="#"><span>List of Accepted Papers</span></a></li>\
        <li class="registration">\
            <a  href="regist.html"><span>Registration</span></a></li>\
        <li class="program">\
            <a  href="program.html"><span>Technical Program</span></a></li>\
        <li class="venue">\
            <a  href="accormado.html"><span>Venue & Accommodation</span></a></li>\
        <li class="sight">\
            <a  href="sight.html"><span>Sightseeing</span></a></li>\
        <li class="navprework">\
            <a href="#"><span>Previous Workshops</span></a>\
        </li>\
    </ul>\
    </div>';
    if(document.documentElement.clientWidth > 460){
        $('.navbox').html(navbox);
    }
    else{
        mobile_nav();
    }
        
    // 添加 Special Sessions
    var special_sessions='<div class="textbox">\
        <h2>Special Sessions</h2>\
        <hr class="line">\
        <div class="text indentation">\
            <p>Special session proposals are invited to IWDW 2019, and inquiries regarding your submission should be directed to the General Chair.\
                The proposal needs to be submitted to the General Chair (Hongxia Wang, <a>hxwang@scu.edu.cn</a>) by 1 July, 2019.</p>\
        </div>\
        </div>';

    $(".navspecial-sessions").click(function(){
        $('.clearfix').children('.selected').removeClass('selected');
        $('.clearfix').children('.navspecial-sessions').addClass('selected');
        $(".content-home").html(special_sessions);
    });

    // 添加 previous Work
    var prework='<ul class="prework">\
    <li><a href="http://iwdw2018.org/">IWDW 2018</a></li>\
    <li><a href="https://iwdw2017.cs.ovgu.de/cms/front_content.php">IWDW 2017</a></li>\
    <li><a href="resource/CFP_IWDW2016.pdf">IWDW 2016</a></li>\
    <li><a href="https://www.i.h.kyoto-u.ac.jp/site/iwdw2015/">IWDW 2015</a></li>\
    <li><a href="resource/CFP_IWDW2014.pdf">IWDW 2014</a></li>\
    <li><a href="resource/CFP_IWDW2013.pdf">IWDW 2013</a></li>\
    <li><a href="resource/CFP_IWDW2012.pdf">IWDW 2012</a></li>\
    <li><a href="https://web.njit.edu/~shi/iwdw11">IWDW 2011</a></li>\
    </ul>';

    $(".navprework").click(function(){
    $('.clearfix').children('.selected').removeClass('selected');
    $('.clearfix').children('.navprework').addClass('selected');
    $(".content-home").removeClass().addClass('content-home');
    $(".content-home").html(prework);
    });

    // list of papers 改用Vue实现
    var papers=
    '<div class="textbox papers">\
    <h2>List of Accepted Papers</h2>\
    <hr class="line">\
    <ul>\
        <li>*********</li>\
        <li>*********</li>\
        <li>*********</li>\
    </ul>\
    </div>';
    $(".navpaperlist").click(function(){
    $('.clearfix').children('.selected').removeClass('selected');
    $('.clearfix').children('.navpaperlist').addClass('selected');
    $(".content-home").removeClass().addClass('content-home');
    $(".content-home").html(papers);
    });

    // sponsor
    var sponsors='<ul>\
                <li><a href="http://www.scu.edu.cn/"><img src="images/sichuan.jpg" title="Sichuan University"/></a></li>\
                <li><a href="http://www.cie-info.org.cn/"><img src="images/mesccie.png" title="Multimedia Security Expert Committee Chinese Institute of Electronics"/></a></li>\
                <li><a href="http://www.csig.org.cn/"><img src="images/csig.png"   title="CSIG Special Committee of Digital Media Forensics and Security"/></a></li>\
                <li id="springerlogo"><a href="https://www.springer.com/gp"><img src="images/springer.png"  title="Springer"/></a></li>\
                <li style="display:inline-block;width:100%;height:0"></li>\
            </ul>';
    $('.sponsors').html(sponsors);

    var footer='<p>Copyright(c) IWDW 2019 Conference committees. All rights reserved.</p>';
    $('footer').html(footer);

    // 导航栏高亮
    var elid = $('body').attr('id') || 'home';
    elid = '.' + elid;
    $('.clearfix').children('.selected').removeClass('selected');    
    $('.clearfix').children(elid).addClass('selected');

    // 风景照链接
    $(".slider").click(function(){
        window.location.href="sight.html";
    });
});


window.onload = function(){
    // 显示log图像
    document.getElementById("sub-logimg").setAttribute("style", "display:block;");
    var tmpNode = document.getElementById("tmp-img");
    tmpNode.parentNode.removeChild(tmpNode);
    
    function resizeEvent(){
        var htmlWidth = $("div.head-img").width();
        $("div#sub-logimg").width(htmlWidth).height(0.3*htmlWidth);
        $("div.logo").width(0.7*htmlWidth).height(0.3*htmlWidth);
        $("div.slider").width(0.3*htmlWidth).height(0.3*htmlWidth);        
    }
    window.onresize = resizeEvent;    
    resizeEvent();
}

// 移动端导航栏
function mobile_nav(){
    $('div#main, div.body-wrapper').css("width", "100%");
    $("div.navbox").remove();
    $('div.switcher').remove();
    
    var navbox='<div class="navbox" id="smoothmenu1">\
    <ul class="clearfix">\
        <li class="selected home"><a href="index.html"><span>Home</span></a></li>\
        <li class="committee">\
            <a  href="Committee.html"><span>Program Committee</span></a></li>\
        <li class="submission">\
            <a  href="callPaper.html"><span>Submission</span></a></li>\
        <li class="registration">\
            <a  href="regist.html"><span>Registration</span></a></li>\
        <li class="program">\
            <a  href="program.html"><span>Technical Program</span></a></li>\
        <li class="venue">\
            <a  href="accormado.html"><span>Venue & Accommodation</span></a></li>\
        <li class="sight">\
            <a  href="sight.html"><span>Sightseeing</span></a></li>\
        <li class="navprework">\
            <a href="#"><span>Previous Workshops</span></a>\
        </li>\
    </ul>\
    </div>';
    
    $("div#table").before(navbox);
    
    // 设置样式
    $('div.theme-title').css("margin-bottom", "0px");
    
    $("div.navbox").css({
        "display": "block",
        "margin": "0 0 1em 0",
        "padding": "0",
        "width": "100%",
        "height": "auto"
    });
    
    $("div.navbox a").css("text-decoration", "none");
    $("div.navbox > ul").css({    
        "margin": "0",
        "padding": "0",
        'width': '100%',
        "display": "flex",    
        'flex-wrap': 'wrap',
        'justify-content': 'space-between'
    });
    
    
    $("div.navbox li").css({
        "text-align": "center",
        'vertical-align': 'center'
    });
    
    $('div.navbox > ul > li').css({    
        "display": "inline-block",
        //'float': 'left',
        "flex": "auto",        
        "background-color": "#6483d8",
        "border-right": "solid 2px #2828ab",
        "border-bottom": "solid 2px blue",
        "width": "auto",
        //"height": "2.5em"        
    });
    
    $("div.navbox > ul > li *").css("width", "100%");
    
    $("div.navbox li ul").css({
        "display": "none"
    });
    
    $("div.navbox span").css({    
        "color": "#FFF",
        "font-size": "14px"
    });

    $('div.navbox > ul *').css('text-align', 'center');
}