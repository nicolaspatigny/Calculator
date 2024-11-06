const display = document.querySelector(".displayScreen");
const numberButtons = document.querySelectorAll(".numbers");
const operatorButtons = document.querySelectorAll(".operators");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");
const decimalButton = document.querySelector(".decimal");

let firstNumber = "";
let secondNumber = "";
let currentOperation = null;
let shouldResetScreen = false;

numberButtons.forEach((button) => {
  button.addEventListener(click, () => {
    if (shouldResetScreen) {
      display.value = "";
      shouldResetScreen = false;
    }
    display.value += button.textContent;
  });
});

clearButton.addEventListener("click", () => {
  display.value = "";
  firstNumber = "";
  secondNumber = "";
  currentOperation = null;
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentOperation !== null) return;
    firstNumber = display.value;
    currentOperation = button.textContent;
    shouldResetScreen = true;
  });
});