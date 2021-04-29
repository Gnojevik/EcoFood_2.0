let xhr = new XMLHttpRequest();
let productsArr = [];

xhr.open('GET', './json/products.json', true);
xhr.responseType = 'json';

xhr.send();


xhr.onload = function () {
   products(xhr.response);
   goToProduct();
   functionality();


}

function products(jsonObj) {
   productsArr = jsonObj.products;
   let productsHTML = document.getElementById('products');
   let str = '<h2>Most Popular Products</h2>';

   productsHTML.innerHTML = str;
   for (let i = 0; i < productsArr.length; i++) {

      str += '<article id="' + productsArr[i].id + '"' + 'class="products__item tablet">' +
         '<div class="foto-product">' +
         '<img src="' + productsArr[i].imgUrl + '" alt="' + productsArr[i].name + '">' +
         '</div>' +
         '<h3>' + productsArr[i].name + '</h3>' +
         '<p>' + productsArr[i].price + '</p>' +
         '<button class="add-to-card button">Add to card</button>' +
         '</article>'
   }
   productsHTML.innerHTML = str;
}

// ========== go to product details ===========
function goToProduct() {
   let productImgArr = document.getElementsByClassName('foto-product');

   for (let index = 0; index < productImgArr.length; index++) {
      productImgArr[index].addEventListener('click', goToProductDetails);
   }

   function goToProductDetails(event) {
      let productName = event.target;
      window.location = 'product.html?productName=' + productName.alt;
   }
}
