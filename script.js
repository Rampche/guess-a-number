const message = document.querySelector(".message");
let number = document.querySelector(".box-with-a-number");
let numberToCheck = document.querySelector(".number-to-check");
const againBtn = document.querySelector(".btn-again");
const checkBtn = document.querySelector(".check");
let chances = (document.querySelector(".chances").innerText = 5);

//Creating the randomized number
number = Math.round(Math.random() * 9 + 1);


//Reload the page when button is clicked
const refresh = () => {
  againBtn.addEventListener("click", () => {
    window.location.reload();
  });
};
refresh();

//Check if the number is correct
const checkNumber = () => {
  if (numberToCheck.value == "") {
    alert("Insert a number please");
  } else if (numberToCheck.value == number) {
    document.body.style.background = "#a2c723";
    document.querySelector(".number-to-check").style.background = "#a2c723";
    message.innerText = "WELL DONE!!! YOU'RE REALLY GOOD!!";
    document.querySelector(".box-with-a-number").innerText = number;
    checkBtn.disabled = true;
  } else if (numberToCheck.value > 10 && numberToCheck.value > number) {
    message.innerText = "Ops, the number must be  between 1 and 10.";
  } else if (numberToCheck.value < number) {
    message.textContent = "Wrong! Try a little higher number";
    document.querySelector(".chances").innerText--;
  } else if (numberToCheck.value > number) {
    message.textContent = "Wrong! Try a little lower number";
    document.querySelector(".chances").innerText--;
  }
  if (document.querySelector(".chances").innerText == 0) {
    message.textContent = "You've lost. Please restart the game.";
    checkBtn.disabled = true;
  }
};

//Check the number when button is clicked
const checkOnClick = () => {
  checkBtn.addEventListener("click", () => {
    checkNumber();
  });
};
checkOnClick();
