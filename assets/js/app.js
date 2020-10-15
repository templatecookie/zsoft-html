const menuClick = document.querySelector('.menu');
const menuContent = document.querySelector('.menu_content');
const section = document.querySelectorAll('.none');
menuClick.addEventListener('click', e => {
  menuClick.classList.toggle('active');
  menuContent.classList.toggle('open');
  // display none all section after click menu
  section.forEach(content => {
    content.classList.toggle('active');
  });
});



$(document).ready(function () {
  //brand_slider
  $('.brand-active').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3
  });

//testimonial_slider
$('.testimonial-active').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 3
});

});