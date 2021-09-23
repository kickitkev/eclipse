window.onload = function () {
  // Add £0.01 to the total cart display in the navbar
  const originalTotal = document.querySelector(
    ".minicart-wrapper__summary-subtotal > span:first-child"
  );
  let subTotal = originalTotal.innerHTML;
  let TotalReplace = subTotal.replace(/£/, "").trim();
  let increment = 0.01;
  let ParsedTotal = (parseFloat(TotalReplace) + increment).toFixed(2);
  originalTotal.innerHTML = ParsedTotal;

  // Change content of the Main CTA
  const addToCartBtnEl = document.querySelector(
    "#product-addtocart-button > span:first-child"
  );
  addToCartBtnEl.innerHTML = "£21.99 - Add to Cart";
};
