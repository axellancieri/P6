const phrase = document.getElementById('phrase');
//overlay vars
    const overlay = document.getElementById('overlay');
//startGame button vars
    const startGame = document.querySelector('.btn__reset');
//addPhraseToDisplay function vars
    const charactersLI = document.querySelector('#phrase ul');
// keyboard buttons vars
    const keys = document.getElementById('qwerty');
    const allButtons = keys.querySelectorAll('.keyrow > button');
    const arrayButtons = Array.from(allButtons);
// heart vars
    let missed = 0;
    const heartQuery = document.querySelector('#scoreboard');
    const heartQuerAll = heartQuery.querySelectorAll('ol > li > img');
    const imagesHearts = heartQuerAll.childNodes;
//checkWin function vars
    const ggOrFfText = document.getElementsByClassName('title');
    const classShow = document.getElementsByClassName('show');
    const classLetter = document.getElementsByClassName('letter');





startGame.addEventListener('click', () => {
    startGame.style.cursor = 'pointer';
    overlay.style.display = 'none';

    if (overlay.classList.contains('lose', 'win')) {
        //overlay
        overlay.style.display = 'none';
        //keyboard

        //heart
        for ( i = 0; i < heartQuerAll.length; i++ ) {
            const heartAll = heartQuerAll[i];
            heartAll.setAttribute('src','images/liveHeart.png');
        }
        missed = 0;
    }
});


const phrases = [
    'today is a good day',
    'would love some tacos',
    'redemption song',
    'wind instrumets are best',
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
    for ( let i = 0; i < arr.length; i++ ) {
        const charactersRdy = document.createElement('li');
        charactersRdy.innerHTML = arr[i];
        if (  arr[i] === ' ') {
            charactersRdy.className += 'space';
            
        } else {
            charactersRdy.className += 'letter';
        }
        charactersLI.appendChild(charactersRdy);
    }
    return charactersLI;
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

const checkLetter = function (guessedLetter) {
    const characters = document.getElementsByClassName('letter');
    const arrayCharacters = Array.from(characters);
    
    let matchedLetter = null;
    for( i = 0; i < arrayCharacters.length; i++ ) {
        if ( arrayCharacters[i].innerHTML.includes(guessedLetter) ) {
            arrayCharacters[i].classList.add('show');
            arrayCharacters[i].style.transition = "all .1s ease-in";
            matchedLetter = guessedLetter;
        }
    }
    return matchedLetter;
}

for (let i = 0 ; i < arrayButtons.length; i++) {
    arrayButtons[i].style.cursor = 'pointer';
    arrayButtons[i].addEventListener('click', () => {
        arrayButtons[i].className = 'chosen';
        arrayButtons[i].disabled = true;
        let letterFound = checkLetter(arrayButtons[i].innerHTML);
        if (letterFound === null) {
            const heartCount = heartQuerAll[missed];
            missed++;
            heartCount.setAttribute('src','images/lostHeart.png');
        }
        checkWin();
    })

    
}
const checkWin = function () {
    const arrayClassShow = Array.from(classShow);
    const arrayClassLetter = Array.from(classLetter);
        if ( arrayClassShow.length === arrayClassLetter.length ) {
            overlay.style.display = 'flex';
            overlay.className = 'win';
            ggOrFfText[0].innerText = 'WIN' ;
        } else if ( missed === 5) {
            overlay.style.display = 'flex';
            overlay.className = 'lose';
            ggOrFfText[0].innerText = 'LOSE' ;
            
        }


}




// Generating reset button

// addPhraseToDisplay.apply(null, phraseArray) this would make new li array show up