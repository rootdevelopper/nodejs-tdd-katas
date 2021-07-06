const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name ? ", function(name) {
    rl.question("Where do you live ? ", function(country) {
        console.log(`${name}, is a citizen of ${country}`);
        rl.close();
    });
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});

// const readline = require("readline");
// const userInput = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// function TicTacToeBrains(){
// let firstRow = ["", "", ""];
// let secondRow = ["", "", ""];
// let thirdRow = ["", "", ""];

// let board = [firstRow, secondRow, thirdRow];



// userInput.question("What is your name ? ", function(name) {
//     userInput.question("Where do you live ? ", function(country) {
//         console.log(`${name}, is a citizen of ${country}`);
//         userInput.close();
//     });
// });


// userInput.on("close", function() {
//     console.log("\nBYE BYE !!!");
//     process.exit(0);
// });
// userInput.question(
//   "tic-tac-toe \n Welcome! Here is your board: \n Player1 (X) where would you like to move? \n",
//   function (position) {
//     console.log(position);
//     const userDecision = position.split("");
//     const column = userDecision[0];
//     const row = userDecision[1];
//     // somehow need to know is user is X or 0
//     let userSymbol = "x";
//     board[column][row] = userSymbol;
//     console.log("result board ", board);
//   }
// //    userTurn('x'),
// );

// function didUserWins(userBoard, userSymbol) {

//   console.log('userBoard', userBoard);
//   console.log('user symbol', userSymbol);

//   for(let i=0; i< userBoard.length; i++){
//     if(userBoard[i]=== userSymbol && userBoard[i+1]=== userSymbol && userBoard[i+2] === userSymbol){
//       console.log('user symbol is the winner ', userSymbol);
//       return true;
//     }
//   }

// return false;
// }


// function userTurn(userSymbol){
//   console.log(position);
//   const userDecision = position.split("");
//   const column = userDecision[0];
//   const row = userDecision[1];
//   // somehow need to know is user is X or 0
// //   let userSymbol = "x";
//   board[column][row] = userSymbol;
//   console.log("result board ", board);
//   return position;
// }



// function sum(a, b) {
//     return a + b;
//   }

//   export default sum;
// export default userTurn;

// }
// export default TicTacToeBrains();



const readline = require("readline");
const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function TicTacToeGame(){
let firstRow = ["", "", ""];
let secondRow = ["", "", ""];
let thirdRow = ["", "", ""];

let board = [firstRow, secondRow, thirdRow];


userInput.question(
  "tic-tac-toe \n Welcome! Here is your board: \n Player1 (X) where would you like to move? \n",
  // function (position) {
  //   console.log(position);
  //   const userDecision = position.split("");
  //   const column = userDecision[0];
  //   const row = userDecision[1];
  //   // somehow need to know is user is X or 0
  //   let userSymbol = "x";
  //   board[column][row] = userSymbol;
  //   console.log("result board ", board);
  // }
   userTurn(),
);

function didUserWins(userBoard, userSymbol) {

  console.log('userBoard', userBoard);
  console.log('user symbol', userSymbol);

  for(let i=0; i< userBoard.length; i++){
    if(userBoard[i]=== userSymbol && userBoard[i+1]=== userSymbol && userBoard[i+2] === userSymbol){
      console.log('user symbol is the winner ', userSymbol);
      return true;
    }
  }

return false;
}


function userTurn(){
  console.log(position);
  const userDecision = position.split("");
  const column = userDecision[0];
  const row = userDecision[1];
  // somehow need to know is user is X or 0
  let userSymbol = "x";
  board[column][row] = userSymbol;
  console.log("result board ", board);
  return position;
}



// function sum(a, b) {
//     return a + b;
//   }

//   export default sum;
// export default userTurn;

}
// export default TicTacToeGame();
