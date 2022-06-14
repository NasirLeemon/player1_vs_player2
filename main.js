// selecting elements

let p1ScoreElm = document.querySelector('#p1Score');
let p2ScoreElm = document.querySelector('#p2Score');
let playingTo = document.querySelector('.playingTo');
let formElm = document.querySelector('form');
let inputScoreElm = document.querySelector('#inputScore');
let player1BtnElm = document.querySelector('#p1Btn');
let player2BtnElm = document.querySelector('#p2Btn');
let resetBtn = document.querySelector('#resetBtn');
// console.log(formElm);


let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let gameOver = false;
let playerTurn = 'p1'

playingTo.textContent = winningScore;

//validation input
function validationInput(score) {
    if (score < 1) {
        alert('Please Provide a number more than 0.')
    }
}

// inputing and updating playing to score
formElm.addEventListener('submit', (evt) => {
    const inputScore = inputScoreElm.value;
    evt.preventDefault();
    //getting the value
    // console.log(inputScoreElm.value);
    //showing the value in dom
    playingTo.textContent = inputScore;

    winningScore = inputScore;
    // reset the input
    inputScoreElm.value = '';
    //validation check
    validationInput(inputScore)

})




// player 1 button 


player1BtnElm.addEventListener('click', () => {
    //increse the count and update javascript data
    if (playerTurn === 'p1' && !gameOver && p1Score < winningScore) {
        p1Score++;
        playerTurn = 'p2'

        // disable p1
        player1BtnElm.setAttribute('disabled', 'disabled');

        // enable p2

        player2BtnElm.removeAttribute('disabled');
    }

    // update dom 
    p1ScoreElm.textContent = p1Score;

    if (p1Score === winningScore) {
        gameOver = true;
        // show Message
        alert('Player 1 is Winner!!')
        // disabled player 1 or player 2
        player1BtnElm.setAttribute('disabled', 'disabled');
        player2BtnElm.setAttribute('disabled', 'disabled');
    }

})

// console.log(p1Score);






player2BtnElm.addEventListener('click', () => {
    //increse the count and update javascript data
    if (playerTurn === 'p2' && !gameOver && p2Score < winningScore) {
        p2Score++
        playerTurn = 'p1';
        // disable p2
        player2BtnElm.setAttribute('disabled', 'disabled');

        // enable p1

        player1BtnElm.removeAttribute('disabled');


    }

    // update dom 
    p2ScoreElm.textContent = p2Score;

    if (p2Score === winningScore) {
        gameOver = true;


        // show Message

        alert('Player 2 is Winner!!')

        // disabled player 1 or player 2
        player1BtnElm.setAttribute('disabled', 'disabled');
        player2BtnElm.setAttribute('disabled', 'disabled');

    }



})

resetBtn.addEventListener('click', () => {
    p1Score = 0;
    p2Score = 0;
    winningScore = 5;
    gameOver = false;
    playerTurn = 'p1'

    player1BtnElm.removeAttribute('disabled');
    player2BtnElm.removeAttribute('disabled');
    p1ScoreElm.textContent = p1Score;
    p2ScoreElm.textContent = p2Score;
    playingTo.textContent = winningScore;

})