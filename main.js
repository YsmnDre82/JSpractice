const handleOrder = () => {
  // گرفتن نام با مقدار پیش‌فرض
  let nameInput = prompt("لطفاً نام خود را وارد کنید (می‌توانید خالی بگذارید)");
  let customerName = nameInput || undefined;


  // گرفتن نوشیدنی (اجباری)
  let drinkType = prompt("نوع نوشیدنی خود را وارد کنید (مثلاً قهوه، نسکافه، چای)");

  if (!drinkType) return alert("🚫 لطفاً نوع نوشیدنی را وارد کنید!");

  // افزودنی‌ها به صورت رشته جدا شده با ویرگول
  let extrasInput = prompt("افزودنی‌ها (مثلاً: شکر,شیر,دارچین). اگر چیزی ندارید، خالی بگذارید.");

  let extras = extrasInput ? extrasInput.split(",") : [];

  const orderCoffee = (customerName = "مشتری ناشناس", drinkType, ...extras) => {
    let message = `✅ سفارش شما ثبت شد:
    نام مشتری: ${customerName}
    نوشیدنی: ${drinkType}
    `;
    message += extras.length > 0
    ? `افزودنی‌ها:\n- ${extras.join("\n- ")}`
    : "بدون افزودنی";

    alert(message);

  }

  // فراخوانی تابع
  orderCoffee(customerName, drinkType, ...extras);

}