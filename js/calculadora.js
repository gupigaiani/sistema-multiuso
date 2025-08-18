const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    // Substituir % por /100 para cálculo
    let expression = display.value.replace(/%/g, "/100");
    display.value = eval(expression);
  } catch {
    display.value = "Erro";
  }
}
