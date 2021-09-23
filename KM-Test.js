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

  // Change the button colour and style
  document.head.insertAdjacentHTML(
    "beforebegin",
    "<style>#product-addtocart-button{background: linear-gradient(91.01deg, #D26E4B 18.06%, #0CBBF4 118.35%) box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); border-radius: 22px; background: linear-gradient(91.01deg, #D26E4B 18.06%, #0CBBF4 118.35%);}</style>"
  );
};
