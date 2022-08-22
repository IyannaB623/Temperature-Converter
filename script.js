//event listener on calculate button in order to trigger the function
document.getElementById('calculate').addEventListener('click', converter)

function converter(){

    //this is the numeric value the user will input

    const temp = document.getElementById('numericValue').value

    //oTemp is short for original Temp

    let oTemp = document.getElementById('originalTemp').value

    //fTemp is short for final Temp aka the temp you wish to be the final conversion

    let fTemp = document.getElementById('finalTemp').value

    //this is where the numeric value will be displayed 

    let result = document.getElementById('displayhere')

    //this is where the result converision will be displayed ex. ' convert 88 Celsius to Fahrenheit
    let resultTitle = document.getElementById('resultTitle')

    //calc will be changed based on the equation triggered from the users drop down selections 
    let calc = 0

    //if else statement contains all of the conversions and function types 

    if(oTemp === 'Celsius' && fTemp === 'Fahrenheit'){

        calc = temp * 9/5 + 32 

    } else if (oTemp === 'Celsius' && fTemp === 'Kelvin'){

        calc = (273.15 + +temp ) //parenthesis for the sake of concatenation 

    } else if (oTemp === fTemp){

        calc = temp

    } else if (oTemp === 'Fahrenheit' && fTemp === 'Celsius'){
        
        calc = (temp - 32) * 5/9

    } else if(oTemp === 'Fahrenheit' && fTemp === 'Kelvin'){
       
        calc = (temp - 32) * 5/9 + 273.15

    }else if(oTemp === 'Kelvin' && fTemp === 'Fahrenheit'){

        calc = 1.8 * (temp - 273.15) + 32

    }else if(oTemp === 'Kelvin' && fTemp === 'Celsius'){
 
        calc = temp - 273.15
 
    }

    resultTitle = resultTitle.innerText = `Convert ${temp} ${oTemp} to ${fTemp}`

    result = result.innerText = Number(calc).toFixed(1) 

