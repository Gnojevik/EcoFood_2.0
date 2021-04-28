document.getElementById('scripHeader').onload = function () { functionality() }; // чекаєм поки прогрузиться хедер

function functionality() {

   let cart = [];
   let buttonsAddToCart = document.getElementsByClassName('add-to-card');
   let buttonClearcart = document.getElementById('clearCard');
   buttonClearcart.addEventListener('click', clearCart);

   for (let index = 0; index < buttonsAddToCart.length; index++) {
      buttonsAddToCart[index].addEventListener('click', addToCart);
   }
   // ============= функція додавання елементів в корзину =============
   function addToCart(event) {
      let count = document.getElementById('count');

      count.innerText++;

      let id = event.target.parentNode.id;
      let oneProduct = productsArr.find(item => Number(item.id) === Number(id));
      let newarr = productsArr;
      if (oneProduct === undefined) {
         alert('Not found!');
      } else {
         let findProduct = cart.find(item => Number(item.product.id) === Number(id));
         if (!findProduct) {
            let product = {
               product: oneProduct,
               amount: 1
            }
            cart.push(product);
         } else {
            findProduct.amount++;
         }

      }
   }
   // ================= функція очистки корзини =================
   function clearCart(event) {

      count.innerText = 0;
      cart = [];
   }

   // ============ Show cart =====================
   let modal = document.getElementById('modal-cart');
   let showCart = document.getElementById('show-card');
   let closeSpan = document.getElementsByClassName('close')[0];

   showCart.addEventListener('click', modalCart);

   function modalCart(event) {
      let str = '';
      if (cart.length < 1) {
         str += '<p class = "row"> 0 products in cart :( </p>';
      } else {
         for (let i = 0; i < cart.length; i++) {
            str += `<article id="${cart[i].product.id}" class="row tablet">
            <p class="col">${cart[i].product.name}</p>
            <p class="col">&#36;<span>${cart[i].product.price.toFixed(2)}</span></p>
            <input class="product-amount col" type="number" min="1" max="100" value="${cart[i].amount}">
            <p class="col">&#36;<span> ${(cart[i].amount * cart[i].product.price).toFixed(2)} </span></p>
         </article>`

         }
      }

      document.getElementById('cart-body').innerHTML = str;
      modal.style.display = "block";

      let productAmountInputs = document.getElementsByClassName('product-amount');
      for (let i = 0; i < productAmountInputs.length; i++) {
         productAmountInputs[i].addEventListener('input', priceByProduct);

      }

      totalPrice();
   }

   // сумма одного продукту
   function priceByProduct(event) {
      let newAmount = event.target.value;
      let id = event.target.parentNode.id;

      let product = cart.find(item => Number(item.product.id) === Number(id));

      if (product) {
         product.amount = newAmount;
      }
      modalCart();
   }

   //  totalPrice 

   function totalPrice() {
      let sum = 0;
      let newCountCart = 0;
      for (let i = 0; i < cart.length; i++) {
         sum += Number(cart[i].product.price) * Number(cart[i].amount);
         newCountCart += Number(cart[i].amount);

      }
      document.getElementById('totalPrice').innerText = sum.toFixed(2);
      count.innerText = newCountCart; // переписуємо нову кількість продуктів у кошику що на головній
   }

   //  закриваєм модалку по кнопці спан 

   closeSpan.onclick = function () {
      modal.style.display = "none";
   }
   //  закриваєм модалку по кліку за межами модалки

   window.onclick = function (event) {
      if (event.target == modal) {
         modal.style.display = "none";
      }
   }

   // ==================================================
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



