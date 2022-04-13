// Write your code here
const backButton = document.querySelector('#button-back')
const nextkButton = document.querySelector('#button-next')
const imgGames = document.querySelector('#img-games')

const img0 = 'https://media.istockphoto.com/photos/video-gaming-console-man-playing-rpg-strategy-game-picture-id1324673294?b=1&k=20&m=1324673294&s=170667a&w=0&h=Cv-F1d5n6nPr_VydhJ0D82u2uiyCZ1dK1ZqBwTzjq5A='
const img1 = 'https://media.istockphoto.com/photos/gamer-room-picture-id1311350206?b=1&k=20&m=1311350206&s=170667a&w=0&h=cUKGHoj91by8DJ1iSuNREjTo-i2FpffvtvNMnsq4Fmg='
const img2 = 'https://media.istockphoto.com/photos/3d-render-illustration-of-scifi-first-person-shooter-game-with-hands-picture-id1325074732?b=1&k=20&m=1325074732&s=170667a&w=0&h=CfcQicl6KpTzijmO4UqHrK_aLwHAJuEfHGmdPXgIAH4='
const img3 = 'https://images.unsplash.com/photo-1593118247619-e2d6f056869e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmlkZW8lMjBnYW1lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
const img4 = 'https://media.istockphoto.com/photos/young-man-playing-video-game-by-wearing-vr-or-virtual-reality-goggles-picture-id1334401071?k=20&m=1334401071&s=612x612&w=0&h=bfUw0r6pyu7UyEABD6YKHlBas9T9F88rICTnzJnOiFM='

const arrayOfImg = [img1,img2,img3,img0,img4]

let count=0
nextkButton.addEventListener('click',event => {
    event.preventDefault()
    if(count <= arrayOfImg.length-1){
        console.log(count);
        imgGames.setAttribute('src',arrayOfImg[count])
        count++
        console.log(count);
    }else{
        count = 0
        console.log(count);
        imgGames.setAttribute('src',arrayOfImg[count])
        count++
        console.log(count);
    }
})

backButton.addEventListener('click',event => {
    event.preventDefault()
    if(count === 0 || count === 5){
        count = 4
        console.log(count);
        imgGames.setAttribute('src',arrayOfImg[count])
        count--
        console.log(count);
    }
    else{
        console.log(count);
        imgGames.setAttribute('src',arrayOfImg[count])
        count --
        console.log(count);
    }
})