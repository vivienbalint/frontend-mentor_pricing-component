let monthly = document.querySelectorAll(".price-monthly");
let annually = document.querySelectorAll(".price-annually");
const slider = document.getElementById("slider");

function togglePricing() {
  if (!slider.checked) {
    annually.forEach((item) => {
      item.classList.toggle("hide");
    });
    monthly.forEach((monthlyPrice) => {
      monthlyPrice.classList.remove("hide");
    });
  } else {
    monthly.forEach((item) => {
      item.classList.toggle("hide");
    });
    annually.forEach((annuallyPrice) => {
      annuallyPrice.classList.remove("hide");
    });
  }
}
