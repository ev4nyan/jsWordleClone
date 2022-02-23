const guessButton = document.querySelector(".guess-button");
const guessInput = document.querySelector(".guess-input");
const guessList = document.querySelector(".guess-list");

guessButton.addEventListener("click",addGuess);


function addGuess(e) {
    e.preventDefault();

    if(/^\s*$/.test(guessInput.value) !== true){
        const guessDiv = document.createElement('div');
        guessDiv.classList.add("guess");

        const newGuess = document.createElement('li');
        newGuess.innerText = guessInput.value;
        newGuess.classList.add("guess-item");

        guessDiv.appendChild(newGuess);

        guessList.appendChild(guessDiv);

        guessInput.value = "";

    }
    
}

function fiveLetter(){
    return(guessInput.value.length >= 6 || /\s/g.test(guessInput.value)) &&
       (guessInput.value = guessInput.value.slice(0,(guessInput.value.length - 1)))
}

