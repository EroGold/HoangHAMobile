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
