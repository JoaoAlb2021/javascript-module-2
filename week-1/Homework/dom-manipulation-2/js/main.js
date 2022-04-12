const blueBtn = document.querySelector('#blueBtn')
const orangeBtn = document.querySelector('#orangeBtn')
const greenBtn = document.querySelector('#greenBtn')
const jumbotron = document.querySelector('.Jumbotron')
const jumbotronButtons = document.querySelector('.Jumbotron .buttons')

blueBtn.addEventListener('click', event =>{
    event.preventDefault()
    const donateAbBikeButton = jumbotronButtons.firstElementChild
    const volunteerButton = donateAbBikeButton.nextElementSibling
    jumbotron.style.backgroundColor = `#588fbd`
    donateAbBikeButton.style.backgroundColor = '#ffa500'
    volunteerButton.style.backgroundColor = 'black'
    volunteerButton.style.color = 'white'
})

orangeBtn.addEventListener('click', event =>{
    event.preventDefault()
    const donateAbBikeButton = jumbotronButtons.firstElementChild
    const volunteerButton = donateAbBikeButton.nextElementSibling
    jumbotron.style.backgroundColor = `#f0ad4e`
    donateAbBikeButton.style.backgroundColor = '#5751fd'
    volunteerButton.style.backgroundColor = '#31b0d5'
    volunteerButton.style.color = 'white'
})

greenBtn.addEventListener('click', event =>{
    event.preventDefault()
    const donateAbBikeButton = jumbotronButtons.firstElementChild
    const volunteerButton = donateAbBikeButton.nextElementSibling
    jumbotron.style.backgroundColor = `#87ca8a`
    donateAbBikeButton.style.backgroundColor = '#ffa500'
    volunteerButton.style.backgroundColor = 'black'
    volunteerButton.style.color = '#8c9c08'
})

const form = document.querySelector('form')
const email = form.firstElementChild.firstElementChild.nextElementSibling
const yourName = form.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling
const describeYourSelf = form.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling
// console.log(form);
form.addEventListener('submit', event =>{
    event.preventDefault()
    if(email.value.includes('@')){
        email.style.backgroundColor = 'white'
        email.style.color='black'
        a=1
    }
    else{
        email.style.backgroundColor = 'red'
        email.style.color='white'
        a=0
    }
    
    if (yourName.value.trim().charAt(0) !== ''){
        yourName.style.backgroundColor = 'white'
        yourName.style.color='black'
        b=1
    }
    else{
        yourName.style.backgroundColor ='red'
        yourName.style.color='white'
        b=0
    }

    if (describeYourSelf.value.trim().charAt(0) !== ''){
        describeYourSelf.style.backgroundColor = 'white'
        describeYourSelf.style.color='black'
        c=1
    }
    else{
        describeYourSelf.style.backgroundColor = 'red'
        describeYourSelf.style.color='white'
        c=0
    }

    if(a+b+c === 3){
        alert('Thank you for filling out the form')
        email.value=''
        yourName.value=''
        describeYourSelf.value=''
    }
    else{
        alert('Value invalid. Please check the fields')
    }
})