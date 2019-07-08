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
var ch1GuessInput = document.querySelector('#user__input--ch1-guess');
var ch1Guess = document.querySelector('#ch1--current-guess');
var ch2GuessInput = document.querySelector('#user__input--ch2-guess');
var ch2Guess = document.querySelector('#ch2--current-guess');
var ch1Highlow = document.querySelector('#ch1-highlow');
var ch2Highlow = document.querySelector('#ch2-highlow');
var correctGuess = document.querySelector('#correct-guess');
var clearGameBtn = document.querySelector('.clear__game--btn');
var resetGameBtn = document.querySelector('.reset__game--btn');
var disableClearBtn = document.querySelector('.clear-disable');
var disableResetBtn = document.querySelector('.reset-disable');

rangeInputBtn.addEventListener('click', setRange);
submitBtn.addEventListener('click', startGame);
clearGameBtn.addEventListener('click', clearGame);
resetGameBtn.addEventListener('click', resetGame);

clearGameBtn.disabled = true;
resetGameBtn.disabled = true;

function setRange() {
  // compareValue(minGuess, maxGuess);
  var minValue = minGuess.value;
  var maxValue = maxGuess.value;
  var generatedNumber = ranNumberFromRange(minValue, maxValue);
  console.log("generatedNumber", generatedNumber);
  userSpanMin.innerText = minValue;
  userSpanMax.innerText = maxValue;
  correctGuess.innerText = generatedNumber;
}

function ranNumberFromRange(minRange, maxRange){
  var range = parseInt(maxRange) - parseInt(minRange);
  console.log(typeof range)
  console.log("range", range);
  var randomNum = Math.random() * range + parseInt(minRange);
  console.log(Math.floor(randomNum));
  return Math.floor(randomNum);
}

function startGame() {
  checkAlphaNumeric(ch1NameInput.value, ch2NameInput.value); 
  checkNumeric(ch1GuessInput.value, ch2GuessInput.value);
  changeAllNames(ch1NameInput.value, ch1Name);
  changeAllNames(ch2NameInput.value, ch2Name);
  ch1Guess.innerText = ch1GuessInput.value;
  ch1Highlow.innerText = checkGuess(ch1GuessInput.value, ch1NameInput.value);
  ch2Guess.innerText = ch2GuessInput.value;
  ch2Highlow.innerText = checkGuess(ch2GuessInput.value, ch2NameInput.value);
  enableClearGameBtn();
  enableResetBtn();
} 

function enableClearGameBtn() {
  if ((ch1Guess.innerText !== "") && (ch2Guess.innerText !== "")){
    disableClearBtn.classList.remove("clear-disable");
    clearGameBtn.disabled = false;
  };
}

function enableResetBtn() {
  if ((ch1Guess.innerText && ch2Guess.innerText && ch1Name.innerText && ch2Name.innerText) !== "") {
    disableResetBtn.classList.remove('reset-disable');
    resetGameBtn.disabled = false;
  }
}

function clearGame() {
   ch1GuessInput.value = "";
   ch2GuessInput.value = "";
   clearGameBtn.disabled = true;
   disableClearBtn.classList.add("clear-disable");
}

function resetGame() {
  correctGuess.innerText = ranNumberFromRange(minGuess.value, maxGuess.value);
  ch1GuessInput.value = "";
  ch2GuessInput.value = "";
  ch1NameInput.value = "";
  ch2NameInput.value = "";
  changeAllNames("Challenger 1", ch1Name);
  changeAllNames("Challenger 2", ch2Name);
  resetGameBtn.disabled = true;
  disableResetBtn.classList.add("reset-disable");
};




// Checks user names to make sure they are Alpha Numeric
function checkAlphaNumeric(name1, name2){
  var letters = /^[0-9a-zA-Z]+$/;
  if ((!name1.match(letters)) || (!name2.match(letters))) {
    ch1NameInput.value = "";
    ch2NameInput.value = "";
    alert("Names must be Alpha Numeric"); 
  }
};

//Checks user guess to make sure its Numeric
function checkNumeric(guess1, guess2){
  var nums = /^[0-9]+$/;
  if ((!guess1.match(nums)) || (!guess2.match(nums))) {
    ch1GuessInput.value = "";
    ch2GuessInput.value = "";
    alert("Guess must be Numeric"); 
  }
};

//Sets character name throughout the DOM
function changeAllNames(name, nameArray) {
  for (var i = 0; i < nameArray.length; i++) {
    nameArray[i].innerText=name; 
  };
};

// Checks to see if a user's guess is too high, too low or a winner
function checkGuess (playerGuess, playerName) {
  console.log('playerGuess:::', playerGuess);
  console.log('playerName::::', playerName);

  if (playerGuess > correctGuess.innerText) {
    return "that's too high";
  }
  else if (playerGuess < correctGuess.innerText) {
    return "that's too low";
  }
  else {
    displayWinCard(playerName);
    return "BOOM!"
  }
};

function displayWinCard(winnerName) {
  var mainBox = document.querySelector('.results');
  mainBox.insertAdjacentHTML('afterbegin', `<container class="card__container">
        <div class="card__container--title">
          <span class="ch1-name">CHALLENGER 1 NAME</span>
          <p>vs</p>
          <span class="ch2-name">CHALLENGER 2 NAME</span>
        </div>
        <hr class="card__hr">
        <div class="card__container--winner"> 
          <span class="card__span">${winnerName}</span>
          <p class="card__span">WINNER</p>
        </div>
        <hr class="card__hr">
        <div class="card__span--main">
          <span class="card__span-guess"></span><p>GUESSES</p>
          <span class="card__span-minutes"></span><p>MINUTES</p>
          <button class="card__span--exit" type="button">X</button>
        </div>  
      </container>`);
  // var for the article main, class results
  //add inner html + html info
}

// function compareValue(minGuess, maxGuess) {
//   if (minGuess >= maxGuess) {
//     return console.log('Min is greater than or equal to Max, error!');
//   };
// };
