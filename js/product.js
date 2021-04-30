let queryString = new Array(); //[]


window.onload = function () {
   if (queryString.length == 0) {
      if (window.location.search.split('?').length > 1) {
         let linkArr = window.location.search.split('?');


         for (var i = 1; i < linkArr.length; i++) {
            var key = linkArr[i].split('=')[0];
            var value = decodeURIComponent(linkArr[i].split('=')[1]);
            queryString[key] = value;
         }
      }
   }

   if (queryString['productName'] && queryString['price']) {
      document.getElementById('product-name').innerText = queryString['productName']; //Lemon
      document.getElementById('product-img').src = `./img/main/products/${queryString['productName'].toLowerCase()}.jpg`; // img
      document.getElementById('product-img').alt = queryString['productName']; // alt img
      document.getElementById('price').innerText = queryString['price'];  // price
      document.getElementById('price-variant').innerText = queryString['price'];
      document.getElementById('sale').innerText = (Number(queryString['price']) - (Number(queryString['price']) * 0.25)).toFixed(2); // sale 25%
   }
}

// ======== button go back ============
let goBackButton = document.getElementById('goBackButton');
goBackButton.addEventListener('click', back = () => window.history.back());