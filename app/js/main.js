

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
  },

  scrollbarDragStart: {
    event: MouseEvent,
  },

  effect: 'coverflow',
  coverflowEffect: {
    rotate: 10,
    slideShadows: false,
  },


});




$(function () {
  $('.top__slider').slick({
    dots: true,
    arrows: false,
    infinite: false,
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
    let m = document.getElementById('dropdown-content');
    if (e.target.id != 'drop-btn' && e.target.id != 'dropdown-content') {
      m.style.display = 'none';
    } else if (e.target.id == 'drop-btn') {
      m.style.display = (m.style.display != 'block') ? 'block' : 'none';
    }
  });








