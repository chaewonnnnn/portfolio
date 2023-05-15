$(document).ready(function() {
    $('.event i').click(function() {
        $('.event').slideUp();
    });
});

$(document).ready(function(){
    $(".slider").bxSlider( {
        auto: true,
        /* controls: false, */
    });
});

/* $(document).ready(function() {
    $(".header_menu > li").hover(function() {
        $(this).find(".depth02").css( {
            "height" : "460px"
        });
    });
}); */
$(document).ready(function() {
    AOS.init();
});

$(document).ready(function() {
    $(".mag1").hover(function() {
        $(".mag_wrap").css( {
            "background-image" : "url(images/magazine-01.png)"
        });
    });
    $(".mag2").hover(function() {
        $(".mag_wrap").css( {
            "background-image" : "url(images/magazine-02.png)"
        });
    });
    $(".mag3").hover(function() {
        $(".mag_wrap").css( {
            "background-image" : "url(images/magazine-03.png)"
        });
    });
});

$(document).ready(function() {
    $(".way a").click(function() {
        $("a").removeClass("wayon");
        $(this).addClass("wayon");
    });
});


$(document).ready(function() {
    $(window).on("scroll", function() {
      var sctop = $(this).scrollTop();
      console.log(sctop);
      if(sctop > 300) {
        $(".top a").addClass("topon")
      } else {
        $(".top a").removeClass("topon")
      };
    })
  });

