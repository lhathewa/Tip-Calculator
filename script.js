var containerEle = document.body.querySelector(".container");

var num1 = Number(prompt("what is your bill total?"));

var taxed = num1 * 0.07;
var total = taxed + num1;
var tip = total * 0.05;
var final = tip + total;

containerEle.innerHTML = "Your Final Bill Total is " + final;