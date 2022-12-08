//R I G H T  S I D E
document.getElementById('contacts-link').addEventListener('click', () => {
    document.querySelector('.rightside-menu').classList.add('active');
    document.querySelector('.rightside-menu__close').classList.add('rightside-menu__close-active');
  });

  
  document.querySelector('.rightside-menu__close').addEventListener('click', () => {
    document.querySelector('.rightside-menu').classList.remove('active');
    document.querySelector('.rightside-menu__close').classList.remove('close-menu-active')
  });
    


