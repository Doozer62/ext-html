// S W I P E R

const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 35,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    freeModeSticky: true,
    dynamicMainBullets: 2,
  },

  scrollbarDragStart: {
    event: MouseEvent,
  },

  // effect: 'coverflow',
  // coverflowEffect: {
  //   rotate: 10,
  //   slideShadows: false,
  // },

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
    
});

const swiper2 = new Swiper('.swiper2', {

  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 35,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    freeModeSticky: true,
    dynamicMainBullets: 2,
  },

  scrollbarDragStart: {
    event: MouseEvent,
  },

  pagination: {
    el: '.swiper-pagination2',
    type: 'fraction',
  },
    
});

const swiperReviews = new Swiper('.swiper-reviews', {

  direction: 'horizontal',
  slidesPerView: 1,

  navigation: {
    nextEl: '.swiper-button-next-reviews',
    prevEl: '.swiper-button-prev-reviews',
  },

  pagination: {
    el: '.swiper-pagination-reviews',
  },
    
});


$(function () {
  $('.top__slider').slick({
    dots: true,
    arrows: false,
    infinite: false,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
  });

  // M I X I T U P
  const mixer = mixitup('.filters-inner', {
    animation: {
      enable: true
    }
  });
});

//R I G H T  S I D E
document.getElementById('contacts-link').addEventListener('click', () => {
    document.querySelector('.rightside-menu').classList.add('active');
  });

  document.querySelector('.rightside-menu__close').addEventListener('click', () => {
    document.querySelector('.rightside-menu').classList.remove('active');
  });
    
  //D R O P  D O W N
  document.querySelector('.drop-btn').addEventListener('click', () => {
    document.querySelector('.dropdown-content').classList.add('active');
  });

  document.addEventListener("click", function(e) {
    const m = document.getElementById('dropdown-content');
    if (e.target.id != 'drop-btn' && e.target.id != 'dropdown-content') {
      m.style.display = 'none';
      
    } else if (e.target.id == 'drop-btn') {
      m.style.display = (m.style.display != 'block') ? 'block' : 'none';
    } 
  });


  // A C C O R D I O N

  const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

  // F A N C Y  B O X
  // const myCarousel = new Carousel(document.querySelector(".carousel"), {

  // });

  
const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
  Dots: true,
  Navigation: false,
  on: {
    createSlide: (carousel, slide) => {
      slide.Panzoom = new Panzoom(slide.$el.querySelector(".panzoom"), {
        panOnlyZoomed: true,
        resizeParent: true,
      });
    },
    deleteSlide: (carousel, slide) => {
      if (slide.Panzoom) {
        slide.Panzoom.destroy();
        slide.Panzoom = null;
      }
    },
  },
});

const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
  Sync: {
    target: mainCarousel,
    friction: 0,
  },
  Dots: false,
  Navigation: false,
  center: false,
  infinite: false,
});


  var $ = require('jquery');
require('fancybox')($);

$(document).ready(function() {
    $.fancybox.open($('.fancybox-me'));

});











