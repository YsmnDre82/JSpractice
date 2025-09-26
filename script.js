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



























// انتخاب دکمه
const btn = document.getElementById("changBtn");

// گوش دادن به کلیک دکمه
btn.addEventListener("click", function(){
    // تغییر متن h1
    const title = document.getElementById("title");
    title.innerText = "سلام یاسی جوون"

    // تغییر html داخل div
    const box = document.getElementById("box");
    box.innerHTML = "<b>یاسی خیلی جذابه</b>"

    // تغییر استایل
    box.style.color = "white"; 
    box.style.background = "purple"; 
    box.style.borderRadius = "10px"; 
});