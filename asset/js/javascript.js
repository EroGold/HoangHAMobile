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
            $(this).find('.fa-play').toggleClass('active')
        });
   });

// Slider

$(document).ready(function() {
    $('#prevBanner').on('click', function(){
        $('#im_' + currentImage).stop().fadeOut(1);
        decreaseImage();
        $('#im_' + currentImage).stop().fadeIn(1);
        });
    $('#nextBanner').on('click', function(){
    $('#im_' + currentImage).stop().fadeOut(1);
    increaseImage();
    $('#im_' + currentImage).stop().fadeIn(1);
    });
    
    var currentImage = 1;
    var totalImages = 3;
    
    function increaseImage() {
    ++currentImage;
    if(currentImage > totalImages) {
    currentImage = 1;
    }
    }
    function decreaseImage() {
    --currentImage;
    if(currentImage < 1) {
    currentImage = totalImages;
    }
    }

    window.setInterval(function() {
        $('#prevBanner').click();
        }, 5000);
    });

// product  
    