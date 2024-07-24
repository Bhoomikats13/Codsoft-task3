function addToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLast() {
  var display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function calculate() {
  let input = document.getElementById('display').value;
  let result = eval(input);
  document.getElementById('display').value = result;
}
