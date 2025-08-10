let randomNumber = (parseInt(Math.random() * 100 + 1))

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessesSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')


let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number.')
    } else if (guess < 1){
        alert('Please enter number greater than 1.')
    } else if (guess > 100){
        alert('Please enter number less than 100.')
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displaymessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber) {
        displaymessage(`You guessed it right!`)
        endGame()
    } else if (guess < randomNumber){
        displaymessage(`Number is Tooo low.`)
    } else if(guess > randomNumber) {
        displaymessage(`Number is Tooo High.`)
    }
}
 
function displayGuess(guess){
    userInput.value = ''
    guessesSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displaymessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<button id ="newGame">Start new Game</button>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessesSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        lowOrHi.innerHTML = ''
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true

    })
}