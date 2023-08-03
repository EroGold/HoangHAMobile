// Show more
$('.view-more-container a').click(function(){

    var showText = $(this).text().toUpperCase();

    if(showText === "XEM THÊM"){
        $('.product-text').css({
            "height": "auto",
            "overflow": "auto"
        })
        $('#viewMore').css({
            "display": "none"
        })
        $('#viewLess').css({
            "display": "block"
        })
    }else{
        $('.product-text').css({
            "height": "682px",
            "overflow": "hidden"
        })
        $('#viewMore').css({
            "display": "block"
        })
        $('#viewLess').css({
            "display": "none"
        })
    }
})

// glider img   

window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
        slidesToScroll: 1,
        slidesToShow: 4,
        draggable: true,
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        }
      });
    });


    $('.item').click(function(){
        $(this).toggleClass('active')
    })

// specs modal
    $('.specs-modal-show').click(function(){
        $('.specs-modal').show();
    })
    
    $(".close-specs-modal").click(function(){
        $(".specs-modal").hide();
    })
    
$('.imagePreview').click(function(){
    $(this).css({
        "position": "fixed",
        "background-color": "rgba(0 ,0 ,0 , 0.75",
        "width": "100%",
        "height": "100%",
        "z-index": "99999",
        "text-align": "center",
        "top": "0",
        "left": "0"
    })

    $('.product-image .product-img-slider img').css({
        "width": "60rem"
    })

    $('.list-imgPreview').css({
        "display": "none"
    })
})

$('imagePreview img').focusout(function(){
    $(this).css({
        "width": "38rem",
        "height": "37rem"
    })
})