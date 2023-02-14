
// S W I P E R
const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  slidesPerView: 2,
  breakpoints: {
    816: {
      slidesPerView: 4,
    }
  },


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },



  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    freeModeSticky: true,
    dragSize: 195,
  },

  scrollbarDragStart: {
    event: MouseEvent,
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
    
});

const swiper2 = new Swiper('.swiper2', {

  direction: 'horizontal',
  slidesPerView: 2,
  breakpoints: {
    816: {
      slidesPerView: 4,
    }
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    freeModeSticky: true,
    dynamicMainBullets: 2,
    dragSize: 195,
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


// N U M B E R  + -

$('.minus').click(function () {
  var $input = $(this).parent().find('input');
  var count = parseInt($input.val()) - 1;
  count = count < 1 ? 1 : count;
  $input.val(count);
  $input.change();
  return false;
});
$('.plus').click(function () {
  var $input = $(this).parent().find('input');
  $input.val(parseInt($input.val()) + 1);
  $input.change();
  return false;
});

// A D D  P R O D U C T
$('.add-product').click(function () {
$("#product-in-cart").text(parseInt($("#product-in-cart").text()) + 1);
});

//M E N U
// $('.header__btn-menu').on('click', function () {
//   $('.media-menu').toggleClass('media-menu--open')
// });

  
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
    


 //  M E D I A  M E N U
 document.getElementById('btn-menu').addEventListener('click', () => {
  document.querySelector('.media-menu').classList.add('active');
  });
  
  document.querySelector('.media-menu__btn-close').addEventListener('click', () => {
  document.querySelector('.media-menu').classList.remove('active');
  });


  AOS.init();

  AOS.init({
    duration: 1400,
  });
