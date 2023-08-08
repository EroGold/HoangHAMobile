function nextFancy(){
    $('#nextFancy').click()
}

function prevFancy(){
    $('#prevFancy').click()
}

function autoFancy(){
    setInterval(nextFancy, 1000)
}

function stopFancy(){
    clearInterval(autoFancy)
}

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
            setInterval(function(nextFancy){}, 5000)
        });

        $(document).ready(function() {
            $('#prevFancy').on('click', function(){
                $('#im_' + currentItem).stop().fadeOut(1);
                decreaseItem();
                $('#im_' + currentItem).stop().fadeIn(1);
                });
                
            $('#nextFancy').on('click', function(){
            $('#im_' + currentItem).stop().fadeOut(1);
            increaseItem();
            $('#im_' + currentItem).stop().fadeIn(1);
            });
            
            var currentItem = 1;
            var totalItem = 6;
        
            function increaseItem(){
                ++currentItem;
                if(currentItem > totalItem){
                    currentItem = 1;
                }
            }
        
            function decreaseItem(){
                --currentItem;
                if(currentItem < 1){
                    currentItem = totalItem;
                }
            }
        
            
            });


        

            $('.playSlider').click(function(){
                setInterval(nextFancy, 1000)
                        $('.playSlider').css({
                            "display": "none"
                        })
                        $('.stopPlay').css({
                            "display": "block",
                        })
                    })
     

            $('.stopPlay').click(function(){
                clearInterval(autoFancy);
                $('.stopPlay').css({
                            "display": "none"
                        })
                        $('.playSlider').css({
                            "display": "block",
                        })
            })
