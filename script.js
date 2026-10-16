// Basic Calculator — Veda Technology Internship Task 7
// Sequential (immediate-execution) model: chained operations run left to right.
// Example: 12 + 3 x 2 = 30  (it computes (12 + 3) = 15, then 15 x 2 = 30).
// No eval() / Function() — all arithmetic is explicit in operate().

"use strict";

// ---------- State ----------
let currentInput = "0";      // what the user is typing / the result
let previousInput = "";      // stored first operand once an operator is chosen
let operator = null;         // "+", "-", "*", "/" or null
let shouldResetDisplay = false; // true after an operator or "=": next digit starts fresh
let lastOperator = null;     // saved for repeated "=" presses (e.g. 5 + 3 = 8, = again -> 11)
let lastOperand = null;      // second operand saved for repeated "="
let historyText = "";        // small history line above the result
let errorState = false;      // true when "Can't divide by zero" etc.

const MAX_DIGITS = 12; // max digits (not counting "-" and ".") per number
const DIV_ZERO_MESSAGE = "Can't divide by zero";

// ---------- DOM ----------
const currentDisplay = document.getElementById("currentDisplay");
const historyDisplay = document.getElementById("historyDisplay");
const errorDisplay = document.getElementById("errorDisplay");

const SYMBOLS = { "+": "+", "-": "\u2212", "*": "\u00D7", "/": "\u00F7" };

// ---------- Safe arithmetic (no eval) ----------
function operate(a, op, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) return NaN;
  let result;
  switch (op) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      if (b === 0) return null; // signals division-by-zero (handled by caller)
      result = a / b;
      break;
    default:
      return NaN;
  }
  if (!Number.isFinite(result)) return result; // Infinity handled by caller
  // Strip binary floating-point artefacts (0.1 + 0.2 -> 0.30000000000000004 -> 0.3)
  return parseFloat(result.toPrecision(12));
}

// Keep long results readable and stop display overflow.
// Plain decimals (like 1/3 = 0.333333333333) are shown in full; only truly
// huge (>= 1e12) or tiny (< 1e-9) magnitudes use exponential notation.
function formatResult(value) {
  if (typeof value !== "number" || Number.isNaN(value)) return "Error";
  if (!Number.isFinite(value)) return "Error";
  if (value !== 0) {
    const magnitude = Math.abs(value);
    if (magnitude >= 1e12 || magnitude < 1e-9) {
      return value.toExponential(5).replace(/(\.\d*?)0+e/, "$1e");
    }
  }
  const text = String(parseFloat(value.toPrecision(12)));
  // "-0" looks odd, show plain "0".
  if (text === "-0" || text === "-0.0") return "0";
  return text;
}

function showError(message) {
  errorState = true;
  currentInput = "Error";
  historyText = "";
  errorDisplay.textContent = message;
  errorDisplay.hidden = false;
  shouldResetDisplay = true;
  updateDisplay();
}

// Starting a brand-new calculation after an error clears everything first.
function recoverFromErrorIfNeeded() {
  if (errorState) clearCalculator();
}

// ---------- Input functions ----------
function appendNumber(digit) {
  recoverFromErrorIfNeeded();
  // A fresh number after "=" starts a new calculation (clears repeat memory + history).
  if (shouldResetDisplay) {
    if (operator === null) {
      lastOperator = null;
      lastOperand = null;
      historyText = "";
    }
    currentInput = "0";
    shouldResetDisplay = false;
  }
  const digitsOnly = currentInput.replace(/[^0-9]/g, "");
  if (digitsOnly.length >= MAX_DIGITS) return; // prevent overflow while typing

  if (currentInput === "0") {
    currentInput = digit; // avoid "007"
  } else if (currentInput === "-0") {
    currentInput = "-" + digit; // keep the minus sign: "-0" + "5" -> "-5"
  } else {
    currentInput += digit;
  }
  updateDisplay();
}

function appendDecimal() {
  recoverFromErrorIfNeeded();
  if (shouldResetDisplay) {
    if (operator === null) {
      lastOperator = null;
      lastOperand = null;
      historyText = "";
    }
    currentInput = "0";
    shouldResetDisplay = false;
  }
  if (currentInput === "" || currentInput === "-") {
    currentInput += "0.";
    updateDisplay();
    return;
  }
  if (currentInput.includes(".")) return; // prevents "5.2.3"
  currentInput += ".";
  updateDisplay();
}

function chooseOperator(nextOperator) {
  if (errorState) return; // must press C (or type a digit) to recover
  // Consecutive operators: just replace the pending operator (e.g. "5 + -" -> "5 -").
  if (operator !== null && shouldResetDisplay) {
    operator = nextOperator;
    historyText = previousInput + " " + SYMBOLS[operator];
    updateDisplay();
    return;
  }
  // Chained operation: finish the pending step first ("12 + 3" then "x" -> 15, keep going).
  if (operator !== null && !shouldResetDisplay) {
    const interim = operate(parseFloat(previousInput), operator, parseFloat(currentInput));
    if (interim === null) {
      showError(DIV_ZERO_MESSAGE);
      return;
    }
    if (typeof interim === "number" && !Number.isFinite(interim)) {
      showError("Result too large");
      return;
    }
    if (typeof interim === "number" && Number.isNaN(interim)) {
      showError("Invalid calculation");
      return;
    }
    const formatted = formatResult(interim);
    previousInput = formatted;
    currentInput = formatted;
  } else {
    previousInput = currentInput;
  }
  operator = nextOperator;
  lastOperator = null; // a new chain replaces any old repeated-"=" memory
  lastOperand = null;
  historyText = previousInput + " " + SYMBOLS[operator];
  shouldResetDisplay = true;
  updateDisplay();
}

function calculate() {
  if (errorState) return;

  // Normal case: "previous operator current" (e.g. "5 + 3").
  if (operator !== null) {
    // Pressing "=" right after an operator repeats the first operand: "5 + =" -> "5 + 5".
    const secondOperand = shouldResetDisplay ? previousInput : currentInput;
    const firstOperand = previousInput;
    const result = operate(parseFloat(firstOperand), operator, parseFloat(secondOperand));

    if (result === null) {
      showError(DIV_ZERO_MESSAGE);
      return;
    }
    if (typeof result === "number" && !Number.isFinite(result)) {
      showError("Result too large");
      return;
    }
    if (typeof result === "number" && Number.isNaN(result)) {
      showError("Invalid calculation");
      return;
    }
    historyText = firstOperand + " " + SYMBOLS[operator] + " " + secondOperand + " =";
    lastOperator = operator; // remember for repeated "="
    lastOperand = secondOperand;
    currentInput = formatResult(result);
    previousInput = "";
    operator = null;
    shouldResetDisplay = true;
    updateDisplay();
    return;
  }

  // Repeated "=": "5 + 3 = 8", "=" again -> 11, again -> 14, ...
  if (lastOperator !== null && lastOperand !== null) {
    const before = currentInput;
    const result = operate(parseFloat(currentInput), lastOperator, parseFloat(lastOperand));
    if (result === null) {
      showError(DIV_ZERO_MESSAGE);
      return;
    }
    if (typeof result === "number" && !Number.isFinite(result)) {
      showError("Result too large");
      return;
    }
    historyText = before + " " + SYMBOLS[lastOperator] + " " + lastOperand + " =";
    currentInput = formatResult(result);
    shouldResetDisplay = true;
    updateDisplay();
  }
  // Otherwise "=" with a single number does nothing (no NaN, no crash).
}

function clearCalculator() {
  currentInput = "0";
  previousInput = "";
  operator = null;
  shouldResetDisplay = false;
  lastOperator = null;
  lastOperand = null;
  historyText = "";
  errorState = false;
  errorDisplay.textContent = "";
  errorDisplay.hidden = true;
  updateDisplay();
}

function deleteLastDigit() {
  if (errorState) {
    clearCalculator(); // Backspace on an error simply resets
    return;
  }
  // Typing just finished with "=": let Backspace edit the result.
  if (shouldResetDisplay && operator === null) {
    shouldResetDisplay = false;
    lastOperator = null;
    lastOperand = null;
    historyText = "";
  }
  // Nothing typed yet for the second operand: ignore.
  if (shouldResetDisplay && operator !== null) return;

  currentInput = currentInput.slice(0, -1);
  if (currentInput === "" || currentInput === "-" || currentInput === "-0") {
    currentInput = "0";
  }
  updateDisplay();
}

function toggleSign() {
  if (errorState) return;
  if (shouldResetDisplay && operator !== null) {
    // "+/-" right after an operator starts a negative second operand.
    currentInput = "-0";
    shouldResetDisplay = false;
    updateDisplay();
    return;
  }
  if (shouldResetDisplay && operator === null) {
    // "+/-" right after "=" negates the result and starts a fresh entry.
    shouldResetDisplay = false;
    lastOperator = null;
    lastOperand = null;
    historyText = "";
  }
  if (currentInput === "0") return; // keep plain "0", never "-0"
  if (currentInput.startsWith("-")) {
    currentInput = currentInput.slice(1);
  } else {
    currentInput = "-" + currentInput;
  }
  updateDisplay();
}

// ---------- Display ----------
function updateDisplay() {
  historyDisplay.innerHTML = historyText === "" ? "&nbsp;" : escapeHtml(historyText);

  if (errorState) {
    currentDisplay.textContent = "Error";
    currentDisplay.classList.add("error");
  } else {
    currentDisplay.textContent = currentInput;
    currentDisplay.classList.remove("error");
  }

  // Shrink very long entries so they stay inside the display on mobile.
  const length = currentDisplay.textContent.length;
  if (length > 12) {
    currentDisplay.style.fontSize = "1.4rem";
  } else if (length > 9) {
    currentDisplay.style.fontSize = "1.9rem";
  } else {
    currentDisplay.style.fontSize = "";
  }

  // Highlight the pending operator button.
  document.querySelectorAll(".btn-operator").forEach(function (button) {
    button.classList.toggle("active", button.dataset.operator === operator);
  });
}

// Small helper so history text can never inject HTML.
function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// ---------- Keyboard ----------
function handleKeyboardInput(event) {
  const key = event.key;
  if (key >= "0" && key <= "9") {
    appendNumber(key);
  } else if (key === "." || key === ",") {
    event.preventDefault();
    appendDecimal();
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    event.preventDefault();
    chooseOperator(key);
  } else if (key === "Enter" || key === "=") {
    event.preventDefault();
    calculate();
  } else if (key === "Backspace") {
    event.preventDefault();
    deleteLastDigit();
  } else if (key === "Escape" || key === "c" || key === "C" || key === "Delete") {
    clearCalculator();
  }
  // All other keys are ignored.
}

// ---------- Wiring ----------
document.querySelectorAll("[data-number]").forEach(function (button) {
  button.addEventListener("click", function () {
    appendNumber(button.dataset.number);
  });
});

document.querySelectorAll("[data-operator]").forEach(function (button) {
  button.addEventListener("click", function () {
    chooseOperator(button.dataset.operator);
  });
});

document.querySelectorAll("[data-action]").forEach(function (button) {
  button.addEventListener("click", function () {
    const action = button.dataset.action;
    if (action === "clear") clearCalculator();
    else if (action === "backspace") deleteLastDigit();
    else if (action === "decimal") appendDecimal();
    else if (action === "equals") calculate();
    else if (action === "negate") toggleSign();
  });
});

document.addEventListener("keydown", handleKeyboardInput);

// Initial render.
updateDisplay();
