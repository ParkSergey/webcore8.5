const swiper = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 'auto',
});

const button = document.querySelector('.hidden-button');
const brands = document.querySelector('.brands');
const buttonText = button.querySelector('span');
const icon = button.querySelector('img');

button.addEventListener('click', () => {
  if (window.innerWidth < 1120) {
    return;
  }

  brands.classList.toggle('expanded');

  if (brands.classList.contains('expanded')) {
    buttonText.textContent = 'Скрыть';
    icon.style.transform = 'rotate(180deg)';
  } else {
    buttonText.textContent = 'Показать все';
    icon.style.transform = 'rotate(0deg)';
  }
});