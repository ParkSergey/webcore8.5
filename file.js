var swiper = new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 'auto',
});
const button = document.querySelector('.hidden-button');
button.onclick = showContent(){
  if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block'; // Показываем контент
        button.textContent = 'Скрыть контент'; // Меняем текст кнопки
      } else {
        content.style.display = 'none'; // Скрываем контент
        button.textContent = 'Показать контент'; // Меняем текст кнопки
      }
}
