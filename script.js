console.log("Welcome to tik tac toe!!!")
let music = new Audio("assets/music.mp3");
let gameturn = new Audio("assets/ting.mp3");
let gameover = new Audio("assets/gameover.mp3");
let isGame = false;
let count = 0;


let turn = "X"

// change turn 
let changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

// win logic
let checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxText');

    // win boxes and their translate property
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135]
    ]

    // logic of winning the game
    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && boxtexts[e[0]].innerText != '') {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + ' WON';

            isGame = true;

            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '12rem';
            music.play();
            document.querySelector(".line").style.width = "20vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    });

};

// Main Logic
let boxes = document.querySelectorAll(".box");
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector(".boxText");
    element.addEventListener('click', () => {

        if (boxtext.innerText === '' && isGame == false) {
            count++; //count for match draw
            console.log("Hii", boxtext.innerText) //for checking whether working well or not
            boxtext.innerText = turn;//to change the turn on screen
            turn = changeTurn();
            gameturn.play();//to play music after every turn
            checkWin();

            // change the turn on screen
            if (!isGame) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }


        }

        // logic for draw
        if(count == 9 && isGame == false){
            document.getElementsByClassName("info")[0].innerText = "Oops! Match draw" ;
            gameover.play();
        }

    });
});


// reset the game
let reset = document.querySelector('#reset');
reset.addEventListener('click', () => {

    let boxtexts = document.querySelectorAll('.boxText');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    })
    turn = "X";
    isGame = false;
    count = 0;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px';
    document.querySelector(".line").style.width = "0vw";
    music.load();
});

