// login

$(".js-login").click(function(){
    $(".login-modal").show();
})

$(".modal-close").click(function(){
    $(".login-modal").hide();
})

// sidebar

$(".menu-btn").click(function(){
    $(".sidebar-warp").show();
});

$(".js-close").click(function(){
    $(".sidebar-warp").hide();
});

// subMenu
   
   $(document).ready(function(){
        $('.sidebar-item .menu p').click(function(){
            $(this).next('.sub-container').slideToggle()
            $(this).find('.fa-play').toggleClass('arrow-active')
        });
   });

// fixed nav
$(document).ready(function(){
    $(window).bind('scroll', function() {
    var navHeight = $( window ).height() - 450;
          if ($(window).scrollTop() > navHeight) {
            $("nav").css({
                "z-index": "1000",
                "position": "fixed",
                "top": "0px",
                "color": "blue",
                "margin-left": "0px",
                "left": "0px",
            })
            $('nav .sub ul li').css({
                "margin": "0"
            })
            $('nav').addClass('fixed');
          }
          else {
            $("nav").css({
               " z-index": "auto",
                "position": "static",
                "top": "auto",
            })
            $('nav').removeClass('fixed');  
          }
     });
 });

//  back to top

    var offset = 150;
    var duration = 750;
    $(function(){
        $(window).scroll(function () {
            if ($(this).scrollTop() > offset)
            $('#top-up').fadeIn(duration);else
            $('#top-up').fadeOut(duration);
        });
        $('#top-up').click(function () {
        $('body,html').animate({scrollTop: 0}, duration);
    });
});

// Slider

$(document).ready(function() {
    $('#prevBanner').on('click', function(){
        $('#im_' + currentItem).stop().fadeOut(1);
        $('#item_' + currentItem).removeClass('option-click')
        decreaseItem();
        $('#im_' + currentItem).stop().fadeIn(1);
        $('#item_' + currentItem).addClass('option-click')
        });
        
    $('#nextBanner').on('click', function(){
    $('#im_' + currentItem).stop().fadeOut(1);
    $('#item_' + currentItem).removeClass('option-click')
    increaseItem();
    $('#im_' + currentItem).stop().fadeIn(1);
    $('#item_' + currentItem).addClass('option-click')
    });
    
    var currentItem = 1;
    var totalItem = 4;

    function increaseItem(){
        ++currentItem;
        if(currentItem > totalItem){
            currentItem = 1;
        }
    }

    function decreaseItem(){
        --currentItem;
        if(currentItem < totalItem){
            currentItem = totalItem;
        }
    }

    window.setInterval(function() {
        $('#nextBanner').click();
        }, 5000);
    });

// Glider product

    window.addEventListener('load', function(){
        new Glider(document.querySelector('.glider'), {
            slidesToScroll: 1,
            slidesToShow: 5,
            draggable: true,
            arrows: {
              prev: '.glider-prev',
              next: '.glider-next'
            }
          });
        });

// Show more
