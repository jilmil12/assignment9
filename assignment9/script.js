let display = document.getElementById("display");

// Append a number or operator to the display
function appendValue(value) {
  display.value += value;
}

// Clear all input
function clearDisplay() {
  display.value = "";
}

// Delete the last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Evaluate the expression
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error 💔";
  }
}
