let xhr = new XMLHttpRequest();
let productsArr = [];

xhr.open('GET', 'http://127.0.0.1:5500/json/products.json', true);
xhr.responseType = 'json';

xhr.send();

xhr.onload = function () {
   products(xhr.response);
   functionality();
}

function products(jsonObj) {
   productsArr = jsonObj.products;
   let productsHTML = document.getElementById('products');
   let str = '<h2>Most Popular Products</h2>';

   productsHTML.innerHTML = str;
   for (let i = 0; i < productsArr.length; i++) {

      str += '<article id="' + productsArr[i].id + '"' + 'class="products__item tablet">' +
         '<a href="./pages/product.html">' +
         '<div class="foto-product">' +
         '<img src="' + productsArr[i].imgUrl + '" alt="' + productsArr[i].name + '">' +
         '</div>' +
         '</a>' +
         '<h3>' + productsArr[i].name + '</h3>' +
         '<p>' + productsArr[i].price + '</p>' +
         '<button class="add-to-card button">Add to card</button>' +
         '</article>'
   }
   productsHTML.innerHTML = str;
}

// ============ button top 800px ========================
let buttonTop = document.getElementById('buttonTop');
window.onscroll = function () {
   if (document.documentElement.scrollTop > 800) {
      buttonTop.classList.add('show');
   } else {
      buttonTop.classList.remove('show');
   }
}

buttonTop.addEventListener('click', scrollTop);

function scrollTop(event) {
   document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth'
   });
}

// ======================================