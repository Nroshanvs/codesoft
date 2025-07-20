const display = document.getElementById("display");
let current = "";
let operator = "";
let prev = "";

document.querySelectorAll(".number").forEach(btn => {
  btn.addEventListener("click", () => {
    current += btn.dataset.number;
    display.textContent = current;
  });
});

document.querySelectorAll(".operator").forEach(btn => {
  btn.addEventListener("click", () => {
    operator = btn.dataset.operator;
    prev = current;
    current = "";
  });
});

document.getElementById("equals").addEventListener("click", () => {
  if (prev && current && operator) {
    display.textContent = eval(`${prev}${operator}${current}`);
    current = display.textContent;
    prev = "";
    operator = "";
  }
});

document.getElementById("clear").addEventListener("click", () => {
  current = "";
  prev = "";
  operator = "";
  display.textContent = "0";
});
