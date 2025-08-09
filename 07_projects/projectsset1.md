# Projects related to DOM

## Project Link
[Click Here](https://mail.google.com/mail/u/0/#inbox)

# Solution Code 


## Project-1

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