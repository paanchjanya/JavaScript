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
### BMI Calculator

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="../style.css">
    <title>BMI Calculator</title>
</head>
<body>
    <nav>
        <a href="/"  aria-current="page">Home</a>
        <a target="_blank" href="https://www.youtube.com">Youtube</a>
    </nav>
    
    <div class="conatiner">

        <h1>BMI Calculator</h1>
        <form>
            <p><label>Height in CM: </label><input type="text" id="height"></p>
            <p><label>Weight in CM: </label><input type="text" id="weight"></p>
            <button>Calculate</button>
            <div id="results"></div>
            <div id="weight-guide">
                <h3>BMI Weight Guide</h3>
                <p>Under Weight = less than 18.6</p>
                <p>Normal Range = 18.6 and 24.9</p>
                <p>OverWeight = Greater tan 24.9</p>
            </div>
        </form>
    </div>
    <script src="two.js"></script>
</body>
<!-- <script src="two.js"></script> -->
</html>

```


```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f5f5f5;
    color: #333;
    line-height: 1.6;
}

nav {
    background-color: #2980b9;
    padding: 10px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

nav a {
    color: white;
    text-decoration: none;
    margin: 0 15px;
    font-size: 18px;
    transition: color 0.3s ease;
}

nav a:hover {
    color: #3498db;
}

.conatiner {
    max-width: 500px;
    margin: 30px auto;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #2c3e50;
    font-size: 28px;
}

form {
    padding: 20px;
}

form p {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
}

label {
    margin-bottom: 8px;
    font-weight: 600;
    color: #2c3e50;
}

input[type="text"] {
    padding: 12px;
    border: 2px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    transition: border-color 0.3s ease;
}

input[type="text"]:focus {
    border-color: #3498db;
    outline: none;
}

button {
    display: block;
    width: 100%;
    padding: 12px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    margin: 20px 0;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #2980b9;
}

#result {
    margin: 20px 0;
    padding: 15px;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    display: none;
}

.normal {
    background-color: #2ecc71;
    color: white;
}

.underweight {
    background-color: #f1c40f;
    color: #333;
}

.overweight {
    background-color: #e74c3c;
    color: white;
}

.error {
    background-color: #e74c3c;
    color: white;
}

#weight-guide {
    margin-top: 30px;
    background-color: #f8f9fa;
    padding: 15px;
    border-radius: 5px;
    border-left: 4px solid #3498db;
}

#weight-guide h3 {
    margin-bottom: 10px;
    color: #2c3e50;
}

#weight-guide p {
    margin: 5px 0;
    color: #555;
}

```




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
### Your Local Time

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="../style.css">
    <title>Your Local Time</title>
</head>
<body>
     <nav>
        <a href="/"  aria-current="page">Home</a>
        <a target="_blank" href="https://www.youtube.com">Youtube</a>
    </nav>
    <div class="center">
        <div id="banner"><span>Your Local Time</span></div>
        <div id="clock"></div>
    </div>
    <script src="three.js"></script>
</body>
</html>
```


```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #1e1e1e;
    color: #ffffff;
    height: 100vh;
    overflow: hidden;
}

nav {
    background-color: #333;
    padding: 15px;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

nav a {
    color: white;
    text-decoration: none;
    margin: 0 15px;
    font-size: 18px;
    transition: color 0.3s ease;
}

nav a:hover {
    color: #00bcd4;
}

.center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 60px);
}

#banner {
    background: linear-gradient(135deg, #00bcd4, #673ab7);
    padding: 15px 40px;
    border-radius: 8px;
    margin-bottom: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transform: translateY(-20px);
    animation: float 3s ease-in-out infinite;
}

#banner span {
    font-size: 28px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
}

#clock {
    font-size: 80px;
    font-weight: 700;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 40px 60px;
    border-radius: 15px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
    text-shadow: 0 0 10px rgba(0, 188, 212, 0.7);
    border: 2px solid rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
}

#clock::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transform: rotate(45deg);
    animation: shine 4s linear infinite;
}

@keyframes float {
    0%, 100% {
        transform: translateY(-20px);
    }
    50% {
        transform: translateY(-30px);
    }
}

@keyframes shine {
    0% {
        left: -50%;
        top: -50%;
    }
    100% {
        left: 150%;
        top: 150%;
    }
}

@media (max-width: 768px) {
    #clock {
        font-size: 60px;
        padding: 30px 40px;
    }
    
    #banner span {
        font-size: 22px;
    }
}

@media (max-width: 480px) {
    #clock {
        font-size: 40px;
        padding: 20px 30px;
    }
    
    #banner span {
        font-size: 18px;
    }
}

```

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
### Number Guessing Game

```html
<!DOCTYPE html>
<html lang="en">
<head>
   <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="../style.css">
    <title>Number Guessing Game</title>
</head>
<body>
     <nav>
        <a href="/"  aria-current="page">Home</a>
        <a target="_blank" href="https://www.youtube.com">Youtube</a>
    </nav>
    <div id="wrapper"></div>
    <h1>Number Guessing Game</h1>
    <p>Try and guess a random number between 1 and 100.</p>
    <p>You have 10 attempts to guess the right number.</p>
</br>
<form class="form">
    <label for="guessField" id="guess">Guess a number</label>
    <input type="text" id="guessField" class="guessField">
    <input type="submit"  id="subt" value="Submit guess" class="guessSubmit">
</form>
<div class="resultParas">
    <p>Previous Guesses: <span class="guesses"></span></p>
    <p>Guesses Remaining: <span class="lastResult">10</span></p>
    <p class="lowOrHi"></p>
    </div>
</div>
<script src="four.js"></script>
</body>
</html>

```


```css

/* Reset and base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background-color: #f5f5f5;
  color: #333;
  line-height: 1.6;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

/* Navigation styles with marquee effect */
nav {
  background: linear-gradient(90deg, #333, #444, #555, #444, #333);
  background-size: 400% 400%;
  padding: 15px 20px;
  margin-bottom: 30px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  gap: 30px;
  position: relative;
  overflow: hidden;
  animation: gradientShift 8s ease infinite;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Add a flowing light effect across the nav */
nav::before {
  content: '';
  position: absolute;
  top: 0;
  left: -150%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transform: skewX(-25deg);
  animation: shine 3s infinite;
}

/* Animations for marquee effects */
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes shine {
  0% { left: -150%; }
  100% { left: 150%; }
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  letter-spacing: 1px;
  padding: 8px 15px;
  border-radius: 4px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  transition: all 0.3s ease;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

nav a::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 215, 0, 0.2);
  transition: all 0.4s ease;
  z-index: -1;
  transform: skewX(-15deg);
}

nav a:hover {
  color: #ffd700;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

nav a:hover::before {
  left: 0;
}

/* Main content wrapper */
#wrapper {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

/* Heading styles */
h1 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5rem;
}

p {
  margin-bottom: 15px;
  font-size: 1.1rem;
}

/* Form styles */
.form {
  margin: 25px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: #2c3e50;
}

.guessField {
  padding: 12px 15px;
  font-size: 1.1rem;
  border: 2px solid #ddd;
  border-radius: 5px;
  width: 100%;
  max-width: 300px;
  margin-bottom: 15px;
  text-align: center;
}

.guessField:focus {
  border-color: #3498db;
  outline: none;
  box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
}

.guessSubmit {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 12px 25px;
  font-size: 1.1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.guessSubmit:hover {
  background-color: #2980b9;
}

/* Results section */
.resultParas {
  margin-top: 25px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  border-left: 5px solid #3498db;
}

.guesses {
  font-weight: bold;
  color: #e74c3c;
}

.lastResult {
  font-weight: bold;
  color: #2ecc71;
}

/* Responsive adjustments */
@media (max-width: 600px) {
  body {
    padding: 10px;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  .form {
    margin: 15px 0;
  }
  
  .guessSubmit, .guessField {
    width: 100%;
  }
}
```


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