// const addButtons = document.querySelectorAll(".add-to-cart");
// const cartItems = document.querySelector(".cart-items");
// const totalPriceElement = document.getElementById("total-price");

// const { use } = require("react");

// let total = 0;
// let cart = []; // آرایه برای ذخیره محصولات

// addButtons.forEach(button => {
//   button.addEventListener("click", () => {
//     const product = button.parentElement;
//     const name = product.querySelector("h3").textContent;
//     const price = parseInt(product.querySelector(".price").dataset.price);

//     // چک کن آیا محصول از قبل تو سبد هست یا نه
//     const existingItem = cart.find(item => item.name === name);
//     if (existingItem) {
//       existingItem.quantity += 1;
//     } else {
//       cart.push({ name, price, quantity: 1 });
//     }

//     // آپدیت نمایش سبد خرید
//     renderCart();
//   });
// });

// function renderCart() {
//   cartItems.innerHTML = ""; // پاک‌کردن لیست قبلی
//   total = 0;

//   cart.forEach(item => {
//     const li = document.createElement("li");
//     li.textContent = `${item.name} × ${item.quantity}`;
//     const itemTotal = item.price * item.quantity;
//     const priceSpan = document.createElement("span");
//     priceSpan.textContent = itemTotal.toLocaleString() + " تومان";
//     li.appendChild(priceSpan);
//     cartItems.appendChild(li);

//     total += itemTotal;
//   });

//   totalPriceElement.textContent = total.toLocaleString();
// }




























const addBtn = document.getElementById("addBtn");
const container = document.getElementById("container");

addBtn.addEventListener("click", function(){
    const p = document.createElement("p");
    p.innerText = "ساختن یه متن جدید";
    container.appendChild(p)
});