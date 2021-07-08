module.exports = class TicTacToeMain {
  firstRow = ["", "", ""];
  secondRow = ["", "", ""];
  thirdRow = ["", "", ""];

  board = [this.firstRow, this.secondRow, this.thirdRow];
  enteredvalues = [];

  newPosition(position, userSymbol) {

    if(this.enteredvalues.includes(position)){
        console.log('value was already entered ');
    }
    this.enteredvalues.push(position);

    const userDecision = position.split("");
    const column = userDecision[0];
    const row = userDecision[1];

    if ( this.validatePositionValue(position, row, column)) {

      this.board[column][row] = userSymbol;
      return this.board;
    } else {
      console.log(
        "Please enter an input of 2 digits. Each Digit must be between 0 and 3"
      );
      return this.board;
    }
  }


   didUserWins(userBoard, userSymbol) {
    for (let i = 0; i < userBoard.length; i++) {
      if (
        this.isRowomplete(userBoard, i, userSymbol) ||
        this.isColumnComplete(userBoard, i, userSymbol) ||
        this.isDiagonalLeftComplete(userBoard, i, userSymbol) ||
        this.isDiagonalRightComplete(userBoard, i, userSymbol)
      ) {
        return true;
      } 
    }
    return false;
  }
  
   isRowomplete(userBoard, i, userSymbol) {
    return (
      userBoard[i][0] === userSymbol &&
      userBoard[i][1] === userSymbol &&
      userBoard[i][2] === userSymbol
    );
  }
  
   isColumnComplete(userBoard, i, userSymbol) {
    return (
      userBoard[0][i] === userSymbol &&
      userBoard[1][i] === userSymbol &&
      userBoard[2][i] === userSymbol
    );
  }
  
   isDiagonalLeftComplete(userBoard, i, userSymbol) {
    return (
      i + 2 < userBoard.length &&
      userBoard[i][i] === userSymbol &&
      userBoard[i + 1][i + 1] === userSymbol &&
      userBoard[i + 2][i + 2] === userSymbol
    );
  }
  
   isDiagonalRightComplete(userBoard, i, userSymbol) {
    return (
      i + 2 < userBoard.length &&
      userBoard[i + 2][i] === userSymbol &&
      userBoard[i + 1][i + 1] === userSymbol &&
      userBoard[i][i + 2] === userSymbol
    );
  }

  validateInputValue(value) {
    return value >= 0 && value <= 2;
  }

  validatePositionValue(position, row, column){
      return position.length === 2 &&
      this.validateInputValue(row) &&
      this.validateInputValue(column)
  }

  switchUserSymbol(userSymbol){
      return userSymbol == 'o' ? 'x' : 'o';
  }

  printUpdatedBoard(board){

      const firstRow  = this.formatMatrixValues(board[0]);      
      const secondRow = this.formatMatrixValues(board[1]);      
      const thirdRow  = this.formatMatrixValues(board[2]);      
      console.log(firstRow);
      console.log(secondRow);
      console.log(thirdRow);
  }

  formatMatrixValues(boardRow){
    return boardRow.map((value) => value === '' ? '-' : value
    )
  }
};
