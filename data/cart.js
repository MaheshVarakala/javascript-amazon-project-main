export const cart = [];

 export function addToCart(productId) {
  let matchingItem;

   cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
   });

   const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);

   const quantity = Number(quantitySelector.value);

   if (matchingItem) {
    matchingItem.quantity += 1;
   } else {
    cart.push({
      productId,
      quantity
     });
   }

}