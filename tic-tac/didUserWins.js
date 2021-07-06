// function didUserWins(userBoard, userSymbol) {
//   for (let i = 0; i < userBoard.length; i++) {
//     if (isRowomplete(userBoard, i, userSymbol)) {
//       return true;
//     } else if (isColumnComplete(userBoard, i, userSymbol)) {
//       return true;
//     } else if (isDiagonalLeftComplete(userBoard, i, userSymbol)) {
//       return true;
//     } else if (isDiagonalRightComplete(userBoard, i, userSymbol)) {
//       return true;
//     }
//   }

//   return false;
// }

// function isRowomplete(userBoard, i, userSymbol) {
//   return (
//     userBoard[i][0] === userSymbol &&
//     userBoard[i][1] === userSymbol &&
//     userBoard[i][2] === userSymbol
//   );
// }

// function isColumnComplete(userBoard, i, userSymbol) {
//   return (
//     userBoard[0][i] === userSymbol &&
//     userBoard[1][i] === userSymbol &&
//     userBoard[2][i] === userSymbol
//   );
// }

// function isDiagonalLeftComplete(userBoard, i, userSymbol) {
//   return (
//     userBoard[i][i] === userSymbol &&
//     userBoard[i + 1][i + 1] === userSymbol &&
//     userBoard[i + 2][i + 2] === userSymbol
//   );
// }

// function isDiagonalRightComplete(userBoard, i, userSymbol) {
//   return (
//     i + 2 < userBoard.length &&
//     userBoard[i + 2][i] === userSymbol &&
//     userBoard[i + 1][i + 1] === userSymbol &&
//     userBoard[i][i + 2] === userSymbol
//   );
// }
// module.exports = didUserWins;
// // export default didUserWins;
