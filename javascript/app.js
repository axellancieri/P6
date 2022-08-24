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
    'Today is a good day',
    'Would love some tacos',
    'Redemption song',
    'Wind instrumets are best instruments',
    'To be or not to be'
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
}
const phraseArray = getRandomPhraseAsArray(phrases);

const phraseAdded = addPhraseToDisplay(phraseArray);