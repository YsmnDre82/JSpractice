// const magicNumber = 7;

// Math.random 
// Math.floor
// const magicNumber = Math.floor(Math.random() * 10) + 1;


// for (attempt = 1; attempt <= 5; attempt++) {
//   let guess = Number(prompt("عدد جادویی بین 1 تا 10 رو حدس بزن:"));

//   console.log(guess === 0);


//   if (guess === 0) {
//     alert("شما منصرف شدید");
//     break
//   }

//   if (guess < 0) {
//     alert("عدد منفی مجاز نیست!");
//     continue
//   }


  //   Expression (عبارت)
  //   قطعه‌ای از کد که یک مقدار تولید می‌کنه	
  //   3 + 4
  // "hello"
  // x > 5
  // user ? 'yes' : 'no'
  // بله، همیشه یک مقدار برمی‌گردونه	
  // بله، می‌تونه داخل return یا توابع و شرط‌ها قرار بگیره	- قابل استفاده در عبارات دیگر




  // Statement (دستور)
  // قطعه‌ای از کد که یک عمل انجام می‌ده
  // if (x > 5) {...}
  // while (...) {...}
  // break;
  // return;
  // نه، نمی‌تونه داخل عبارت دیگه باشه


  // guess === magicNumber ? (alert("آفرین! درست حدس زدی 🎉"),  break) : alert("اشتباهه! دوباره امتحان کن...");
//   if (guess === magicNumber) {
//     alert("آفرین! درست حدس زدی 🎉");
//     break;
//   } else {
//     alert("اشتباهه! دوباره امتحان کن...");
//   }

//   // &&
//   attempt === 5 && alert("تموم شد! عدد جادویی " + magicNumber + " بود.");
// }





const magicNumber = Math.ceil( Math.random()*10);

let attempt = 1
while ( attempt <= 5) {
  attempt++
  let guess = Number(prompt("عدد جادویی بین 1 تا 10 رو حدس بزن:"));

  if (guess === 0) {
    alert("شما منصرف شدید");
    break
  }
  

  if (guess < 0) {
    alert("عدد منفی مجاز نیست!");
    continue
  }

  if (guess === magicNumber) {
    alert("آفرین! درست حدس زدی 🎉");
    break;
  } else {
    alert("اشتباهه! دوباره امتحان کن...");
  }

  attempt === 5 && alert("تموم شد! عدد جادویی " + magicNumber + " بود.");
}