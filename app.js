document.addEventListener('polymer-ready', function() {
  var navicon = document.getElementById('navicon');
  var drawerPanel = document.getElementById('drawerPanel');
  navicon.addEventListener('click', function() {
    drawerPanel.togglePanel();
  });
});

document.addEventListener('polymer-ready', function() {
  var navicon = document.getElementById('nav');
  var drawerPanel = document.getElementById('drawerPanel');
  navicon.addEventListener('click', function() {
    drawerPanel.togglePanel();
  });
});

$(document).ready(function(){
        $("#1").click(function () {
        $(".content2").hide();
        $(".content3").hide();
        $(".content4").hide();
        $(".content5").hide();
        $(".content6").hide();
        $(".content7").hide();
        $(".content8").hide();
        $(".content1").fadeIn(1 );
        });

    });

$(document).ready(function(){
        $("#2").click(function () {
        $(".content1").hide();
        $(".content3").hide();
        $(".content4").hide();
        $(".content5").hide();
        $(".content6").hide();
        $(".content7").hide();
        $(".content8").hide();
        $(".content2").fadeIn(1 );
        });

    });

$(document).ready(function(){
        $("#3").click(function () {
        $(".content1").hide();
        $(".content2").hide();
        $(".content4").hide();
        $(".content5").hide();
        $(".content6").hide();
        $(".content7").hide();
        $(".content8").hide();
        $(".content3").fadeIn(1 );
        });

    });

$(document).ready(function(){
        $("#4").click(function () {
        $(".content1").hide();
        $(".content2").hide();
        $(".content3").hide();
        $(".content5").hide();
        $(".content6").hide();
        $(".content7").hide();
        $(".content8").hide();
        $(".content4").fadeIn(1 );
        });

    });

$(document).ready(function(){
        $("#5").click(function () {
        $(".content1").hide();
        $(".content2").hide();
        $(".content4").hide();
        $(".content3").hide();
        $(".content6").hide();
        $(".content7").hide();
        $(".content8").hide();
        $(".content5").fadeIn(1 );
        });

    });

$(document).ready(function(){
        $("#6").click(function () {
        $(".content1").hide();
        $(".content2").hide();
        $(".content4").hide();
        $(".content5").hide();
        $(".content3").hide();
        $(".content7").hide();
        $(".content8").hide();
        $(".content6").fadeIn(1 );
        });

    });

$(document).ready(function(){
        $("#7").click(function () {
        $(".content1").hide();
        $(".content2").hide();
        $(".content4").hide();
        $(".content5").hide();
        $(".content3").hide();
        $(".content6").hide();
        $(".content8").hide();
        $(".content7").fadeIn(1 );
        });

    });

$(document).ready(function(){
        $("#8").click(function () {
        $(".content1").hide();
        $(".content2").hide();
        $(".content4").hide();
        $(".content5").hide();
        $(".content3").hide();
        $(".content7").hide();
        $(".content6").hide();
        $(".content8").fadeIn(1 );
        });

    });
$(document).ready(function(){
$(".myImg").hover(function(ev) {
    console.log(1);
    mySrc = $(ev.target).attr('src');
    $(".to_show").attr('src',mySrc)
 });
 });

/*
$(document).ready(function(){
$( "img.img1" ).hover(function() {
  $("#main").attr("src","images/1.jpg");
  
});
  });

$(document).ready(function(){
$( "img.img2" ).hover(function() {
  $("#main").attr("src","images/2.jpg");
  
});
  });

$(document).ready(function(){
$( "img.img3" ).hover(function() {
  $("#main").attr("src","images/3.jpg");
  
});
  });

$(document).ready(function(){
$( "img.img4" ).hover(function() {
  $("#main").attr("src","images/4.jpg");
  
});
  });

$(document).ready(function(){
$( "img.img5" ).hover(function() {
  $("#main").attr("src","images/5.jpg");
  
});
  });

$(document).ready(function(){
$( "img.img6" ).hover(function() {
  $("#main").attr("src","images/6.jpg");
  
});
  });

$(document).ready(function(){
$( "img.img7" ).hover(function() {
  $("#main").attr("src","images/7.jpg");
  
});
  });

$(document).ready(function(){
$( "img.img8" ).hover(function() {
  $("#main").attr("src","images/8.jpg");
  
});
  });

$(document).ready(function(){
$( "img.img9" ).hover(function() {
  $("#main").attr("src","images/9.jpg");
  
});
  });

$(document).ready(function(){
$( "img.img10" ).hover(function() {
  $("#main").attr("src","images/10.jpg");
  
});
  });

$(document).ready(function(){
$( "img.img11" ).hover(function() {
  $("#main").attr("src","images/11.jpg");
  
});
  });

$(document).ready(function(){
$( "img.img12" ).hover(function() {
  $("#main").attr("src","images/12.jpg");
  
});
  });
  */