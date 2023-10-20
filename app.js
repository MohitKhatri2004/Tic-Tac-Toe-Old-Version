const h2 = document.querySelector('h2');
const button = document.querySelector('button');
const cells = document.querySelectorAll('.cell');

let board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];

let player = 'X';

h2.innerText = `First ${player}'s turn`;

let gameOver = false;
let count = 0;
const check = function (row, col) {
    if (board[row][0] === board[row][1] && board[row][1] === board[row][2]) {
        gameOver = true;
        h2.innerText = `${player} WON!!!!!`;
        h2.style.color = "green";
        return true;
    }
    else if (board[0][col] === board[1][col] && board[1][col] === board[2][col]) {
        gameOver = true;
        h2.innerText = `${player} WON!!!!!`;
        h2.style.color = "green";
        return true;
    }
    else if (board[0][0] !== ' ' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        gameOver = true;
        h2.innerText = `${player} WON!!!!!`;
        h2.style.color = "green";
        return true;
    }
    else if (board[1][1] !== ' ' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        gameOver = true;
        h2.innerText = `${player} WON!!!!!`;
        h2.style.color = "green";
        return true;
    }
    return false;
}

const game = function (e) {
    if (!gameOver)
        if (board[parseInt(this.id / 3)][parseInt(this.id % 3)] === ' ') {
            this.innerText = player;
            count++;
            board[parseInt(this.id / 3)][parseInt(this.id % 3)] = player;
            if (count == 9 && !check(parseInt(this.id / 3), parseInt(this.id % 3))) {
                h2.innerText = `TIE!!!! -- Game Over`;
                gameOver = true;
                return;
            }
            else if (!check(parseInt(this.id / 3), parseInt(this.id % 3))) {
                player = (player === 'X') ? 'O' : 'X';
                h2.innerText = `${player}'s turn`;
            }
        }
        else {
            h2.innerText = "Invalid Click";
        }
}

for (let i = 0; i < 9; i++) {
    cells[i].addEventListener('click', game);
}


button.addEventListener('click', () => {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            board[i][j] = ' ';
        }
    }
    for (let i = 0; i < 9; i++) {
        cells[i].innerText = "";
    }
    gameOver = false;
    player = 'X';
    h2.innerText = `First ${player}'s turn`;
    h2.style.color = "black";
    count = 0;
})