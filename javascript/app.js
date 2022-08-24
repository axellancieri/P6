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

function getRandomPhraseAsArray(arr) {
    const phrasesRandom = Math.floor( Math.random() * 5 ); 
    for ( let i = 0; i < arr.length; i++ ) {
        arrRandom = arr[phrasesRandom];
    }
    return arrRandom.split();
}

function addPhraseToDisplay(arr) {
    let charactersRdy = document.createElement('li');
    const charactersLI = document.querySelector('#phrase ul');
    charactersLI.appendChild(charactersRdy);
    let characters = ``;
    for ( let i = 0; i < arr.length; i++ ) {
        characters += arr[i];
        charactersArray = [...characters];
    }
    for ( let x = 0; x < charactersArray.length; x++ ) {
        charactersRdy.innerHTML += `<li>${charactersArray[x]}</li>`;
    }    
    return charactersRdy;
}



const phraseArray = getRandomPhraseAsArray(phrases);

addPhraseToDisplay(phraseArray); 