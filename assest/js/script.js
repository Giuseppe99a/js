{ const number = document.getElementById('Number');
const buttonPlus = document.getElementById('plus');
const buttonMinus = document.getElementById('minus');

buttonPlus.addEventListener('click', add);
buttonMinus.addEventListener('click', subtract);}

{let value = 0;}

function add() {
  const elem = document.getElementById("Counter");
  value++;
  number.innerHTML = value;

}
function subtract(){
  const elem= document.getElementById("Counter");
  value--;
  number.innerHTML= value;
}
function reset(){
  const elem= document.getElementById("Counter");
  value=0;
  number.innerHTML = value;
}