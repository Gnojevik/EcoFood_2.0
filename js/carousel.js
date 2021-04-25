let slideIndex = 1;
let timer;
let onSlide = document.getElementsByClassName('carousel');   // шукаєм нашу карусель

onSlide[0].addEventListener("mouseenter", () => clearTimeout(timer), false);   // вішаєм слухача якщо мишка на каруселі зупиняєм автоматичну прокрутку
onSlide[0].addEventListener("mouseleave", () => autoSlides(), false); // і якщо мишка покидає карусель відновлюєм автопрокрутку

autoSlides();

//========== кнопки прокрутки вперід та назад==========
function plusSlides(n) {
   showSlides(slideIndex += n);
}

//========== функція переключення по крапочках під каруселю=======

function currentSlide(n) {
   showSlides(slideIndex = n);
}

//========== функція переключення слайдів вручну=========

function showSlides(n) {

   let i;
   let slides = document.getElementsByClassName("mySlides");
   let dots = document.getElementsByClassName("dot");
   if (n > slides.length) { slideIndex = 1 }
   if (n < 1) { slideIndex = slides.length }
   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex - 1].style.display = "block";
   dots[slideIndex - 1].className += " active";

   console.log(`index in show = ${slideIndex}`);
}

//=========== функція автопрокрутки каруселі ==============

function autoSlides() {
   let i;
   let slides = document.getElementsByClassName("mySlides");
   let dots = document.getElementsByClassName("dot");
   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }
   slideIndex++;

   if (slideIndex > slides.length) { slideIndex = 1 }
   for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex - 1].style.display = "block";
   dots[slideIndex - 1].className += " active";

   timer = setTimeout(autoSlides, 4000);

}