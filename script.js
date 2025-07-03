let display = document.getElementById('display');

function press(key) {
  display.value += key;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = '오류';
  }
}

function clearDisplay() {
  display.value = '';
}