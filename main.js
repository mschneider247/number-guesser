var minGuess = document.querySelector('.range__input--min');
var maxGuess = document.querySelector('.range__input--max');
var userSpanMin = document.querySelector('.user__span--min');
var userSpanMax = document.querySelector('.user__span--max');
var rangeInputBtn = document.querySelector('.range__input--btn');
var ch1NameInput = document.querySelector('#user__input--ch1-name');
var ch1Name = document.querySelectorAll('.ch1-name');
var ch2NameInput = document.querySelector('#user__input--ch2-name');
var ch2Name = document.querySelectorAll('.ch2-name');
var submitBtn = document.querySelector('#submit__btn');

rangeInputBtn.addEventListener('click', setRange);
submitBtn.addEventListener('click', namesAndGuesses);

function setRange() {
  compareValue(minGuess, maxGuess);
  userSpanMin.innerText = minGuess.value;
  userSpanMax.innerText = maxGuess.value;
  minGuess.value = "";
  maxGuess.value = "";
}

function compareValue(minGuess, maxGuess) {
  if (minGuess >= maxGuess) {
    return console.log('Min is greater than or equal to Max, error!');
  };
};

function namesAndGuesses() {
  changeAllNames(ch1NameInput.value, ch1Name);
  changeAllNames(ch2NameInput.value, ch2Name);
//   console.log("Function namesAndGuesses is being called");
   // ch1Name.innerText = ch1NameInput.value;
   // ch2Name.innerText = ch2NameInput.value;
//   ch1Guess.innerText = ch1GuessInput.value;
//   ch1Highlow.innerText = checkGuess(ch1GuessInput.value);
//   ch2Guess.innerText = ch2GuessInput.value;
//   ch2Highlow.innerText = checkGuess(ch2GuessInput.value);
} 

function changeAllNames(name, nameArray) {
  for (var i = 0; i < nameArray.length; i++) {
    nameArray[i].innerText=name; 
  };
};


// var correctGuess = document.querySelector('#correct-guess');
// var submitBtn = document.querySelector('#submit__btn');
// var ch1NameInput = document.querySelector('#user__input--ch1-name');
// var ch1Name = document.querySelector('.ch1-name');
// var ch2NameInput = document.querySelector('#user__input--ch2-name');
// var ch2Name = document.querySelector('.ch2-name');
// var ch1GuessInput = document.querySelector('#user__input--ch1-guess');
// var ch1Guess = document.querySelector('#ch1--current-guess');
// var ch2GuessInput = document.querySelector('#user__input--ch2-guess');
// var ch2Guess = document.querySelector('#ch2--current-guess');
// var ch1Highlow = document.querySelector('#ch1-highlow');
// var ch2Highlow = document.querySelector('#ch2-highlow');

// submitBtn.addEventListener('click', namesAndGuesses);

// // Fills in user inputed names and guess
// // Also fires off another function checkGuess to see if the guess
// // is correct or too high, too low
// function namesAndGuesses() {
//   console.log("Function namesAndGuesses is being called");
//   ch1Name.innerText = ch1NameInput.value;
//   ch2Name.innerText = ch2NameInput.value;
//   ch1Guess.innerText = ch1GuessInput.value;
//   ch1Highlow.innerText = checkGuess(ch1GuessInput.value);
//   ch2Guess.innerText = ch2GuessInput.value;
//   ch2Highlow.innerText = checkGuess(ch2GuessInput.value);
// } 

// // Checks to see if a user's guess is too high, too low or a winner
// function checkGuess (playerGuess) {
//   console.log("Current Player Guess: " + playerGuess);
//   console.log("Correct Guess: " + correctGuess.innerText);
//   if (playerGuess > correctGuess.innerText) {
//     return "that's too high";
//   }
//   else if (playerGuess < correctGuess.innerText) {
//     return "that's too low";
//   }
//   else {
//     return "WINNER!!!"
//   }
// }


// // Fill these in with more logic
// userSpanMin.innerText = ' 1 ';
// userSpanMax.innerText = ' 100 ';
// correctGuess.innerText = '50';
