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
};
