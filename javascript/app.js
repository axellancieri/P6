const keys = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const startGame = document.querySelector('.btn__reset')

startGame.style.cursor = 'pointer';

startGame.addEventListener('click', () => {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
});


const phrases = [
    'today is a good day',
    'would love some tacos',
    'redemption song',
    'wind instrumets are the coolest',
    'to be or not to be'
];

// FUNCTION THAT WILL PICK RANDOM STRING ON ARRAY

function getRandomPhraseAsArray(arr) {
    const phrasesRandom = Math.floor( Math.random() * 5 ); 
    for ( let i = 0; i < arr.length; i++ ) {
        arrRandom = arr[phrasesRandom];
        arrRandomSplitted = arrRandom.split('');
    }
    return arrRandomSplitted;
}
// This function will get the chosen array from above funct to show on html li and goota do conditional statments now

function addPhraseToDisplay(arr) {
    const charactersLI = document.querySelector('#phrase ul');
    for ( let i = 0; i < arr.length; i++ ) {
        charactersRdy = document.createElement('li');
        charactersRdy.innerHTML = arr[i];
        if (  arr[i] === ' ') {
            
        } else {
            charactersRdy.className += 'letter';
        }
        charactersLI.appendChild(charactersRdy);
    }
    return charactersLI;
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);


// checkLetter function

let matchedLetters = ``;
const checkLetter = function (guessedLetter) {
    const characters = document.getElementsByClassName('letter');
    const arrayCharacters = Array.from(characters);
    for( i = 0; i < arrayCharacters.length; i++ ) {
        if ( arrayCharacters[i].innerHTML.indexOf(guessedLetter) !== -1 ) {
            arrayCharacters[i].className = 'show';
            matchedLetters += `${guessedLetter}, `
        } else {
            null
        }
    }
    return matchedLetters;
}
const allButtons = keys.querySelectorAll('.keyrow > button');
const arrayButtons = Array.from(allButtons);
for (let i = 0 ; i < arrayButtons.length; i++) {
    arrayButtons[i].style.cursor = 'pointer';
    arrayButtons[i].addEventListener('click', (e) => {
        arrayButtons[i].className = 'chosen';
        arrayButtons[i].disabled = true;
        checkLetter(arrayButtons[i].innerHTML);
    })
}
