let num1 = 8;
let num2 = 2;
document.getElementById('num1-el').textContent = num1;
document.getElementById('num2-el').textContent = num2;
let sumEl = document.getElementById('sum-el');

function add() {
  let add = num1 + num2;
  sumEl.textContent = 'SUM :' + add;
}
function sub() {
  let sub = num1 - num2;
  sumEl.textContent = 'SUM :' + sub;
}
function mul() {
  let mul = num1 * num2;
  sumEl.textContent = 'SUM :' + mul;
}
function div() {
  let div = num1 / num2;
  sumEl.textContent = 'SUM :' + div;
}
