function functionality() {
   let cart = [];
   let buttonsAddToCart = document.getElementsByClassName('add-to-card');
   let buttonClearcart = document.getElementById('clearCard');
   buttonClearcart.addEventListener('click', clearCart);

   for (let index = 0; index < buttonsAddToCart.length; index++) {
      buttonsAddToCart[index].addEventListener('click', addToCart);
   }

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
         console.log(cart);
      }
   }
   // ================= функція очистки корзини =================
   function clearCart(event) {
      count.innerText = 0;
      cart = [];
      console.log('cart cleared');
   }
}



