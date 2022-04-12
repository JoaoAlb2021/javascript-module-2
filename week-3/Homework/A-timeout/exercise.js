/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp)

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

setTimeout(function(){
    document.querySelector('body').style.backgroundColor = 'yellow';
}, 2000);

setInterval(function () {
    const randomNumberRed = Math.random()*255
    const randomNumberGreen = Math.random()*255
    const randomNumberBlue = Math.random()*255
    const randomRGBColor = 'rgb('+randomNumberRed+','+randomNumberGreen+','+randomNumberBlue+')'
    document.querySelector('body').style.backgroundColor = randomRGBColor
}, 5000);