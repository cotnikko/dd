

function playGame(){
    let title = document.querySelector('h1')
let randomNum1 = Math.floor(Math.random()*6 + 1);
let randomImg1 = 'dice' + randomNum1 + '.png';
let randomImgSource1 = 'images/' + randomImg1;
let image1 = document.querySelectorAll('img')[0];
image1.setAttribute('src', randomImgSource1);

let randomNum2 = Math.floor(Math.random()*6 + 1);
let randomImg2 = 'dice'+ randomNum2 + '.png';
let randomImageSource2 = 'images/' + randomImg2;
let image2 = document.querySelectorAll('img')[1];
image2.setAttribute('src', randomImageSource2);

if(randomNum1 > randomNum2) {
    title.textContent = 'Player 1 Won'
} else if (randomNum2 > randomNum1) {
    title.textContent = 'Player 2 Won'
} else {
    title.textContent = "It's a Draw"
}

}

