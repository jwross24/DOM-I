let currentMilliseconds = 0;

let buttonDiv = document.createElement('div');
buttonDiv.id = 'button-area';
document.body.appendChild(buttonDiv);

let startButton = document.createElement('button');
startButton.id = 'start-button';
startButton.innerHTML = 'Start Timer';
startButton.addEventListener('click', startTimer);
buttonDiv.appendChild(startButton);

let resetButton = document.createElement('button');
resetButton.id = 'reset-button';
resetButton.innerHTML = 'Reset Timer';
resetButton.addEventListener('click', resetTimer);
resetButton.disabled = true;
buttonDiv.appendChild(resetButton);

function updateTimer() {
  function getDigitFromRight(number, n) {
    return Math.floor((number / Math.pow(10, n - 1)) % 10);
  }

  for (let i = 0; i < 4; i++) {
    document.getElementById(digitElements[i]).innerHTML = getDigitFromRight(
      currentMilliseconds,
      i + 2,
    );
  }
}

function startTimer() {
  let x = setInterval(function () {
    startButton.disabled = true;
    digitElements = ['msTens', 'msHundreds', 'secondOnes', 'secondTens'];

    updateTimer(currentMilliseconds);

    if (currentMilliseconds > 9999) {
      clearInterval(x);
      let digits = document.getElementsByClassName('digit');
      Array.from(digits).forEach((item) => (item.style.color = 'red'));
      resetButton.removeAttribute('disabled');
    }

    currentMilliseconds += 10;
  }, 10);
}

function resetTimer() {
  currentMilliseconds = 0;
  let digits = document.getElementsByClassName('digit');
  Array.from(digits).forEach((item) => (item.style.color = 'black'));
  Array.from(digits).forEach(function (item, index) {
    if (index === 2) {
      return;
    }
    item.innerHTML = '-';
  });
  startButton.removeAttribute('disabled');
  resetButton.disabled = true;
}
