$(document).ready(function(){
  /*modal video plagin*/
  new ModalVideo('.video-btn');

  /*projrace ber plugin*/
  $('#bar1').barfiller({
    barColor:'#ff3d4f'
});
$('#bar2').barfiller({
    barColor:'#ff3d4f'
});
$('#bar3').barfiller({
    barColor:'#ff3d4f'
});
$('#bar4').barfiller({
    barColor:'#ff3d4f'
});

/*team carousel slider*/
$(".tema-slider").owlCarousel({
  loop:true,
  dots:false,
  margin: 30,
  autoplay: true,
  navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
  nav:false,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
}
});

/*counter up */
$('.count').counterUp({
  delay: 10,
  time: 1000
    }); 

/*testmonial-carousel*/
$(".testmonial-slide").owlCarousel({
  loop:true,
  nav:true,
  dots:false,
  margin: 30,
  autoplay: false,
  navText: ["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
}
});

/* isotope js*/
$(".project-list").isotope({
  percentPosition: true
});
    
    $(".filter-project li").on('click', function(){
        $(".filter-project li").removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr("data-filter");
        $(".project-list").isotope({
            filter: selector,
            
        });
    });
    
    /*offcanvas js*/
    $(".header-bar").on("click", function(){
      $(".offcanvas-manu, .offcanvas-overylay").addClass("active");  
    });
    
    
    $(".manu-close, .offcanvas-overylay").on("click", function(){
      $(".offcanvas-manu, .offcanvas-overylay").removeClass("active");  
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

})