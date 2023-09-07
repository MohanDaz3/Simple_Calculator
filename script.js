const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialCharacters = ["%", "/", "*", "-", "+", "="];
let output = "";

// Defining a function to calculate based on the button clicked.
const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    // If output has '%', replace it with '/100' before evaluating.
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "Cls") { 
    output = "";
  } else if (btnValue === "DEL") {
    // If DEL button is clicked, remove the last character from the output.
    output = output.toString().slice(0, -1);
  } else {
    // If output is empty and the button is any special characters, then return.
    if (output === "" && specialCharacters.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

// Add Event listeners to buttons, call calculate() on click
buttons.forEach((button) => {
  // Button click listener calls calculate() with dataset value as an argument.
  button.addEventListener("click", (e) => calculate(e.target.dataset.value)); 
});
