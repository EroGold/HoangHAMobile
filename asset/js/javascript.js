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

window.onscroll = function(){
    myFunction()
}

var nav = document.getElementById('myNav')
var sticky = nav.offsetTop

function myFunction(){
    if (window.pageYOffset > sticky) {
        nav.classList.add("sticky");
      } else {
        nav.classList.remove("sticky");
        }
    }



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
            arrows: {
              prev: '.glider-prev',
              next: '.glider-next'
            }
          });
        });
