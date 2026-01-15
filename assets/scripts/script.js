// NAVIGATION
  let btn = document.getElementById('hamburgerBtn');
  let menu = document.getElementById('mobileMenu');

  btn.addEventListener('click', function () {
    menu.classList.toggle('hidden');
    navbar.classList.toggle('menu-open');
    
  });

  // Close menu when any link is clicked
  let menuLinks = menu.querySelectorAll('a');
  for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function () {
      menu.classList.add('hidden');
    });
  }

// SLIDER
$('.services-slide').slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows:false,
  dots:false,
  infinite:true,
  
   responsive: [
        {
          breakpoint: 1024, // For tablets
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 640, // For mobile
          settings: {
            slidesToShow: 1,
              slidesToScroll: 1,

          }
        }
      ]
    });

  

// update the counter every time the slide changes
$('.services-slide').on('afterChange', function(event, slick, currentSlide){
  let number = currentSlide + 1;          // slides start at 0
  let show = ('0' + number).slice(-2);    // always keep 2 digits
  $('#counter').text(show + ' / 05');     // total slides = 5
});



  $('.custom-prev').click(function() {
    $('.services-slide').slick('slickPrev');
  });
  
  $('.custom-next').click(function() {
    $('.services-slide').slick('slickNext');
  });


  //TESTIMONIAL SLIDER
$(document).ready(function(){
  $('.testimonial-cards').slick({
    arrows: false, // hide default arrows
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:false,
    autoplay: true,
    autoplaySpeed: 2300,
  });

});

// ========== FAQ ACCORDION ==========
  
$(".faq-title").click(function () {
  $(this).parent().toggleClass("open");
});


// VIDEO
document.addEventListener('DOMContentLoaded', function () {
  var video = document.querySelector('video');

  if (video) {
    video.load();
  }
});



