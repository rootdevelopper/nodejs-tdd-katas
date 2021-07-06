const TicTacToeMain = require("../tic-tac-toe-main");

beforeEach(() => {});
describe("Test tic tac toe", () => {
  it("Should test user enter a new valid position on the board ", () => {
    const game = new TicTacToeMain()
    const positionRow = "1";
    const positionColumn = "1";
    const userSymbol = 'x';
   const board = game.newPosition(`${positionRow}${positionColumn}`, userSymbol);
   expect(board[positionRow][positionColumn]).toEqual(userSymbol);
  });

  it("Should test user enter a new invalid position legth on the board ", () => {
    const originalBoard = [ [ '', '', '' ], [ '', '', '' ], [ '', '', '' ] ];
    const game = new TicTacToeMain();
    const positionRow = "10";
    const positionColumn = "1";
    const userSymbol = 'x';
    const board = game.newPosition(`${positionRow}${positionColumn}`, userSymbol);   
    expect(board).toEqual(originalBoard);
  });

  it("Should test user enter a new invalid position value on the board ", () => {
    const originalBoard = [ [ '', '', '' ], [ '', '', '' ], [ '', '', '' ] ];
    const game = new TicTacToeMain();
    const positionRow = "5";
    const positionColumn = "7";
    const userSymbol = 'x';
    const board = game.newPosition(`${positionRow}${positionColumn}`, userSymbol);    
    expect(board).toEqual(originalBoard);
  });
});

describe("did user win", () => {
  it("one row match", () => {

    const game = new TicTacToeMain();
    const userSymbol = "x";
    let firstRow = [userSymbol, userSymbol, userSymbol];
    let secondRow = ["", "", ""];
    let thirdRow = ["", "", ""];

    const board = [firstRow, secondRow, thirdRow];
    const userWins = game.didUserWins(board, userSymbol);
    expect(userWins).toEqual(true);
  });

  it("second row match", () => {
    const game = new TicTacToeMain();
    const userSymbol = "x";
    let firstRow = ["", "", ""];
    let secondRow = [userSymbol, userSymbol, userSymbol];
    let thirdRow = ["", "", ""];

    const board = [firstRow, secondRow, thirdRow];
    const userWins = game.didUserWins(board, userSymbol);
    expect(userWins).toEqual(true);
  });

  it("third row match", () => {
    const game = new TicTacToeMain();
    const userSymbol = "x";
    let firstRow = ["", "", ""];
    let secondRow = ["", "", ""];
    let thirdRow = [userSymbol, userSymbol, userSymbol];

    const board = [firstRow, secondRow, thirdRow];
    const userWins = game.didUserWins(board, userSymbol);
    expect(userWins).toEqual(true);
  });

  it("firts column match", () => {
    const game = new TicTacToeMain();
    const userSymbol = "x";
    let firstRow = [userSymbol, "", ""];
    let secondRow = [userSymbol, "", ""];
    let thirdRow = [userSymbol, "", ""];

    const board = [firstRow, secondRow, thirdRow];

    const userWins = game.didUserWins(board, userSymbol);
    expect(userWins).toEqual(true);
  });

  it("second column match", () => {
    const game = new TicTacToeMain();
    const userSymbol = "x";
    let firstRow = ["", userSymbol, ""];
    let secondRow = ["", userSymbol, ""];
    let thirdRow = ["", userSymbol, ""];

    const board = [firstRow, secondRow, thirdRow];

    const userWins = game.didUserWins(board, userSymbol);
    expect(userWins).toEqual(true);
  });

  it("third column match", () => {
    const game = new TicTacToeMain();
    const userSymbol = "x";
    let firstRow = ["", "", userSymbol];
    let secondRow = ["", "", userSymbol];
    let thirdRow = ["", "", userSymbol];

    const board = [firstRow, secondRow, thirdRow];

    const userWins = game.didUserWins(board, userSymbol);
    expect(userWins).toEqual(true);
  });

  it("right diagonal match", () => {
    const game = new TicTacToeMain();
    const userSymbol = "x";
    let firstRow = [userSymbol, "", ""];
    let secondRow = ["", userSymbol, ""];
    let thirdRow = ["", "", userSymbol];

    const board = [firstRow, secondRow, thirdRow];
    const userWins = game.didUserWins(board, userSymbol);
    expect(userWins).toEqual(true);
  });

  it("left diagonal match", () => {
    const game = new TicTacToeMain();
    const userSymbol = "x";
    let firstRow = ["", "", userSymbol];
    let secondRow = ["", userSymbol, ""];
    let thirdRow = [userSymbol, "", ""];

    const board = [firstRow, secondRow, thirdRow];
    const userWins = game.didUserWins(board, userSymbol);
    expect(userWins).toEqual(true);
  });
});

describe('Switch user symbol ', ()=> {
  it('Should switch symbol from x to o', ()=> {
    const game = new TicTacToeMain();
    const currentSymbol = 'x'
    const symbol = game.switchUserSymbol(currentSymbol);
    expect(symbol).toEqual('o');
  });

  it('Should switch symbol from o to x', ()=> {
    const game = new TicTacToeMain();
    const currentSymbol = 'o'
    const symbol = game.switchUserSymbol(currentSymbol);
    expect(symbol).toEqual('x');
  });
})
