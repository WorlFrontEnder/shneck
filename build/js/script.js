$(document).ready(function(){
    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1360,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1075,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 740,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          
        ]
      });

      $('.production__btn').click(function(e) {
        $('.production__btn').text(function(_,txt) {
            var ret='';
    
            if ( txt == 'Свернуть' ) {
               ret = 'Показать еще';
            }else{
               ret = 'Свернуть';
            }
            return ret;
        });
        return false;
        e.preventDefault();
    });


     
 var btn__down = $(".production__btn");
 var btn__toggle = $(".hidden");

   $(btn__down).on( "click", function(e) {
      $(btn__toggle).slideToggle("slow");
      e.preventDefault();
    });

    $('.open-popup-link_form').magnificPopup({
      type:'inline',
      midClick: true
    });

    $('.open-popup-link_form2').magnificPopup({
      type:'inline',
      midClick: true
    });

    $('.open-popup-link_form3').magnificPopup({
      type:'inline',
      midClick: true
    });

    $('.open-popup-link_form4').magnificPopup({
      type:'inline',
      midClick: true
    });

    $('.open-popup-link_form5').magnificPopup({
      type:'inline',
      midClick: true
    });

    $('.open-popup-link_form6').magnificPopup({
      type:'inline',
      midClick: true
    });

    $('.image-popup-vertical-fit-2').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      mainClass: 'mfp-img-mobile',
      image: {
        verticalFit: true
      }   
    });

    $(function() {
      $('#down').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').stop().animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });


    $(function() {
      $('#down2').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').stop().animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });


    $(function() {
      $('#down3').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').stop().animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });



    $(function() {
      $('#down4').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').stop().animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

    $(function() {
      $('.header__menu li a').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').stop().animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

    

    // Поп-ап формы
    $('.open-popup-link_form').magnificPopup({
      type:'inline',
      midClick: true
    });

   var mobileBtn       =  $(".mobil__btn");
   var mobilMenu       =  $(".header__menu, .header__phone");
   var mobilMenuHidden =  $(".header__menu li a");

   $(mobileBtn).on('click', function(){
     mobilMenu.slideToggle();
   });

   $(mobilMenuHidden).on('click', function(){
     mobilMenu.hide();
  });

  
});