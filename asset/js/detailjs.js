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
    new Glider(document.querySelector('.list-imgPreview .glider'), {
        slidesToScroll: 1,
        slidesToShow: 4,
        draggable: true,
        arrows: {
          prev: '.list-imgPreview .glider-prev',
          next: '.list-imgPreview .glider-next'
        }
      });
      window.setInterval(function() {
          $('.glider-next').click();
          }, 7000);
    });

    new Glider(document.querySelector('.imagePreview .glider'), {
        slidesToShow: 1,
        dots: '#dots',
        draggable: true,
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        }
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
    
    new Glider(document.querySelector('.fancybox .glider'), {
        slidesToShow: 1,
        dots: '#dots',
        draggable: true,
        arrows: {
          prev: '.glider-prev a' ,
          next: '.glider-next a'
        }
      });
// open/close fancy

      $('.product-img-slider').click(function(){
        $('.fancybox').show();
      })

      $('#fancyClose').click(function(){
        $('.fancybox').hide();
      })

// zoom

      $('#imageZoom').click(function(){
        $('fancy-image').toggleClass('.zoom')

    })
    
    
        $('#imagePlay').click(function(){
            setInterval(function(){
                $('#nextFancy').click();
            }, 5000)
        });
    

  