const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPosition = null;
let currentTime = 60;
let timerId = null;

function randomSquare() {
  squares.forEach((square) => square.classList.remove('mole'));

  let randomNumber = (num) => Math.floor(Math.random() * num);
  let randomSquare = squares[randomNumber(squares.length)];

  randomSquare.classList.add('mole');
  hitPosition = randomSquare.id;
}

squares.forEach((square) => {
  square.addEventListener('mousedown', () => {
    if (square.id === hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

const moveMole = () => (timerId = setInterval(randomSquare, 500));

moveMole();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert('Game Over! Your final result is ' + result);
  }
}

let countDownTimerId = setInterval(countDown, 1000);
