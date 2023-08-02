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


    $('.item a').click(function(){
        $(this).parent().css({
            "border": "green solid 3px"
        })

        $(this).children().css({
            "color": "green",
            "border": "none"
        })

        $(this).siblings().css({
            "border": "1px solid #ccc",
        })
    })

// specs modal
    $('.specs-modal-show').click(function(){
        $('.specs-modal').show();
    })
    
    $(".modal-close").click(function(){
        $(".login-modal").hide();
    })
    