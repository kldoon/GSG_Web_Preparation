const INITIAL_BOARD = ['', '', '', '', '', '', '', '', ''];
let board = [...INITIAL_BOARD];
let turn = 'X';
let xScore = 0, oScore = 0;

const boardElement = document.getElementById('board');
const turnElement = document.getElementById('turn');

const render = () => {
  boardElement.innerHTML = '';
  board.forEach((cell, index) => {
    boardElement.insertAdjacentHTML('beforeend', `
      <button 
          onclick="play(${index})"
          class="cell ${cell}">${cell}
      </button>
    `);
  });

  turnElement.innerHTML = `${turn} Turn`;
}

render();

const play = (index) => {
  if (board[index] !== '') {
    return;
  }
  board[index] = turn;
  turn = turn === 'X' ? 'O' : 'X';
  render();
  const winner = calcResult();
  if (winner) {
    renderWinner(winner);
  }
}

const renderWinner = (winner) => {
  if (winner === 'X') {
    xScore++;
    document.getElementById("xScore").innerText = 'X: ' + xScore;
  } else if (winner === 'O') {
    oScore++;
    document.getElementById("oScore").innerText = 'O: ' + oScore;
  }
  // localStorage.setItem('scores', JSON.stringify({ xScore, oScore }));

  boardElement.insertAdjacentHTML('beforeend',
    `
       <div class="result">
          <span style="text-shadow: 0px 0px 13px #c8768f;">${winner === 'D' ? 'Draw  :-(' : `The winner is ${winner}`}</span>
          <button style="box-shadow: inset 0px -2px 11px 2px #b54d6d;" onclick="playAgain()">Play Again</button>
       </div>
    `
  );

}

const calcResult = () => {
  // Define the winning combinations (rows, columns, diagonals)
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]  // Diagonals
  ];

  // Check if any of the winning combinations are filled with the same symbol
  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]; // Return 'X' or 'O'
    }
  }

  // Is the board full?
  if (!board.includes('')) {
    return 'D';
  }

  return null; // No winner
}

const playAgain = () => {
  board = [...INITIAL_BOARD];
  turn = 'X';
  render();
}