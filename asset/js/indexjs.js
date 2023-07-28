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
