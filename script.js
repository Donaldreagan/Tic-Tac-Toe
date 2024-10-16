let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

// Function to handle cell click
function handleCellClick(index) {
  if (gameOver || gameBoard[index] !== '') return;

  gameBoard[index] = currentPlayer;
  document.getElementById(`cell-${index}`).innerText = currentPlayer;

  checkWinner();

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Function to check winner
function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      gameOver = true;
      alert(`Player ${gameBoard[a]} wins!`);
      return;
    }
  }

  // Check for draw
  if (!gameBoard.includes('')) {
    gameOver = true;
    alert('It\'s a draw!');
  }
}

// Function to reset game
function resetGame() {
  currentPlayer = 'X';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameOver = false;

  for (let i = 0; i < 9; i++) {
    document.getElementById(`cell-${i}`).innerText = '';
  }
}

// Add event listeners
for (let i = 0; i < 9; i++) {
  document.getElementById(`cell-${i}`).addEventListener('click', () => handleCellClick(i));
}

document.getElementById('reset-button').addEventListener('click', resetGame);