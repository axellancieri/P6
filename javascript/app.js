// VARIABLES

    const phrase = document.getElementById('phrase'); //adviced to grab element by point 1- on instructions for this projecet but used another selector. Leaving this here tho as it was requested on point 1.
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


// Start and Reset button

    startGame.style.cursor = 'pointer';

    startGame.addEventListener('click', () => {

        if (overlay.classList.contains('lose') || overlay.classList.contains('win') ) {
            //overlay
            overlay.style.display = 'none';
            //keyboard
            for (let i = 0 ; i < arrayButtons.length; i++) {
                arrayButtons[i].disabled = false;
                allButtons[i].removeAttribute('class');
            }
            //displayed phrase
            while(charactersLI.firstChild) {
                charactersLI.removeChild(charactersLI.firstChild);
            }
            phraseArray = getRandomPhraseAsArray(phrases)
            addPhraseToDisplay(phraseArray);
            //heart
            for ( i = 0; i < heartQuerAll.length; i++ ) {
                const heartAll = heartQuerAll[i];
                heartAll.setAttribute('src','images/liveHeart.png');
            }
            missed = 0;
        } else {
            overlay.style.display = 'none';
        }
    });

    function buttonName() {
        if ( checkWin() === 'LOSE' ) {
            startGame.innerHTML = 'Try Again!';
        } else if ( checkWin() === 'WIN' ) {
            startGame.innerHTML = 'Could you guess another time?';
        }
    }

// phrases array

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

// requesting functions declared so far to operate

    let phraseArray = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(phraseArray);

// checkLetter function

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

//EventListener on keyboard taking lots of decisions

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
            buttonName();
        })

        
}

//Check Win function!

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
        return ggOrFfText[0].innerText;
    }
