# Projects related to DOM

## Project Link
[Click Here](https://mail.google.com/mail/u/0/#inbox)

# Solution Code 


## Project-1
### Color Scheme Switicher
```html
<!DOCTYPE html>
<html lang="en">
<head>
  
    <title>JavaScript Background Color Switcher</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="../style.css">
</head>
<body>
    <nav>
        <a href="/"  aria-current="page">Home</a>
        <a target="_blank" href="https://www.youtube.com">youtube</a>
    </nav>

        <div class="canvas">
            <h1>Color Scheme Switcher</h1>
            <span class="button" id="grey"></span>
            <span class="button" id="white"></span>
            <span class="button" id="blue"></span>
            <span class="button" id="yellow"></span> 
            <span class="button" id="purple"></span>   
            <h2>Try clicking on one of the colors above
                <span>to change background color of this page!</span>
            </h2>

        </div>
    </body>
    <script src="one.js"></script>
</html>


````


```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    transition: background-color 0.3s ease;
}

nav {
    background-color: #333;
    padding: 15px;
    text-align: center;
    margin-bottom: 20px;
}

nav a {
    color: white;
    text-decoration: none;
    margin: 0 15px;
    font-size: 18px;
}

nav a:hover {
    text-decoration: underline;
}

.canvas {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

h1 {
    margin-bottom: 30px;
    font-size: 32px;
    color: #333;
}

h2 {
    margin-top: 30px;
    font-size: 20px;
    color: #555;
    line-height: 1.5;
}

h2 span {
    display: block;
    font-weight: normal;
    font-size: 16px;
    margin-top: 5px;
}

.button {
    display: inline-block;
    width: 100px;
    height: 100px;
    margin: 10px;
    border: 3px solid #000;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.button:hover {
    transform: scale(1.1);
}

#grey {
    background-color: grey;
}

#white {
    background-color: white;
}

#blue {
    background-color: blue;
}

#yellow {
    background-color: yellow;
}
#purple{
    background-color: purple;
}

```



```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach( function(button){
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id
        }
        else if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
        }
        else if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
        }
        else if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
        }
        else if(e.target.id === 'purple') {
            body.style.backgroundColor = e.target.id
        }
        else{
            body.style.backgroundColor = 'black'
        }
        
    });
    
});
```

## Project 2
```javascript
const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault()


    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const message = document.querySelector('#weight-guide')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please enter a valid height ${height}`
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please enter a valid weight ${weight}`
    } else {
        const bmi = (weight / ((height * height)/10000)).toFixed(2)
        const mes = bmi < 18.6 ? 'Under Weight' : bmi < 24.9 ? 'Normal Range' : 'OverWeight'
        // show the result
        results.innerHTML = `<span>${bmi} -> ${mes}</span>`
        
    }
})


```

## Project 3

```javascript
// chai aur code provided code.
const clock = document.getElementById('clock')


setInterval(function() {
    
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)


// This code is from trae ai
//  Get the clock element
const clockElement = document.getElementById('clock');

// Function to update the clock
function updateClock() {
    const now = new Date();
    
    // Format the time with hours, minutes, and seconds
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    // Convert to 12-hour format
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const formattedHours = hours.toString().padStart(2, '0');
    
    // Display the time
    clockElement.textContent = `${formattedHours}:${minutes}:${seconds} ${ampm}`;
    
    // Add a pulsing effect on seconds change
    clockElement.classList.add('pulse');
    setTimeout(() => {
        clockElement.classList.remove('pulse');
    }, 500);
}

// Update the clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);
```

## Project 4
```javascript
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


```