const person = {};

person.name = prompt("نام شما چیست؟");
person.age = prompt("سن شما چند سال است؟");
person.city = prompt("کدام شهر زندگی میکنید؟");
person.hobbies = prompt("سه تا از علایق خود را بنویسید").split(",");


let info = `اطلاعات وارد شده:
نام: ${person.name}
سن: ${person.age}
شهر: ${person.city}
علایق: ${person.hobbies.join("-")}`;

alert(info);