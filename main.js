var number1 = Number(prompt("enter number 1 :"));

var sumString = "+";
var minString = "-";
var mulString = "*";
var divString = "/";

var Opertor = prompt(`please type operator
    ${sumString}
    ${minString}
    ${mulString}
    ${divString}
    `);

var number2 = Number(prompt("enter number 2 :"));

function showResult(answer) {
    return(`your answer is ${answer}`)
};

if (Opertor === sumString) {
    alert(showResult(number1 + number2))
}else if(Opertor === minString){
    alert(showResult(number1 - number2))
}else if(Opertor === mulString){
    alert(showResult(number1 * number2))
}else if(Opertor === divString){
    if (number2 =! 0) {
        alert(showResult(number1 / number2))
    }else{
        alert("error")
    }
}else{
    alert("your type is wrong!")
}