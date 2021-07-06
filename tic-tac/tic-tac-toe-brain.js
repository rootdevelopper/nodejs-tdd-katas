const readline = require("readline");
const TicTacToeMain = require("./tic-tac-toe-main");

const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ticTacToe = new TicTacToeMain();
userInput.question(
  `
tic-tac-toe \n 
Welcome! Here is your board: \n
Player1 (X) where would you like to move? \n
`,
  function (position) {
    nextUserTurn(position, "o");
  }
);

function nextUserTurn(position, userTurn) {
  let userSymbol = ticTacToe.switchUserSymbol(userTurn);
  const updatedBoard = ticTacToe.newPosition(position, userSymbol);
  ticTacToe.printUpdatedBoard(updatedBoard);
  const gameOver = ticTacToe.didUserWins(updatedBoard, userSymbol);

  if (gameOver) {
    if (userSymbol === "x") {
      console.log("\nPlayer1 Wins!");
    } else {
      console.log("\nPlayer2 Wins!");
    }
    userInput.close();
  } else {
    const updatedSymbol = ticTacToe.switchUserSymbol(userSymbol);
    userInput.question(
      `Player (${updatedSymbol}) where would you like to move this time? \n`,
      function (newPosition) {
        nextUserTurn(newPosition, userSymbol);
      }
    );
  }
}

userInput.on("close", function () {
  console.log("\nCome Back to Play Again Son!");
  process.exit(0);
});
